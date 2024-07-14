import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import User from './components/User';
function App() {
  //internal css
  let bg = {
    backgroundColor: 'blue',
    fontSize: '20px'
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={bg}>React Typescript Project</h1>
        <div style={{ color: 'red' }}></div>
        <hr/>
        <Customer name="Devendra Shukla" prabhu="Shri Ram" />
        <hr/>
        <User name="Devendra Shukla" designation="Developer" />
        <hr/>
      </header>
    </div>
  );
}

export default App;
