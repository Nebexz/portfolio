import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/nwdivvy.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/dv.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Divvyup my first app published on playstore it is a ride sharing app' ,
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {  
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/6s8o76-Orion-Ul-kit-Charts-templates-infographics-in-Figma'
  },
  {  
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/1729ogu7-Eclipse-Figma dashboard-Ul-kit- for-data-design-web-apps'
  },
  {  
    
    id: 4,
    image: IMG4,
    title: 'UI/UX Design for the app',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {  
    id: 5 ,
    image: IMG5 ,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https:/dribbble.com/shots/i6541289-Orion-Ul-kit-Charts-templates-infographics-in-Figma '
  },
  {  
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma' ,
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/as887665-Orion-Ul-kit Charts-templates-infographics-in-Figma'
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
                <a href={github} className='btn' target='_blank'>Github</a>
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