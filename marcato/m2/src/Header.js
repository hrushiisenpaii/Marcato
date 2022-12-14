import React from 'react';
import './Header.css';
import logo from './images/MARCATO.png';
import search from './images/search.svg';
import cart from './images/cart.svg';
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";


function Header() {

    const[{basket}, dispatch] = useStateValue();

    return (
        <div  className='header'>
        <a href='/'>  
       <img className="header_logo" src={logo} alt="logo"/>
        </a>
        <div
            className="header_search">
                <input 
                className="header_searchInput" 
                 />

                <img className='header_searchlogo' src={search} alt="search bar" />

                 {/* LOGO */}

        </div>
        <div className='header_nav'>
          
          <a href='/Login'>

            <div className='header_option'>
            <span className="header_optionLineOne"> Welcome, Guest</span>
            <span className="header_optionLineTwo"> Sign In </span>
                 </div>
                 
          </a>
            
            <div className='header_option'>
            <span className="header_optionLineOne"> Returns </span>
            <span className="header_optionLineTwo"> & Orders  </span>
                 </div>
            
            <div className='header_option'>
            <span className="header_optionLineOne"> Your </span>
            <span className="header_optionLineTwo"> Membership </span>
                 </div>
     

            <Link to='/Checkout'>
            <img className='header_basket' src={cart} alt="cart" />
            </Link>
             <div className='header_option '>
             <span className="header_optionLineOne header__basketCount">{basket.length}</span>
             <span className="header_optionLineTwo">Cart</span>
            
             </div>
             
     
      </div>
       
    </div>
  )
  

}

export default Header