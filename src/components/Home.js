import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

// IMAGES
import handshake from '../assets/happy-handshake.jpg'

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <section>

      <div className='hero-container'>
        <div className='light-background home-background'></div>

        <div className='home-flex-container'>
          <h1 className='accent home-heading'>PENTARO</h1>
          <h2 className='home-h2'>ANOTHER SLOGAN HERE</h2>
          <p className='home-p'>Bespoke telemarketing and recruitment solutions for your business</p>
          <Link to='/getintouch' >
            Get in touch <span className="accent">&gt;&gt;</span>
          </Link>
        </div>
        
      </div>

      <div className='dark-section-container'>

        <div className='content-container'>
          
          <h2 className='accent'>OUR MISSION</h2>
          <hr></hr>
          <h3>Pentaro aims to capitalise on synergies to enhance the profitability and growth potential of its partners.</h3>
          <p>We are a modern, data-driven, results-focused business development agency, ready to help your business boost its bottom line.</p>

          <p>Find out more about the services on offer.</p>
          <div className='home-links-container'>
            <hr></hr>
            <Link className='text-link' to='/recruitment'>
              <p>Pentaro Recruitment</p>
              <p className='accent'>&gt;&gt;</p>
            </Link>
            <hr></hr>
            <Link className='text-link' to='/telemarketing'>
              <p>Pentaro Telemarketing</p>
              <p className='accent'>&gt;&gt;</p>
            </Link>
            <hr></hr>
          </div>

        </div>

        
        <div className='image-container'>
          <img 
            src={handshake}
            alt='Two people shaking hands'
            />
        </div>

      
      </div>

    </section>
  )
}

export default Home