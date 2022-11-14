import React from 'react'
import './Home.css';
import bg from './images/breakingbad.jpg';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        
        <div className="home_container" >
          <img  className='home_image' src={bg} alt="background" />

       
         
        <div className='home_row'>
        <Product
          id="1"
          title="THE book"
          price={239.5}
          rating={3}
          image="https://kbimages1-a.akamaihd.net/fdb56b25-fef4-4ba2-955e-65815336921d/353/569/90/False/harry-potter-and-the-goblet-of-fire-5.jpg"
           />
            <Product
          id="1"
          title="THE book"
          price={239.5}
          rating={3}
          image="https://kbimages1-a.akamaihd.net/fdb56b25-fef4-4ba2-955e-65815336921d/353/569/90/False/harry-potter-and-the-goblet-of-fire-5.jpg"
           />
        </div>
        
        <div className='home_row'>
        <Product
          id="1"
          title="THE book"
          price={239.5}
          rating={3}
          image="https://kbimages1-a.akamaihd.net/fdb56b25-fef4-4ba2-955e-65815336921d/353/569/90/False/harry-potter-and-the-goblet-of-fire-5.jpg"
           />
            <Product
          id="1"
          title="THE book"
          price={239.5}
          rating={3}
          image="https://kbimages1-a.akamaihd.net/fdb56b25-fef4-4ba2-955e-65815336921d/353/569/90/False/harry-potter-and-the-goblet-of-fire-5.jpg"
           />
            <Product
          id="1"
          title="THE book"
          price={239.5}
          rating={3}
          image="https://kbimages1-a.akamaihd.net/fdb56b25-fef4-4ba2-955e-65815336921d/353/569/90/False/harry-potter-and-the-goblet-of-fire-5.jpg"
           />
        </div>
        
        <div className='home_row'>
        <Product
          id="1"
          title="THE book"
          price={239.5}
          rating={3}
          image="https://kbimages1-a.akamaihd.net/fdb56b25-fef4-4ba2-955e-65815336921d/353/569/90/False/harry-potter-and-the-goblet-of-fire-5.jpg"
           />
        </div>
    </div>
    </div>
  )
}

export default Home