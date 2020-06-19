import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'



export class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navCollapsed: true
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(){
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }

  render() {
    const {navCollapsed} = this.state






    return (
        <footer>
          <div className="footer-container">
            <Link to={ '/search' }> cerca </Link> 
              <span> | </span>
            <Link to={ '/about' }>chi siamo</Link> 
              <span> | </span>
            <Link to={ '/add' }>aggiungi il tuo negozio</Link> 
              <span> | </span>
            <Link to={ '/guide' }>non hai ancora un eshop?</Link> 
          </div>

                        {/* Menu Mobile */}
    <nav className="navbar navbar-expand-md  nav-footer">
      <div className="navbar-header">
        <button className="navbar-toggle collapsed" aria-expanded='false' type="button" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
        </button>
      </div>

    <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={ '/search' } className="nav-link" onClick={ this.toggleMenu }> cerca </Link> 
        </li>
        <li className="nav-item">
          <Link to={ '/about' } className="nav-link" onClick={ this.toggleMenu }>chi siamo</Link> 
        </li>
    <li className="nav-item">
      <Link to={ '/add' } className="nav-link" onClick={ this.toggleMenu }>aggiungi il tuo negozio</Link> 
    </li>
    <li className="nav-item">
      <Link to={ '/guide' } className="nav-link" onClick={ this.toggleMenu }>non hai ancora un eshop?</Link> 
        </li>    
          </ul>
            </div>  
              </nav>
                </footer>

    )

  }
}

