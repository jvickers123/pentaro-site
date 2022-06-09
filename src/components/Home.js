import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  
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

    </section>
  )
}

export default Home