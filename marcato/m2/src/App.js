import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

import Login from "./Login";


function App() {
  return (
    <Router>
    <div className='app'>
     

      <Routes>

      <Route path='/Login' element={<Login/>}/>

        <Route path='/Checkout' element={ <><Header/><Checkout/></>}   />
          
        <Route path='/' element={<><Header/><Home/></>}  />
          
      </Routes>
    </div>
  </Router>
  );
}

export default App;
