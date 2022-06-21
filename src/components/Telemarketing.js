import React, {useEffect} from 'react'

// IMAGES
import individual from '../assets/telemarketing-individual.jpg'

const Telemarketing = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <section> 
      <div className='hero-container'>
        <div className='light-background telemarketing-background'></div>

        <div className='section-flex-container'>

          <h1 className='accent'>TELEMARKETING</h1>
          <h2>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</h2>
        </div>
      </div>

      <div className='dark-section-container'>

        <div className='content-container'>
          <h2 className='accent'>TELEMARKETING</h2>
          <hr></hr>
          <h3>Proin fringilla augue at sapien</h3>
          <p>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</p>
            
          <p>Aenean sed sem at ante aliquam consequat. Ut rhoncus ex et orci feugiat, nec finibus neque rhoncus.</p>
          
        </div>
        
        <div className='image-container'>
          <img 
            src={individual}
            alt='Man calling customers'
            />

        </div>
        
      </div>
    </section>
  )
}

export default Telemarketing