import './App.css';

import React from 'react';
import logo from './logo.svg';

function App() {
  const minStil: React.CSSProperties = {
    backgroundColor: "green",
  }

  return (
    <div >
      <header className="App-header" style={minStil}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Detta är starten på grundkursen!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;