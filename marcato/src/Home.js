import React from 'react'
import './Home.css';
import bg from './images/breakingbad.jpg';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        
        <div className="home_container" >
          <img  className='home_image' src={bg} alt="background" />

        </div>
         
        <div className='home_row'>
          {/*product*/}
          <Product />
          <Product />
          {/*product*/}

        </div>
        
        <div className='home_row'>
          {/*product*/}
          {/*product*/}
          {/*product*/}

        </div>
        
        <div className='home_row'>
          {/*product*/}
 
        </div>
        
    </div>
  )
}

export default Home