import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>NEBEXZ</a>
      <ul className='permalinks'>
        <li><a href="#" className='links'>Home</a></li>
        <li><a href="#about" className='links'>About</a></li>
        <li><a href="#experience" className='links'>Experience</a></li>
        <li><a href="#services" className='links'>Services</a></li>
        <li><a href="#portfolio" className='links'>Portfolio</a></li>
        <li><a href="#testimonial" className='links'>Testimonial</a></li>
        <li><a href="#contact" className='links'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="facebook.com"><FaFacebookF /></a>
        <a href="instagram.com"><FiInstagram /></a>
        <a href="twitter.com"><IoLogoTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; NEBEXZ. All Rights Reserved</small>
      </div>

    </footer>
  )
}

export default footer