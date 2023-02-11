import React from 'react'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div id="home" className='home-wrapper'>
       
       <div>
         <h1>We are consulting for your Business Finances</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam.</p>
         <button className='btn btn-primary'>Start Now</button>
       </div>

       <div>
          <img src='/img/banner.png' />
       </div>


    </div>
  )
}

export default Home