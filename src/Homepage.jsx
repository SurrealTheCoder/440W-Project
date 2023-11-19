import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-no-background.png'

function Homepage() {
    return (

    <div className="App">
    <header className="App-header">
  
    <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to Atelier Labs. Select either option below to continue.</p>
  
            <div className="Buttons">
              <Link to="/CSV">
                <button className="CSV-Button" name="submit" type="submit">
                  CSV Compiler
                </button>
              </Link>
              <Link to="/Forms">
              <button className="Form-Button">Form Creator
              </button>
              </Link>
            </div>
          </header>
        </div>
    );
  }
  export default Homepage;