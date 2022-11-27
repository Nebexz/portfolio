import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/removal.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1> Nebiyu Daniel</h1>
        <h5 className="text-light" >Digital Designer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me"> 
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a> 
      </div>  
    </header>
  )
}

export default header