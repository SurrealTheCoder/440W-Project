import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-no-background.png'

function Homepage() {
    return (

    <div className="App">
    <header className="App-header">
  
    <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to Atelier Labs. Select the option below to continue.</p>
  
            <div className="Buttons">
              <Link to="/FormHome">
              <button className="Form-Button">Form Creator
              </button>
              </Link>
            </div>
          </header>
        </div>
    );
  }
  export default Homepage;