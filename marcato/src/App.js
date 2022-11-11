import './App.css';
import React from "react";
import Header from './Header';
import Home from "./Home";

 
function App() {
  return (
    
    <div className="app">
     
      {/* HEADER */}
      <Header />
      <Home />
      {/* HOME */}
    </div>
  );
}

export default App;
