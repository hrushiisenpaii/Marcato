import React from 'react';
import'./Product.css';

function Product() {
  return (
 <div className='product'>
   <div className="product_info">
    <p>product1</p>
    <p className="product_Price"> 
    <small> ₹  </small>
    <strong>199.99</strong>
    </p>

    <div className="product_rating">
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
    </div>

   </div>
   <img src='https://banner2.cleanpng.com/20180329/chw/kisspng-mixer-juicer-home-appliance-manufacturing-kitchen-mixer-5abd6fb9a31c00.8528332615223643456681.jpg' alt='grinder'/>
   <button>Add to cart</button>
</div>
  )
}

export default Product; 