import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator-container">
        <div className="results">
          RESULTS
        </div>
        <div className="key-container">
          <div className="calc-key">C</div>
          <div className="calc-key">CE</div>
          <div className="calc-key">(</div>
          <div className="calc-key">)</div>
          <div className="calc-key">1</div>
          <div className="calc-key">2</div>
          <div className="calc-key">3</div>
          <div className="calc-key">+</div>
          <div className="calc-key">4</div>
          <div className="calc-key">5</div>
          <div className="calc-key">6</div>
          <div className="calc-key">-</div>
          <div className="calc-key">7</div>
          <div className="calc-key">8</div>
          <div className="calc-key">9</div>
          <div className="calc-key">x</div>
          <div className="calc-key">.</div>
          <div className="calc-key">0</div>
          <div className="calc-key">=</div>
          <div className="calc-key">/</div>
        </div>
      </div>
    </div>
  );
}

export default App;
