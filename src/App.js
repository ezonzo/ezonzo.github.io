import React from 'react';
import './App.css';
import { MarketPlace } from './marketplace.js'
import { Menu } from './menu.js'
import { Add } from './add.js'
import { Guide } from './guide.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const  About = () => (
    <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
          <div>
            <div>
              <h5 className="modal-title text-container" id="exampleModalLabel"> Che cos’è Ezonzo?  </h5>
            </div>

          </div>
          <div className="text-container">
            <span>
              <p>Ezonzo è la piattaforma che ricrea l’esperienza di acquisto sotto casa, mettendo in contatto attività e compratori locali. Compra direttamente dai negozi di quartiere e ricevi comodamente a casa tua. Questo è ezonzo.it.</p>
              <p>Nessuna spesa per chi compra. Nessuna spesa per chi vende.</p>
              <p> Il progetto è totalmente frutto di volontariato. Non ci sono registrazioni, costi o oboli da pagare.  </p>
              <p> Sostieni il progetto! Dona ora sulla nostra pagina GoFundMe </p>
              <p>
                    Chi non vorrebbe tornare a fare due passi in via Orefici, tornando a fare compere in tutta tranquillità al Quadrilatero, e nelle vie del mercato?
                    Già, e sarebbe bello anche trovare un piccolo agricoltore locale, un allevatore o un artigiano della città, che possa vendere della gustosa frutta, dell’ottima carne o riparare o creare su misura qualcosa per ognuno di noi.
      Nessuno ha voglia di buttare, no?
              </p>
              <p>
        Eppure, non c’è modo di trovare un agricoltore nemmeno cercando attentamente. Stesso discorso per allevatori, piccoli artigiani o tanti “lavoratori dimenticati” che, a causa del COVID, sono finiti con le gambe all’aria, facendo morire la vita brulicante in tanti quartieri.
      Chi siamo
        I fondatori di Ezonzo sono:
        (About us nr ragazzi, nr background diversi)
              </p>
              <p> Cosa ci accomuna? L’amore per la città in cui viviamo o abbiamo passato tanto magnifico tempo.  </p>
              <h5>
                Perché il nome Ezonzo?
              </h5>
              <p>
                Il nome nasce dall’unione di due concetti: “andare a zonzo”, ma elettronicamente.
              E quindi Ezonzo.
              </p>
              <h5>
                Perché è nato Ezonzo?
              </h5>
              <p>
              Perché crediamo in un’economia fatta non solo di grandi colossi generalisti, ma anche di commercianti locali e piccole imprese in grado di fornire servizi di eccellenza, che la grande distribuzione non potrà mai permettersi.
              </p>
              <p>
        Perché crediamo che il digitale, opportunamente seguito, possa essere una marcia in più per chiunque, anche se occorre vendere a pochi metri da casa (e questa pandemia, nel bene e nel male, ce lo ha insegnato).
              </p>
              <p>
        Perché ci sono centinaia di migliaia di eccellenze in tutta Italia che hanno bisogno di essere scoperte e mantenute, e la rete può dare una mano a diffondere il messaggio e farlo arrivare lì dove serve.
              </p>

              <p>
                Per tutto ciò è nato Ezonzo.
              </p>

              <p>
                Dona ora per aiutare il progetto a sopravvivere!
              </p>

          </span>
            <p>Altre domande? <a href="contatti.html" role="button" className="btn btn-secondary ezonzo-button" title=" title" data-content="">Scrivici!</a></p>
        </div>
    </div>
    <div clasName="col-sm-3"></div>
  </div>
  )




function App() {

  return (
    <Router>
      
  {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script> */}
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></script>
      <div className="App">
        <header className="App-header">
        <Menu/>
          <br/>
        </header>
        <Route path='/search' component={ MarketPlace }/>
        <Route path='/search/:category/:keyword' component={ MarketPlace }/>
        <Route path='/about' component={ About }/>
        <Route path='/add' component={ Add }/>
        <Route path='/guide' component={ Guide }/>
        <Route path='/' component={ MarketPlace } exact={true}/>

      </div>
    </Router>
  );
}

export default App;
