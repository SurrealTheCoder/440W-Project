import React from 'react';

function baseDesign() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./logo-no-background.png' className="App-logo" alt="logo" />
        <p>Welcome to the CSV Compiler. Here, you are able to select a user specified amount of CSV files, and you will recieve one neatly formatted, compiled CSV file.</p>
        <p>This section of the website is developed entirely with React, React Router, and Python.</p>
      </header>
    </div>
  );
}

export default baseDesign;