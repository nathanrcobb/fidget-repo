import React from 'react';

import spinner from './spinner.svg';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-title">
          <img src={logo} className="App-logo" alt="database" />
          <h2>The Fidget Repo</h2>
      </div>
      <header className="App-header">
        <div>
          <img src={spinner} className="App-spinner" alt="spinner" />
        </div>
      </header>
      <h2 className="App-footer">Coming soon...</h2>
    </div>
  );
}

export default App;
