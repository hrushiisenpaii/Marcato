import React from 'react';
import'./Product.css';

function Product({title, image, price, rating}) {
  const[{ basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
  }
  return (
 <div className="product">
   <div className="product_info">
    <p>{title}</p>
    <p className="product_Price"> 
    <small> ₹  </small>
    <strong>{price}</strong>
    </p>

    <div className="product_rating">
      {Array(rating)
      .fill()
      .map((_,i) => (
        <p>⭐</p>
      ))}
        
    </div>

   </div>
   <img src={image} alt='product'/>
   <button onClick={addToBasket}>Add to cart</button>
</div>
  )
}

export default Product; 