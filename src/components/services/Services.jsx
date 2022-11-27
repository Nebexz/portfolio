import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services' >
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Build an amazing feature graphics for playstore. 
                 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Make a exceptional logo for apps and websites. 
                 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Build nice mockups for your mobile apps. 
                 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Make a beauifull animation for you app or website. 
                 </p>
            </li>
          </ul>
        </article>
        
        <article className='service'>
          <div className="service_head">
            <h3>Web Devolopment</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Help you develop the best portfolio. 
                 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Make react website using React. 
                 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Build user friendly and engaging Landing page using Figma. 
                 </p>
            </li>
            
          </ul>
        </article>
        
        <article className='service'>
          <div className="service_head">
            <h3>Mobile App Developer</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Developing mobile apps using android studio. 
                 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Test your android apps for any bug. 
                 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Add any features for your app like chatting, database, login page. 
                 </p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services