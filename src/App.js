import React from 'react';

import logoSpinner from './logo-spinner.svg';
import logoDatabase from './logo-database.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">The Fidget Repo</h1>
      <header className="App-header">
        <img src={logoDatabase} className="App-logo App-database" alt="database" /> 
        <img src={logoSpinner} className="App-logo App-spinner" alt="spinner" />
      </header>
      <h2 className="App-footer">Coming soon...</h2>
    </div>
  );
}

export default App;
