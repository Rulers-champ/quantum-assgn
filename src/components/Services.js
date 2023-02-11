import React from 'react'
import '../Styles/Services.css'

const Services = () => {
  return (
    <div id="services" className='service-wrapper'>
      
      <div className='service-container-1'>
          <h1>Our Services</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className='service-container-2'>
           
           <div>
             <button className='service-btn'><i class="fa-solid fa-coins"></i></button>
             <h3>Financial Consulting</h3>
             <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h4>
           </div>

           <div>
             <button className='service-btn'><i class="fa-solid fa-bullhorn"></i></button>
             <h3>Content Marketing</h3>
             <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h4>
           </div>

           <div>
             <button className='service-btn'><i class="fa-solid fa-chart-pie"></i></button>
             <h3>Finance Advice</h3>
             <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h4>
           </div>



      </div>

      <div style={{textAlign:'center',marginTop:'2rem'}}>
        <button className='btn btn-primary'>All Services</button>
      </div>

    </div>
  )
}

export default Services