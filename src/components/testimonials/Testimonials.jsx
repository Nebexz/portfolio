import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper';

import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';

const data = [
  {  
   avatar: AVTR1,
   name: 'Tina Snow' ,
   review: "A highly creative ui designer with seemless skills his communication skills were the impecable I am glad to meet such an ambitious person. Keep up the good work"
  },
  {
   avatar: AVTR2,
   name: 'Shatta Wale',
   review: 'He is a motivated freelancer and always think outside the box. I am very sure we will meet with anathor job'
  },
  {
   avatar: AVTR3,
   name: 'Kwame Despite',
   review: 'He is well organized and scheduled designer. Man of his words'
 },
 {
   avatar: AVTR4,
   name: 'Nana Ama McBrown',
   review: "Someone I can connect with. Bravo"
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide className='testimonial'>
            <div className="client_avatar">
              <img src={avatar}  />
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
          </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default testimonials