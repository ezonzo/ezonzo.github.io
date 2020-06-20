import React from 'react';
import './App.css';

export class ResultCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }

  render() {
    return  (
      <div className='col-sm-3'>
        <div>
            <a href={this.props.catalog} target='_blank'>
              <div className='result'>
                <div className='result-contents'>
                  <p className='result-name'> { this.props.name } </p>
                  <img src={this.props.logo} className='fit-image'/>
                </div>
              </div>
            </a>
      </div>
    </div>
    )
  }

}


export default ResultCard;

