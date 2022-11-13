import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className='checkout'>
       <div className='checkout__left'>
        <img className='checkout__ad' src= "https://cdn.imgbin.com/12/8/15/imgbin-vehicle-license-plates-logo-car-product-design-automotive-design-car-n2GJYWe30KpA8VuGi0eFiCPBN.jpg" alt="modi ji ka ad h maadrchod"/>

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