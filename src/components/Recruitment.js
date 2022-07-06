import React, {useEffect} from 'react'

// IMAGES
import handshake from '../assets/business-deal.jpg'

const Recruitment = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <section>
      <div className='hero-container'>
        <div className='hero recruitment-background'><div className='blue-background'></div></div>

        <div className='section-flex-container'>

          <h1 className='accent'>RECRUITMENT</h1>
          <h2>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</h2>
        </div>
      </div>

      <div className='plain-section-container off-left'>

        <div className='content-container left'>

          <div className='dotted-line offset-left-top'></div>
          
          <h2 className='accent'>RECRUITMENT</h2>
          {/* <hr></hr> */}
          <h3>Proin fringilla augue at sapien</h3>
          <p>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</p>
            
          <p>Aenean sed sem at ante aliquam consequat. Ut rhoncus ex et orci feugiat, nec finibus neque rhoncus.</p>
          
        </div>
        
        <div className='image-container'>
          <img 
            src={handshake}
            alt='People shaking hands at meeting'
            />

        </div>
        
      </div>
    </section>
  )
}

export default Recruitment