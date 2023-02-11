import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'
import '../Styles/App.css'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default App