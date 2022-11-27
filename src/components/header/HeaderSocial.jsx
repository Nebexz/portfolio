import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkdin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/nebexz" target="_blank"><FaGithub /></a>
        <a href="https://dribbble.com/nebexz" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocial