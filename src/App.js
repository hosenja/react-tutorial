import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBarFolder/NavBar';
import ListComponents from './components/ListComponent/ListComponents'

function App() {
  const person = {
    name: 'mohamd',
    age: 12
  }
  return (
    <div className="App">
      <NavBar name="hosen" person={person}/>
      <ListComponents />
    </div>
  );
}

export default App;
