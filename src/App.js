import React from 'react';

import logoSpinner from './logo-spinner.svg';
import logoDatabase from './logo-database.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Fidget-Repo</h1>
      <header className="App-header">
        <img src={logoDatabase} className="App-logo App-database" alt="database" /> 
        <img src={logoSpinner} className="App-logo App-spinner" alt="spinner" />
        <h3 className="status-message">Coming soon...</h3>
      </header>
    </div>
  );
}

export default App;
