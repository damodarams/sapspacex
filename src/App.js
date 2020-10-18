import React from 'react';
import './App.css';
import Home from "./components/api/index";
import Header from "./components/header/index";
import Footer from "./components/footer/index";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
