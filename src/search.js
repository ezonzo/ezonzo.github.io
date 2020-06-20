import React from 'react';
import './App.css';
import { categories, businesses } from './businesses.js'




export function makeElement(type, props){
  let e = document.createElement(type)
  props = props ? props : {}
  for (let i in props){
     e[i] = props[i]
  }
  return e
}





export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.setupSearch = this.setupSearch.bind(this)
    this.setCategory = this.setCategory.bind(this)
    this.submitted = this.submitted.bind(this)
    this.keydown = this.keydown.bind(this)

  }

 setupSearch() {
    categories.forEach(c => {
      document.getElementById("catselect").appendChild(
        makeElement('option', {text: c, value: c})
      )
    })

    document.addEventListener('keydown',function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        // this.submitted()
      }
    });
  }

  componentDidMount() {
    this.setupSearch()

    
  }

  setCategory(e) {
    let {name, value} = e.target;
    this.setState({
      category: value,
    });
  }

  submitted() {
    let category = this.state.category
    let text = this.state.keyword
    var results = businesses.filter(b => {return b.category == category})
    var updatedResults = results.map( r => { 
      let updated = {...r}
      updated.catalog = r.catalog.replace("mazzi", text)
      return updated
    })

  this.props.showResults(updatedResults)
  // $("#results").html("")
  // let resultIntro = makeElement('div', {className: 'search-bar result-intro', innerHTML: 'Cerca "' + text + '" su..'})
  // $("#results").append(resultIntro)
  // let row = makeElement('div', {className: 'row rowResult'})
  // $("#results").append(row)
  // updatedResults.forEach( r => {
  //   row.appendChild(makeResultCard(r))
  // } )
  }

  keydown(e) {
    if (e.keyCode == 13) {
      this.submitted()
    }
  }


  render() {
    return  (
      <div className="search-bar" onKeyDown={ this.keydown }>
        <form>
          <div className="inner-form">
            <div className="input-field first-wrap">
              <div className="">
                <select className="cat-selector" id="catselect" data-trigger="" name="" onChange={this.setCategory}>
                  <option placeholder="">Categoria</option>
                </select>
              </div>
            </div>
            <div className="input-field second-wrap">
              <input id="search" type="text" placeholder="Cerca nella tua città" 
                onChange={ (e) => {this.setState({keyword: e.target.value}); console.log(e.target.value) } }/>

            </div>
            <div className="input-field third-wrap">
              <button className="btn-search" type="button" id="searchbutton" onClick={this.submitted}>
                <svg className="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

}


export default Search;


