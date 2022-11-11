import React from 'react';
import './Header.css';

import logo from './images/marcologo.png';
import search from './images/search.svg';
import cart from './images/kart.png';

function Header() {
  return (
    <div  className='header'>

        <img className="header_logo" src={logo} alt="logo"/>
 
        <div
            className="header_search">
                <input 
                className="header_searchInput" 
                 />

                <img className='header_searchlogo' src={search} alt="search bar" />

                 {/* LOGO */}

        </div>
        
        <div className='header_nav'>
            <div className='header_option'>
            <span className="header_optionLineOne"> Welcome, Guest</span>
            <span className="header_optionLineTwo"> Sign In </span>
                 </div>
            
            <div className='header_option'>
            <span className="header_optionLineOne"> Returns </span>
            <span className="header_optionLineTwo"> & Orders  </span>
                 </div>
            
            <div className='header_option'>
            <span className="header_optionLineOne"> Your </span>
            <span className="header_optionLineTwo"> Membership </span>
                 </div>

        <div className='header_basket '>
          <img src={cart} alt="cart" />
          <span className="header_optionLineTwo">Cart</span>
          <span className="header_optionLineOne">0</span>
          
        </div>

      </div>


       
    </div>
  )
  

}

export default Header
