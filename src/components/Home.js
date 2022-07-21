import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

// IMAGES
import handshake from '../assets/happy-handshake.jpg'
import businessWoman from '../assets/business-woman.jpg'

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <section>

      <div className='hero-container'>
        <div className='hero home-background'><div className='blue-background'></div></div>

        <div className='home-flex-container'>
          <h1 className='accent home-heading pentaro-name'>PENTARO</h1>
          {/* <h2 className='home-h2'>ANOTHER SLOGAN HERE</h2> */}
          <h2 className='home-h2'>Bespoke telemarketing and recruitment solutions</h2>
          <Link to='/getintouch' >
            Get in touch <span className="accent">&gt;&gt;</span>
          </Link>
        </div>
        
      </div>

      <div className='plain-section-container off-left'>

        <div className='content-container left'>

          <div className='dotted-line offset-left-top'></div>
          
          <h2 className='accent'>WHY US?</h2>
          <h3>Pentaro aims to capitalise on synergies to enhance the profitability and growth potential of its partners.</h3>
          <p>We are a modern, data-driven, results-focused business development agency, ready to help your business boost its bottom line.</p>

          <Link to='/pentaroway'>The Pentaro Way <span className='accent'>&gt;&gt;</span></Link>

        </div>

        
        
        

      
      </div>

      <div className='plain-section-container middle'>

        <div className='left-content-container'>
          <div className='image-container'>
            <img 
              src={handshake}
              alt='Two people shaking hands'
              />
          </div>
        </div>

        <div className='content-container middle'>
          
          <div className='dotted-line offset-left-top'></div>
          
          <h2 className='accent'>TELEMARKETING</h2>
          <h3>Telemarketing at Pentaro prioritises quality, clarity, and consistency, producing direct connections and opportunities with your target audience.</h3>
          <p>Our strategic approach and emphasis on analysis delivers a service that sets us apart from our competitors.</p>

          <Link to='/telemarketing'>View our services <span className='accent'>&gt;&gt;</span></Link>
        </div>

      </div>

      <div className='plain-section-container offset-right'>

      <div className='content-container right'>
          
          <div className='dotted-line offset-left-top'></div>
          
          <h2 className='accent'>RECRUITMENT</h2>
          <h3>Pentaro utilises modern research and data analysis techniques to acquire the best selection of viable candidates.</h3>
          
          <p>We will gain key insight into your business’s structure, talent, culture, and processes to provide candidates that exceed your expectations, and reflect your company values.</p>
          
          <Link to='/recruitment'>View our services <span className='accent'>&gt;&gt;</span></Link>
        </div>

        <div className='image-container'>
          <img 
            src={businessWoman}
            alt='Business woman on computer'
            />
        </div>

      </div>

    </section>
  )
}

export default Home