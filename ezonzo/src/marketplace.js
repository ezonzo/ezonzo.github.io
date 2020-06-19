
import React from 'react';
import './App.css';
import { Search } from './search.js'
import { Results } from './results.js'
import logo from './assets/EZONZO.svg'






export class MarketPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.showResults = this.showResults.bind(this)
    console.log('hey')
    console.log(this.props)
  }

  showResults(results) {
    this.setState({results: results})
  }

  render() {
    return  (
    <div className="wrapper-container">

      <div className="logo"><img src={logo} height="300"/>
        </div>
      <Search showResults={this.showResults}/>

      <Results results={this.state.results}/> 
      <div id="footer"></div>
    </div>
    )
  }

}


export default Search;


