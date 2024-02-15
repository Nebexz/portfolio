import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/nwdivvy.png'
import IMG2 from '../../assets/Frame 27.png'
import IMG3 from '../../assets/Group 252.png'
import IMG4 from '../../assets/Frame 31.png'
import IMG5 from '../../assets/Group 248.png'
import IMG6 from '../../assets/Group 10.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My first app published on Play Store. it is a ride-sharing app',
    link: 'https://play.google.com/store/apps/details?id=com.divvyup.bn&hl=en&gl=US',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {  
    id: 2,
    image: IMG2,
    title: 'Design for payment app and landing page',
    link: 'https://www.deviantart.com/nebexz/gallery',
    demo: 'https://www.deviantart.com/nebexz/gallery'
  },
  {  
    id: 3,
    image: IMG3,
    title: 'Design for advanced payment and transaction method mobile app',
    link: 'https://www.deviantart.com/nebexz/gallery',
    demo: 'https://www.deviantart.com/nebexz/gallery'
  },
  {  
    
    id: 4,
    image: IMG4,
    title: 'It is a crypto Landing page design',
    link: 'https://www.deviantart.com/nebexz/gallery',
    demo: 'https://www.deviantart.com/nebexz/gallery'
  },
  {  
    id: 5,
    image: IMG5,
    title: 'Design for an app that helps create invoices, Calculate payment, Affiliate Marketing.',
    link: 'https://www.deviantart.com/nebexz/gallery',
    demo: 'https://www.deviantart.com/nebexz/gallery'
  },
  {  
    id: 6,
    image: IMG6,
    title: 'Book any place you want to travel any time with best deals.',
    link: 'https://www.deviantart.com/nebexz/gallery',
    demo: 'https://www.deviantart.com/nebexz/gallery'
  }
]

const portifolio = () => {
  return (
    < section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3 >{title}</h3>
              <div className="portfolio_item-cta">
                <a href={link} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }                
      </div>
    </section>
  )
}

export default portifolio
