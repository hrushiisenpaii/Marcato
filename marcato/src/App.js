import './App.css';
import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return(
    <Router>
      <div className='app'>
        <Header />

        <Routes>
          <Route path='Checkout' element={<Checkout />}  />
            
          <Route path='/' element={<Home />}  />
            
        </Routes>
      </div>
    </Router>
  );
  
}


export default App;