// src/App.js
import React from 'react';
import PlantForm from './PlantForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create a New Plant</h1>
        <PlantForm />
      </header>
    </div>
  );
}

export default App;
