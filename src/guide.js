
import React from 'react';
import './App.css';


export const  Guide = () => (
    <div className="row text-container" id="eshopGuide" >
      <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="modal-header">
            <div className="text-e-commerce">
              <h5 className="modal-title" id="exampleModalLabel"> Guida al tuo negozio online </h5>
            </div>

          </div>
          <div className="text-container">
            <p> Aprire un sito e-commerce che vende i tuoi prodotti su internet puó sembrarti un argomento complesso. Oggi peró puoi affidarti a tanti servizi online senza bisogno di avere alcuna competenza tecnica.  </p>
            <p>Questi servizi gestiscono tutto, dal marketing ai pagamenti in totale sicurezza, dalla gestione degli ordini all’inventario. </p>
            <p>Molti di questi servizi come Shopify ad esempio si possono usare gratuitamente per un breve periodo senza dover inserire dati di pagamento ed obbligo di rinnovo.  </p>
            <p>Ora ci siamo, crea il tuo negozio online in pochi semplici passi: </p>
            <ol>
              <li>vai su https://it.shopify.com/</li>
              <li>inserisci la tua e-mail e clicca su “inizia la prova gratuita” </li>
              <li>crea una password e scrivi il nome del tuo negozio </li>
              <li>rispondi alle domande e inserisci le informazioni che ti vengono richieste </li>
              <li>il tuo negozio ora è on-line!  </li>
              <li>carica i tuoi prodotti utilizzando il tasto “aggiungi prodotto” </li>
              <li>uoi modificare l’aspetto grafico del sito? Clicca su “personalizza tema” e rendi il tuo negozio online bello da vedere</li>
              <li>ora sei pronto ad accogliere i nuovi clienti!  </li>
            </ol>
            <p>Ti ricordiamo che Shopify è disponibile anche come app su Android, iOS/ipadOS e puó essere utilizzato da telefono e tablet.</p>
            <br/>
            <p>Se ti stai chiedendo se questa è la soluzione giusta per te, puoi confrontare le altre opzioni sul mercato.Tutto dipende dalle tue esigenze, competenze e budget.</p>
            <p>Altre piattaforme e-commerce gratuite :Woocomerce ( su WordPress), One minute site, Jimdo, Square online store, Zen cart.  </p>
            <p>Oppure puoi creare un e-commerce tramite CMS utilizzando ad esempio : WordPress, Magento, Prestashop e tanti altri.</p>
            <p>Altre domande? <a href="contatti.html" role="button" className="btn btn-secondary ezonzo-button" title=" title" data-content="">Scrivici!</a></p>
          </div>
        </div>
      <div className="col-sm-3"></div>
    </div>
  );

export default Guide
