import React from 'react'

// IMAGES
import handshake from '../assets/business-deal.jpg'

const Recruitment = () => {
  return (
    <section>
      <div className='hero-container'>
        <div className='light-background recruitment-background'></div>

        <div className='section-flex-container'>

          <h1 className='accent'>RECRUITMENT</h1>
          <h2>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</h2>
        </div>
      </div>

      <div className='dark-section-container'>

        <div className='content-container'>
          <h2 className='accent'>RECRUITMENT</h2>
          <hr></hr>
          <h3>Proin fringilla augue at sapien</h3>
          <p>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</p>
            
          <p>Aenean sed sem at ante aliquam consequat. Ut rhoncus ex et orci feugiat, nec finibus neque rhoncus.</p>
          
        </div>
        
        <div className='image-container'>
          <img 
            src={handshake}
            alt='business meeting'
            />

        </div>
        
      </div>
    </section>
  )
}

export default Recruitment