import React from 'react';
import './Header.css';

function Header() {
  return (
    <div  className='header'>

        <img className="header_logo" src="marcato/src/images/marcologo.png "/>

        <div
            className="header_search">
                <input 
                className="header_searchInput" type="text" />
                 {/* LOGO */}
        </div>

        <div className='header_nav'>
            <div className='header_option'>
            <span className="header_optionLineOne"> Mothafacka Bitch! </span>
            <span className="header_optionLineTwo"> Sign In bitch </span>
                 </div>
            
            <div className='header_option'>
            <span className="header_optionLineOne"> Return Bitch </span>
            <span className="header_optionLineTwo"> Order Bitch </span>
                 </div>
            
            <div className='header_option'>
            <span className="header_optionLineOne"> Supreme Bitch! </span>
            <span className="header_optionLineTwo"> Pay bitch </span>
                 </div>
        </div>
    </div>
  )
  

}

export default Header
