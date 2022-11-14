import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className='checkout'>
       <div className='checkout__left'>
        <img className='checkout__ad' src= "https://imgsrc.cineserie.com/2020/12/narcos-secrets-de-serie.jpg?ver=1" alt=""/>

    <div>
      
       <h2 className="checkout__title"> 
        Your Shopping Basket</h2>

        {/*basket items*/}
        {/*basket items*/}
        {/*basket items*/}
        {/*basket items*/}
        {/*basket items*/}
        {/*basket items*/}
       </div>
       </div>
       <div className="checkout__right">
        <Subtotal/>
        <h2> The subtotal will go here</h2>
        </div>

    </div>
  );
}

export default Checkout