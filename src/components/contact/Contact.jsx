import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6arzvgv', 'template_h8go894', form.current, 'p6xkHYLq4HxRFd-29')

    e.target.reset()  
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>nebexz79@gmail.com </h5>
            <a href="mailto: nebexz79@gmail.com" target="_blank">Send a Messege</a>
          </article>
          <article className="contact_option">
            <BsTelegram className='contact_option-icon'/>
            <h4>Telegram</h4>
            <h5>@nebexz </h5>
            <a href="https://t.me/nebexz" target="_blank">Send a Messege</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+251927191727 </h5>
            <a href="https://api.whatsapp.com/send?phone+251927191724" target="_blank">Send a Messege</a>
          </article>
          </div>
      
        {/*End of contact*/}
        <form ref = {form} onSubmit = {sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact