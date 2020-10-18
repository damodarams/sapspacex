import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home/index";
import FullWidthGrid from "./components/landing/index";
import MediaCard from "./components/card";

function App() {
  return (
    <div className="App">
      <FullWidthGrid/>
      <Home/>
    </div>
  );
}

export default App;
