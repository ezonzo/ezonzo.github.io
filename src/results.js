import React from 'react';
import './App.css';
import { categories, businesses } from './businesses.js'
import { ResultCard } from './resultcard.js'




export class Results extends React.Component {

  render() {

    return (
      <div>
        <div className="row rowResult">
        { this.props.results.map( r =>  (
          <ResultCard catalog={r.catalog} logo={ r.logo } name={ r.name }/>))   }
        </div>
      </div>

    )
  }
}




export default Results;

