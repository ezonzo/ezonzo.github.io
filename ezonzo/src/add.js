
import React from 'react';
import './App.css';
import { categories, businesses } from './businesses.js'
import { ResultCard } from './resultcard.js'
import { makeElement } from './search.js'




export const  Add = () => (
    <div className="row" id="addEshop" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="col-sm-3"></div>
        <div className="col-sm-6 text-container">
          <div className="modal-header">
            <div className="text-e-commerce">
              <h5 className="modal-title" id="exampleModalLabel"> Aggiungi il tuo negozio </h5>
            </div>

          </div>
          <div className="modal-body">
            <div className="contact-container">
              <form action="https://formspree.io/xvowgvor" method="POST">
                <span className="left-side">
                  <input type="text" id="company" name="company" placeholder="Il nome della tua attività"  required/>
                </span>
                <span className="right-side">
                  <select id="catselect" name="sector" required>
                    <option disabled selected value> Seleziona una categoria</option>
                    { categories.map(c => (<option value={ c }>  { c }</option>)) }

                  </select>
                </span>

                <span className="left-side">
                  <label htmlFor="files" className="btn">clicca per aggiungere tuo logo (facoltativo)</label>
                  <input id="files" style={{  visibility :'hidden'  }} type="file" name="attachment" accept="image/png, image/jpeg, image/svg"/>
                </span>


                <span className="left-side">
                  <input type="url" id="eshop" name="eshop" placeholder="Indirizzo del tuo eshop"  />  
                </span>

                <span className="right-side">
                  <i><a href="#" className='swap-modal' onClick="swapModal('#addEshop','#eshopGuide')"> Non possiedo ancora un eshop</a></i>
                </span>
                <span style={{ clear:'both' }}></span>
                <textarea id="subject" name="subject" placeholder="Note, domande, commenti (facoltativo)" required ></textarea>

                <input type="checkbox" id="terms" value="terms" required/>
                  <label className="terms-check" for="terms">Ho letto e accetto la <a href="privacy-policy.html">Privacy Policy</a> del sito.</label><br/>
                <input type="checkbox" id="owner" value="owner" />
                  <label className="terms-check" for="terms">Sono il titolare di questa attività (facoltativo)</label><br/>

                <input type="hidden" name="_next" value="https://ezonzo.github.io/thanks.html"/>
                <input type="submit" value="Invia"/>

              </form>
            </div>
          </div>
        </div>
      <div className="col-sm-3"></div>
    </div>
  );

export default Add
