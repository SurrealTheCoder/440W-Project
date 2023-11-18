import React from 'react';
import {Link } from 'react-router-dom';

function Homepage() {
    return (

    <div className="App">
    <header className="App-header">
  
    <img src='./logo-no-background.png' className="App-logo" alt="logo" />
            <p>Welcome to Atelier Labs. Select either option below to continue.</p>
  
            <div className="Buttons">
              <Link to="/csv-input">
                <button className="CSV-Button" name="submit" type="submit">
                  CSV Compiler
                </button>
              </Link>
  
              <button className="Form-Button">Form Creator</button>
            </div>
          </header>
        </div>
    );
  }
  export default Homepage;