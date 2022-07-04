import React from 'react'
import { Link } from 'react-router-dom'

// IMAGES
import handshake from '../assets/happy-handshake.jpg'

const Home = () => {

  
  return (
    <section>

      <div className='hero-container'>
        <div className='hero home-background'><div className='blue-background'></div></div>

        <div className='home-flex-container'>
          <h1 className='accent home-heading'>PENTARO</h1>
          {/* <h2 className='home-h2'>ANOTHER SLOGAN HERE</h2> */}
          <h2 className='home-h2'>Bespoke telemarketing and recruitment solutions for your business</h2>
          <Link to='/getintouch' >
            Get in touch <span className="accent">&gt;&gt;</span>
          </Link>
        </div>
        
      </div>

      <div className='plain-section-container off-left'>

        <div className='content-container left'>

          <div className='dotted-line offset-left-top'></div>
          
          <h2 className='accent'>OUR MISSION</h2>
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
          <h3>Telemarketing at pentaro priorities quality, clarity, and consistency, producing direct connections and opportunities with your target audience.</h3>
          <p>Our strategic approach and emphasis on analysis delivers a service that sets us apart from our competitors.</p>

          <Link to='/telemarketing'>View our services <span className='accent'>&gt;&gt;</span></Link>
        </div>

      </div>

      <div className='plain-section-container offset-right'>

      <div className='content-container right'>
          
          <div className='dotted-line offset-left-top'></div>
          
          <h2 className='accent'>RECRUITMENT</h2>
          <h3>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</h3>
          <p>Aenean sed sem at ante aliquam consequat. Ut rhoncus ex et orci feugiat, nec finibus neque rhoncus.</p>

          <Link to='/recruitment'>View our services <span className='accent'>&gt;&gt;</span></Link>
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