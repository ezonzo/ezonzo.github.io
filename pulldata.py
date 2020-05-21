import csv
import requests
import json
import os

CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTtx__q4ClgJ0X5Tx1ZRX55wLnCNKDt39Eo9TZF5a1_xOwzQYKMEUgTGAcNvZw8rIZ4_UShIxyCvhYj/pub?gid=0&single=true&output=csv'

COL_MAP = {
            "category": "category",
            "catalog endpoint": "catalog",
            "Business name": "name",
            "Business address": "address",
            "e-mail": "email",
            "phone number": "number",
            "nationwide": "nationwide"
        }


def main():
    with requests.Session() as s:
        download = s.get(CSV_URL)
        decoded_content = download.content.decode('utf-8')

        cr = csv.reader(decoded_content.splitlines(), delimiter=',')
        rows = list(cr)
        fields = None
        docs = []
        for row in rows:
            if not fields:
                fields = [COL_MAP.get(f, f) for f in row]

            if not row[1] or row[0] == 'category':
                continue

            docs.append(dict(zip(fields, row)))
    
    if not os.path.isdir('./data'):
        print('data dir not found, creating it')
        os.makedirs('./data')

    with open('./web/js/businesses.js', 'w') as f:
        js = "var businesses = "
        js += json.dumps(docs, indent=4, separators=(',', ': '))
        js += '''
        ; 
        var categories = businesses.reduce((agg, b) => {
        return agg.includes(b.category) ? agg : [...agg, b.category]
        }, [])

        '''
        f.write(js)


    print('Dumped {} rows'.format(len(docs)))




if __name__ == '__main__':
    main()

