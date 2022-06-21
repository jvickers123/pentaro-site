import React from 'react'

// IMAGES
import individual from '../assets/telemarketing-individual.jpg'


const Telemarketing = () => {


  return (
    <section> 
      <div className='hero-container'>
        <div className='light-background telemarketing-background'></div>

        <div className='section-flex-container'>

          <h1 className='accent'>TELEMARKETING</h1>
          <h2>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</h2>
        </div>
      </div>

      <div className='grey-section-container'>

        <h2 className='accent'>THE POWER OF 5</h2>

        <hr></hr>

        <p>Here at Pentaro, we offer five distinct telemarketing services</p>
        <br />
        <p>Click to find out more below.</p>

        <br />
        
        <div className='pentagon-flex-container'>
          <div className='pentagon-clip-path-container'>

            <h3 className='left-text'>TEXT</h3>
            <h3 className='right-text'>TEXT</h3>
            <h3 className='bot-left-text'>TEXT</h3>
            <h3 className='bot-right-text'>TEXT</h3>
            <h3 className='bot-text'>TEXT</h3>

            <div className='triangle-container left-tri'><div className='blue-background'></div></div>
            <div className='triangle-container right-tri'><div className='blue-background'></div></div>
            <div className='triangle-container bot-left-tri'><div className='blue-background'></div></div>
            <div className='triangle-container base-tri'><div className='blue-background'></div></div>
            <div className='triangle-container bot-right-tri'><div className='blue-background'></div></div>


          </div>
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