import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
function App() {
  //internal css
  let bg = {
    backgroundColor:'blue',
    fontSize:'20px'
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={bg}>React Typescript Project</h1>
        <div style={{color:'red'}}></div>
        <Customer/>
      </header>
    </div>
  );
}

export default App;
