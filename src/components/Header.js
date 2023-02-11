import React from 'react'
import '../Styles/Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div>
            <span><i class="fa-regular fa-clock"></i> We are open 24/7</span> | 
            <span> <i class="fa-solid fa-envelope"></i> mail@gmail.com</span>
        </div>
        
        <ul className='header-list'>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-linkedin"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
        </ul>

    </div>
  )
}

export default Header