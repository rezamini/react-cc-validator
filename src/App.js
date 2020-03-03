import React from 'react';
import logo from './logo.svg';
import './App.css';
import Validator from './components/validator/Validator';
import Card from 'react-bootstrap/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Validator />
      </header>
    </div>
  );
}

export default App;
