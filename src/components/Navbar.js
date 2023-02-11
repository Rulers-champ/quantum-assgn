import React from 'react'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="navbar-wrapper">
         <div>
           <a className="navbar-brand" href="#"><i class="fa-solid fa-square-person-confined" style={{color:'#5B8FB9',fontSize:'25px'}}></i> Bizness</a>
         </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                 <a className="nav-link" style={{color:'#5B8FB9'}} aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                 <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                 <a className="nav-link" href="#">Project</a>
                </li>
                <li className="nav-item">
                 <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                 <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                 <a className="nav-link" href="#footer">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar