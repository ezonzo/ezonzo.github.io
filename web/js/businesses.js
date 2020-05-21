var businesses = [
    {
        "category": "Abbigliamento",
        "name": "imperial",
        "address": "Via dei Lanaioli, 42, 40050 Bologna BO",
        "catalog": "https://www.imperialfashion.com/it/it/catalogsearch/result/?q=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS20/Homepage/Imperial_HP.jpg"
    },
    {
        "category": "Abbigliamento",
        "name": "upim",
        "address": "P.co Commerc. Meraville, Viale Tito Carnacini, 21 c",
        "catalog": "https://www.upim.com/on/demandware.store/Sites-upim-italy-Site/it_IT/Search-Show?q=mazzi&lang=it_IT",
        "email": "",
        "number": "",
        "nationwide": "TRUE",
        "logo": "https://www.upim.com/on/demandware.static/Sites-upim-italy-Site/-/default/dwe422917d/img/logo-upim.png"
    },
    {
        "category": "Abbigliamento",
        "name": "O'dett",
        "address": "Via Ugo Bassi, 8/B - 40121 Bologna (BO)",
        "catalog": "https://www.odett.it/od/abbigliamento/",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.odett.it/wp-content/themes/sovereign/assets/img/logo_white.png"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Floema S.r.l..",
        "address": "Via Cassola, 17/a, Crespellano (BO)",
        "catalog": "https://www.agricolafloema.it/ordina/",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.agricolafloema.it/content/uploads/2018/08/floema-logo_W-02.png"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Tamburini",
        "address": "VIA CAPRARIE 1 40124 BOLOGNA",
        "catalog": "https://www.tamburini.com/shop/?s=mazzi&post_type=product",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.tamburini.com/shop/wp-content/uploads/2015/11/cropped-header.png"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Fratelli Carli S.p.A.",
        "address": "Via Massimo D'Azeglio 1/E - 40123 Bologna",
        "catalog": "https://www.oliocarli.it/search?q=mazzi&lang=it&cgid=a0Q1q000001McqlEAC",
        "email": "",
        "number": "051 228286",
        "nationwide": "",
        "logo": "https://www.oliocarli.it/on/demandware.static/-/Sites-Carli_Italia-Library/default/dw86f542fe/Sites_Carli/loghi-footer/logo_carli_light.svg"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Ceccarelli Gastronomia",
        "address": "Via Pescherie Vecchie, 8",
        "catalog": "https://www.ceccarelligastronomia.it/shop/",
        "email": "",
        "number": "051 231529",
        "nationwide": "",
        "logo": "https://www.ceccarelligastronomia.it/wp-content/uploads/2020/03/logo-per-immagini-scaled-e1584647405160.jpg"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Asia Mach di Mach Truoc Anh",
        "address": "Via Mascarella, 81 abc",
        "catalog": "https://www.asiamach.com/search?q=mazzi",
        "email": "",
        "number": "051 253288",
        "nationwide": "",
        "logo": "non la salva e sembra in Times New Roman"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Olimpia Drogheria",
        "address": "Viale A. Oriani, 26/A",
        "catalog": "https://www.drogheriaolimpia.com/ricerca?controller=search&s=mazzi",
        "email": "",
        "number": "051 347510",
        "nationwide": "",
        "logo": "https://www.drogheriaolimpia.com/img/xdrogheria-olimpia-store-online-logo-1492599156.jpg.pagespeed.ic.w62knTpQfH.png"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Caff\u00e8 14 luglio",
        "address": "Via degli Orefici, 6, 40124",
        "catalog": "https://www.caffe14luglio.com/dynamics/it/risultati-di-ricerca?search=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.caffe14luglio.com/immagini/caffe-14-luglio-logo.svg"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Macelleria con cucina Agnoletto e Bignami",
        "address": "Via Pescherie Vecchie 10",
        "catalog": "https://www.macelleriaagnoletto.com/search?q=mazzi",
        "email": "info@macelleriagnoletto.it",
        "number": "051 234208",
        "nationwide": "",
        "logo": ""
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Carusi Snc",
        "address": "Via Giacomo Matteotti, 6 - 40129 Bologna",
        "catalog": "http://www.carusi.it/ricerca.php?search=mazzi",
        "email": "",
        "number": "051 357243",
        "nationwide": "",
        "logo": "http://www.carusi.it/img/logo_carusi.gif"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Enoteca Dionisio",
        "address": "Via delle Belle Arti 3/A - 40126 Bologna -",
        "catalog": "https://www.enotecadioniso.net/search-results-page/mazzi",
        "email": "",
        "number": "39 051 262303",
        "nationwide": "",
        "logo": "https://static.wixstatic.com/media/7bcb3b_7c2aa98331774e289b9e35bc6b43a32b.png/v1/fill/w_249,h_88,al_c,q_85,usm_0.66_1.00_0.01/7bcb3b_7c2aa98331774e289b9e35bc6b43a32b.webp"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Simoni Shop srls",
        "address": "Via Pescherie Vecchie 3/B",
        "catalog": "https://www.salumeriasimoni.it/shop/",
        "email": "shop@salumeriasimoni.it",
        "number": "39 3476931097",
        "nationwide": "",
        "logo": "https://www.salumeriasimoni.it/wp-content/uploads/2018/09/logo-simoni-2x.png"
    },
    {
        "category": "Alimentari e cura della casa",
        "name": "Forno Calzolari",
        "address": "via delle fragole, 1",
        "catalog": "https://acasatua.fornocalzolari.it/search?q=mazzi",
        "email": "info@fornocalzolari.it",
        "number": "",
        "nationwide": "",
        "logo": "https://cdn.shopify.com/s/files/1/0279/5559/3304/files/Logo_Forno_Calzolari_colore_360x.png?v=1585929855"
    },
    {
        "category": "Cibo a domicilio",
        "name": "Zushi",
        "address": "via Pietramellara 4",
        "catalog": "https://www.zushi.eu/it/negozio/menu/15/Bologna/",
        "email": "bologna@zushi.eu",
        "number": "051 6493719",
        "nationwide": "",
        "logo": "Cibo a domicilio"
    },
    {
        "category": "Cibo a domicilio",
        "name": "Pizzeria Portamivia",
        "address": "Via Azzurra 55",
        "catalog": "https://ordina.pizzaportamivia.it/",
        "email": "info@pizzaportamivia.it",
        "number": "39 051 397 781",
        "nationwide": "",
        "logo": "https://ordina.pizzaportamivia.it/cache/restaurants/246/logo_portamivia_h300.JPG"
    },
    {
        "category": "Auto e Moto - Parti e Accessori",
        "name": "Bep's",
        "address": "Via Stalingrado 67/20",
        "catalog": "https://www.beps.it/it/catalogsearch/result/?q=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.beps.it/pub/media/logo/default/logo.png"
    },
    {
        "category": "Auto e Moto - Parti e Accessori",
        "name": "ICMA",
        "address": "Via Guido Rossa, 78, 40033 Casalecchio di Reno BO, Italy",
        "catalog": "https://icmagroup.it/",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://icmagroup.it/wp-content/uploads/logo.png"
    },
    {
        "category": "Bellezza",
        "name": "Idea Bellezza",
        "address": "",
        "catalog": "https://www.ideabellezza.it/tmsearch?orderby=position&orderway=desc&search_categories=2&search_query=mazzi&tm_submit_search=",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.ideabellezza.it/img/logo.svg"
    },
    {
        "category": "Bellezza",
        "name": "TRE EFFE s.r.l.",
        "address": "Via Irnerio 12/2 - 40126 Bologna",
        "catalog": "https://www.salutepiu.store/?s=mazzi&post_type=product",
        "email": "info@salutepiu.store",
        "number": "051 4210046",
        "nationwide": "",
        "logo": "https://www.salutepiu.store/wp-content/uploads/2019/11/salute-pi%C3%B9-concept-store-5-300x95.png"
    },
    {
        "category": "Cancelleria e prodotti per ufficio",
        "name": "Cartoleria Maria Pia",
        "address": "Piazza Bonazzi 8/D - Bologna (BO)",
        "catalog": "https://www.cartoleriamariapia.net/m/search",
        "email": "mariapiasrl@cartopia.it",
        "number": "051 6195828",
        "nationwide": "",
        "logo": "https://www.cartoleriamariapia.net/images/theme/f8c0730903a5bb018329d5c0075236fe.jpg"
    },
    {
        "category": "Cancelleria e prodotti per ufficio",
        "name": "Cartoleria Nuova G. M. Forniture per ufficio",
        "address": "Via Amedeo Parmeggiani, 2, 40131 Bologna BO, Italy",
        "catalog": "http://www.cartolerianuovagm.it/prestashop/",
        "email": "",
        "number": "051 551 299",
        "nationwide": "",
        "logo": "http://www.cartolerianuovagm.it/prestashop/img/logo.jpg?1527259854"
    },
    {
        "category": "Casa e cucina",
        "name": "Casa del Legno - Arredamenti e Falegnameria - Bologna",
        "address": "Lavori in, Piazza Maggiore, 40100 Bologna BO, Italy",
        "catalog": "https://www.casadellegno.com/?s=mazzi",
        "email": "",
        "number": "0536 946537",
        "nationwide": "",
        "logo": "https://www.casadellegno.com/wp-content/uploads/2016/01/logo_scontorno.png"
    },
    {
        "category": "CD e Vinili",
        "name": "Disco D'Oro Sas",
        "address": "Via Galliera, 23, 40121 Bologna BO, Italy",
        "catalog": "https://www.discogs.com/it/search/?q=mazzi&type=all",
        "email": "",
        "number": "051 260 907",
        "nationwide": "",
        "logo": "https://img.discogs.com/IBNrZrS47fS7YvoO3jCGJ_1Tyuk=/300x300/filters:strip_icc():format(jpeg):quality(40)/discogs-avatars/U-3861933-1487935815.jpeg.jpg"
    },
    {
        "category": "CD e Vinili",
        "name": "SEMM Music Store & More",
        "address": "Via Guglielmo Oberdan, 24f, 40126 Bologna BO, Italy",
        "catalog": "http://www.semmstore.com/?s=mazzi",
        "email": "info@semmstore.com",
        "number": "051 225 425",
        "nationwide": "",
        "logo": "http://www.semmstore.com/wp-content/uploads/2016/03/logo-Semm_BN-300x91.png"
    },
    {
        "category": "Elettronica",
        "name": "Mister Web",
        "address": "Piazza dell'Otto Agosto, 5, 40126 Bologna BO, Italy",
        "catalog": "https://www.misterweb.it/ricerca?controller=search&orderby=position&orderway=desc&search_query=mazzi&submit_search=",
        "email": "",
        "number": "051 054 6366",
        "nationwide": "",
        "logo": "https://www.misterweb.it/img/mister-web-srl-logo-1470313495.jpg"
    },
    {
        "category": "Elettronica",
        "name": "RadioRicambi",
        "address": "Via Orfeo, 33/2, 40124 Bologna BO, Italy",
        "catalog": "https://www.radioricambi.it/?product_cat=&s=mazzi&post_type=product",
        "email": "",
        "number": "051 250 044",
        "nationwide": "",
        "logo": "https://www.radioricambi.it/wp-content/uploads/2016/05/logo_sito_radioricambi_ok.jpg"
    },
    {
        "category": "Fai da te",
        "name": "Hobby & Legno",
        "address": "Via Fratelli Cairoli, 7, 40055 Villanova BO, Italy",
        "catalog": "https://www.hobbyelegno.it/cerca.php",
        "email": "",
        "number": "051 605 3374",
        "nationwide": "",
        "logo": "https://www.hobbyelegno.it/images/logos/1.png"
    },
    {
        "category": "Fai da te",
        "name": "Brico io",
        "address": "Via Bizzarri, 10, 40012 Bargellino BO, Italy",
        "catalog": "https://www.bricoio.it/it-IT-it/Ricerca.aspx?ev0=mazzi",
        "email": "",
        "number": "051 729 052",
        "nationwide": "",
        "logo": "https://www.bricoio.it/risorse/BRICOI/images/commons/Logo.png"
    },
    {
        "category": "Film e TV",
        "name": "Mediaworld Bologna",
        "address": "Parco Acquisti Meraville, Viale Tito Carnacini, 25, 40127 Bologna BO",
        "catalog": "https://www.mediaworld.it/search/mazzi",
        "email": "",
        "number": "051 637 9111",
        "nationwide": "",
        "logo": "https://asset.mediaw.it/frontend/2018-11/MediaWorld_Logo_1.png"
    },
    {
        "category": "Film e TV",
        "name": "Unieuro",
        "address": "via C. Colombo, 7/30, 40131 Bologna Bologna",
        "catalog": "https://www.unieuro.it/online/negozi/Unieuro-Bologna---Lame/?q=mazzi",
        "email": "",
        "number": "051-6342320",
        "nationwide": "",
        "logo": "https://static1.unieuro.it/medias/sys_master/root/h84/h96/28689109647390/unieuro-brand-logo-full.png"
    },
    {
        "category": "Giardino e giardinaggio",
        "name": "Fiorista Donatella snc",
        "address": "Via della Barca ,1/3c,40133 Bologna",
        "catalog": "http://www.fioriabologna.it/ricerca-prodotto.htm?key=mazzi",
        "email": "fiorista.donatella@email.it",
        "number": "3398763858",
        "nationwide": "",
        "logo": "http://www.fioriabologna.it/images/logo/007.png"
    },
    {
        "category": "Giardino e giardinaggio",
        "name": "Fiori E Piante Vally Fleurs Di Barioni Silvia",
        "address": "Via A. Costa , 35/D",
        "catalog": "https://www.fioriepiantevallyfleurs.it/ordina-fiori/mazzi",
        "email": "barionisilvia@virgilio.it",
        "number": "051 435581",
        "nationwide": "",
        "logo": "https://www.fioriepiantevallyfleurs.it/immagini/_/AT5MB0/logo_fiorista.png?v=04042020172337"
    },
    {
        "category": "Giardino e giardinaggio",
        "name": "Fioreria Floriana di Giacomelli Floriana",
        "address": "Via Riva di Reno 60/F",
        "catalog": "https://fioreriafloriana.com/?s=mazzi&post_type=product",
        "email": "",
        "number": "051 522145",
        "nationwide": "",
        "logo": "https://fioreriafloriana.com/wp-content/uploads/2017/06/logo-fioreria-floriana.png"
    },
    {
        "category": "Giochi e giocattoli",
        "name": "Citt\u00e0 del sole srl",
        "address": "Via S.Felice, 81/A-B",
        "catalog": "https://www.cittadelsole.it/customer/ricerca.php?substring=mazzi&catebig%5B%5D=Citta+del+Sole&catebig%5B%5D=categorie&catebig%5B%5D=Natura+e&typesearch=extendedsearch&vers=Citta+del+Sole&showhow=simple&sl=IT&in_offerta=1",
        "email": "bo.stradamaggiore@cittadelsole.com",
        "number": "051-266432",
        "nationwide": "",
        "logo": "https://www.cittadelsole.it/skin1/images/logo-cds.png"
    },
    {
        "category": "Giochi e giocattoli",
        "name": "Giocheria Bologna Centro",
        "address": "Via Castiglione 11/A,40124 Bologna",
        "catalog": "https://www.giocheria.it/product/uncategorized/mazzi",
        "email": "business@giocattoli-online.net",
        "number": "051-0956305",
        "nationwide": "",
        "logo": "https://www.giocheria.it/wp-content/uploads/logo_stroke-1.png"
    },
    {
        "category": "Gioielli",
        "name": "NGB Jewels",
        "address": "Via dell'Indipendenza, 25/b, 40121 Bologna BO",
        "catalog": "https://ngbjewels.com/pages/instagram-shop",
        "email": "info@ngbjewels.com",
        "number": "051 234241",
        "nationwide": "",
        "logo": "https://cdn.shopify.com/s/files/1/0021/8149/6891/products/Ngb_Jewels_-_El_boton_Earrings_-_Silver_01_600x600_crop_center.jpg?v=1571322247"
    },
    {
        "category": "Gioielli",
        "name": "Bijou Brigitte",
        "address": "Via dell'Indipendenza, 23",
        "catalog": "https://www.bijou-brigitte.com/it/search?sSearch=mazzi",
        "email": "online-shop@bijou-brigitte.com",
        "number": "051 226194",
        "nationwide": "",
        "logo": "https://www.bijou-brigitte.com/media/vector/40/17/9a/709x316-BBLogo.svg"
    },
    {
        "category": "Grandi elettrodomestici",
        "name": "ZACCARINI & VANGELISTI",
        "address": "Via Selva Pescarola, 6/8 \u2013 40131 Bologna",
        "catalog": "https://www.zaccarinievangelisti.com/vendita-elettrodomestici",
        "email": "zaccarini.snc@tin.it",
        "number": "39 051-6343214",
        "nationwide": "",
        "logo": "https://lirp-cdn.multiscreensite.com/33539aee/dms3rep/multi/opt/elettrodomestici-riparazione-vendita-zaccarini-vangelisti-bologna-002-466w.jpg"
    },
    {
        "category": "Grandi elettrodomestici",
        "name": "Comet",
        "address": "Via IV Novembre 6/A - Bologna",
        "catalog": "https://www.comet.it/search?iq=mazzi",
        "email": "",
        "number": "051 275 5611",
        "nationwide": "",
        "logo": "https://cdnakamai.comet.it/b2c/public/assets.v2018/fe/img/2018-logo-top.svg"
    },
    {
        "category": "Handmade",
        "name": "Double Trouble Bologna",
        "address": "Via Santo Stefano, 80, 40125 Bologna BO",
        "catalog": "https://www.doubletroublebologna.it/search?q=mazzi",
        "email": "info@doubletroublebologna.it",
        "number": "(+39) 347 934 6590",
        "nationwide": "",
        "logo": "https://static1.squarespace.com/static/5971e1839de4bbfe8d868839/t/5e3ea4bfced26d7c65ae9bea/1585669601904/?format=1500w"
    },
    {
        "category": "Handmade",
        "name": "GRUCCIALTERNA di Buonacara F.&C. S.n.c",
        "address": "Strada Maggiore 58/a Bologna",
        "catalog": "http://www.gruccialterna.com/",
        "email": "info@gruccialterna.com",
        "number": "051 849 9057",
        "nationwide": "",
        "logo": "http://www.gruccialterna.com/wp-content/themes/gruccialterna/images/Gruccialterna_positive.png"
    },
    {
        "category": "Illuminazione",
        "name": "Progetto Luce s.r.l.",
        "address": "Via Emilia, 131 \u2013 fraz. Toscanella",
        "catalog": "https://progettolucesrl.it/?s=mazzi&post_type=product&lang=it",
        "email": "info@progettolucesrl.it",
        "number": "39 0542-673600",
        "nationwide": "",
        "logo": "https://progettolucesrl.it/wp-content/uploads/2017/02/progetto-luce-logo-negozio-lampadari.png"
    },
    {
        "category": "Illuminazione",
        "name": "Romib Luce di Mellara Roberto",
        "address": "Via Bruno Tosarelli, 320, Villanova di Castenaso Bologna",
        "catalog": "https://www.romibluce.it/?s=mazzi",
        "email": "info@romibluce.it",
        "number": "051 780508",
        "nationwide": "",
        "logo": "https://www.romibluce.it/wp-content/uploads/2013/07/logo-romibluce.jpg"
    },
    {
        "category": "Informatica",
        "name": "Trony srl",
        "address": "Via dell'Industria 14, 40138 Bologna",
        "catalog": "https://www.trony.it/online/web/WFS/Trony-B2C-Site/it_IT/-/EUR/ViewParametricSearch-SimpleOfferSearch?SynchronizerToken=4fac3ecc4c995cf602dc19a8a9dcc2741b131d2716b29e0d686372994fdd25d2_P482PGk2J6NTwfjrWH2NIw%3D%3D&q=mazzi&btnG=&client=trony&output=xml_no_dtd&proxystylesheet=tronyNoHeaderFooter2&filter=0&getfields=*&sort=date%3AD%3AL%3Ad1&entsp=a__trony&oe=UTF-8&ie=UTF-8&ud=1&exclude_apps=1&site=trony",
        "email": "bologna@trony.com",
        "number": "051-6014258",
        "nationwide": "",
        "logo": "https://www.trony.it/online/static/WFS/Trony-B2C-Site/-/-/it_IT/images/common/PageLogo.png"
    },
    {
        "category": "Informatica",
        "name": "Tommesani",
        "address": "Via Camillo Casarini 18/E, Bologna",
        "catalog": "https://www.tommesani.it/cerca?controller=search&s=mazzi",
        "email": "info@tommesani.it",
        "number": "051-550761",
        "nationwide": "",
        "logo": "https://www.tommesani.it/img/tommesani-logo-1553995433.jpg"
    },
    {
        "category": "Libri",
        "name": "Libraccio",
        "address": "Via Oberdan 7",
        "catalog": "https://www.libraccio.it/src/?xy=mazzi",
        "email": "",
        "number": "051 656 9109",
        "nationwide": "",
        "logo": "https://www.libraccio.it/img/logo.jpg"
    },
    {
        "category": "Libri",
        "name": "Libreria Coop",
        "address": "Via degli Orefici, 19, 40124 Bologna BO",
        "catalog": "https://www.librerie.coop/search/?q=mazzi&cerca_in=",
        "email": "libreria.ambasciatori@librerie.coop.it",
        "number": "051-220131",
        "nationwide": "",
        "logo": "https://www.librerie.coop/static/themes/libreriecoop/images/logo.png"
    },
    {
        "category": "Moda",
        "name": "Siapoesia",
        "address": "Via Porta Nova, 12/c, 40123 Bologna BO",
        "catalog": "http://www.siapoesia.com/it/cerca?controller=search&orderby=position&orderway=desc&search_query=mazzi&submit_search=Cerca",
        "email": "info@siapoesia.com",
        "number": "051 047 7120",
        "nationwide": "",
        "logo": "http://www.siapoesia.com/img/logo-1.jpg?1529369065"
    },
    {
        "category": "Moda",
        "name": "Biagetti Srl",
        "address": "Via Emilia Levante, 94",
        "catalog": "https://www.biagettibologna.it/catalogsearch/result/?q=mazzi",
        "email": "support@biagettibologna.it",
        "number": "(+39) 392.9589903",
        "nationwide": "",
        "logo": "https://www.biagettibologna.it/skin/frontend/smartwave/biagetti/images/biagetti-bologna.png"
    },
    {
        "category": "Orologi",
        "name": "Natale Fontana Gioielli",
        "address": "Via Rizzoli, 1-2AB, 40125 Bologna BO, Italy",
        "catalog": "https://shop.natalefontana.it/ricerca-prodotti?ricerca=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://shop.natalefontana.it/images/logo-b.svg"
    },
    {
        "category": "Orologi",
        "name": "Orologi usati Bologna",
        "address": "Via Emilia Levante, 53A, 40139 Bologna BO, Italy",
        "catalog": "https://orologi360.it/?s=mazzi&post_type=product",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://orologi360.it/wp-content/uploads/2019/03/logo_orologi_value2c.png"
    },
    {
        "category": "Prima infanzia",
        "name": "Okaidi ID Kids Italy",
        "address": "Via Guglielmo Marconi, 51D, 40122 Bologna BO, Italy",
        "catalog": "https://www.okaidi.it/search",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.okaidi.it/Themes/Okaidi/Content/images/svg/logo-okaidi.svg"
    },
    {
        "category": "Prima infanzia",
        "name": "Bassetto Bimbi",
        "address": "Via Saragozza, 217/3, 40135 Bologna BO, Italy",
        "catalog": "https://www.bassettobimbi.com/catalogsearch/result/?q=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.bassettobimbi.com/skin/frontend/default/default/i/bassettobimbi_logo.png"
    },
    {
        "category": "Prodotti per animali domestici",
        "name": "I PET YOU | SHOP & SPA",
        "address": "Via Castiglione, 2C, 40124 Bologna BO, Italy",
        "catalog": "https://i-pet-you.com/it/cerca?controller=search&orderby=position&orderway=desc&search_query=mazzi&submit_search=",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://i-pet-you.com/img/prestashop-logo-1578862449.jpg"
    },
    {
        "category": "Prodotti per animali domestici",
        "name": "L'Ora degli Animali",
        "address": "Viale Carlo Berti Pichat, 1/H/I, 40127 Bologna BO, Italy",
        "catalog": "https://www.loradeglianimali.it/ricerca?controller=search&orderby=position&orderway=desc&search_query=mazzi&submit_search=",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.loradeglianimali.it/img/l-ora-degli-animali-logo-1546959512.jpg"
    },
    {
        "category": "Salute e cura della persona",
        "name": "Herbalist Herbarium Mascarella",
        "address": "Via Mascarella, 55, 40126 Bologna BO, Italy",
        "catalog": "https://www.sanipernatura.com/?s=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.sanipernatura.com/wp-content/uploads/2018/03/saniXnaturaVERDE3-300x53.jpg"
    },
    {
        "category": "Salute e cura della persona",
        "name": "Centro benessere estetico Natura & Mente",
        "address": "Via Eugenio Curiel, 10/A, 40134 Bologna BO, Italy",
        "catalog": "https://www.naturaemente.it/?s=mazzi&post_type=product",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.naturaemente.it/files/logo.png"
    },
    {
        "category": "Scarpe e borse",
        "name": "Tassinari Calzature",
        "address": "Via S. Felice, 55, 40122 Bologna BO, Italy",
        "catalog": "https://www.tassinarishoes.com/catalogsearch/result/?q=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.tassinarishoes.com/media/mpanel/logo/default/logo_tassinari.png"
    },
    {
        "category": "Scarpe e borse",
        "name": "La Borsa Firmata",
        "address": "Via Edoardo Collamarini, 3, 40138 Bologna BO, Italy",
        "catalog": "https://www.laborsafirmatabologna.it/search?q=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://cdn.shopify.com/s/files/1/0088/8714/0452/files/scontornato_360x.png?v=1544543222"
    },
    {
        "category": "Scarpe e borse",
        "name": "Borgata Bags",
        "address": "Via Porta Nova, 6, Bologna",
        "catalog": "https://www.borgatabags.com/categoria-prodotto/borse-donna/",
        "email": "",
        "number": "337558569",
        "nationwide": "borgatabags@gmail.com",
        "logo": "https://www.borgatabags.com/wp-content/uploads/2019/05/borgatabags1-1.png"
    },
    {
        "category": "Sport e tempo libero",
        "name": "Play Sport Emporio",
        "address": "Piazza Manfredi Azzarita, 1, 40122 Bologna BO, Italy",
        "catalog": "https://playsportemporio.it/catalogsearch/result/?q=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://playsportemporio.it/skin/frontend/smartwave/playsport/images/playsport-logo.png"
    },
    {
        "category": "Sport e tempo libero",
        "name": "Back Door",
        "address": "Piazza Galilei 3/A",
        "catalog": "https://back-door.it/?post_type=product&s=mazzi",
        "email": "",
        "number": "051 656 9442",
        "nationwide": "",
        "logo": "https://new-media.back-door.it/wp-content/uploads/2020/01/30115958/logo-backdoor-new_new.png"
    },
    {
        "category": "Strumenti musicali e DJ",
        "name": "CITTA' DELLA MUSICA",
        "address": "Via Paolo Canali, 8, 40127 Bologna BO, Italy",
        "catalog": "https://www.cittadellamusica.org/search.php?search=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://img.onesignal.com/permanent/00f93eaf-af6e-4606-b07e-e976428092b4.png"
    },
    {
        "category": "Strumenti musicali e DJ",
        "name": "Altrostile dj per eventi",
        "address": "Via della Campagna, 40127 Bologna BO, Italy",
        "catalog": "http://www.altrostile.com/search",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "http://www.altrostile.com/search"
    },
    {
        "category": "Valigeria",
        "name": "Piquadro",
        "address": "Terminal, Via del Triumvirato, 84, 40132 Bologna BO, Italy",
        "catalog": "https://www.piquadro.com/it/#/dffullscreen/query=mazzi&session_id=565bc01f38af8d6cd229ac35288127a2&query_name=phonetic_text",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.piquadro.com/skin/frontend/restyling/default/images/logo.svg"
    },
    {
        "category": "Videogiochi",
        "name": "Bipgames",
        "address": "Via Giuseppe di Vittorio, 16, 40068 San Lazzaro di Savena BO, Italy",
        "catalog": "https://www.bipgames.it/shop/index.php?controller=search&s=mazzi",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.bipgames.it/shop/img/bipgames-logo-1576510972.jpg"
    },
    {
        "category": "Videogiochi",
        "name": "Time Out Videogames",
        "address": "Via di Corticella, 119/a, 40128 Bologna BO, Italy",
        "catalog": "https://www.timeoutgames.it/ricerca?controller=search&orderby=position&orderway=desc&search_query=mazzi&submit_search=",
        "email": "",
        "number": "",
        "nationwide": "",
        "logo": "https://www.timeoutgames.it/img/demo-logo-1470524180.jpg"
    }
]
        ; 
        var categories = businesses.reduce((agg, b) => {
        return agg.includes(b.category) ? agg : [...agg, b.category]
        }, [])

        