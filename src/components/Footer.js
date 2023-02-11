import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div id="footer" className='footer-wrapper'>
       
       <h4>Subscribe Our Newsletter For More Updates</h4>
       <div>
          <input type="email" placeholder='Enter Your Mail' />
          <br />
          <button className='btn btn-primary'>Subscribe</button>
       </div>  
       

    </div>
  )
}

export default Footer