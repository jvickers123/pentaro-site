import React, {useEffect, useRef, useState} from 'react'

// IMAGES
import individual from '../assets/telemarketing-individual.jpg'


const Telemarketing = () => {

  // RENDER AT TOP OF PAGE
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // STATE
  const [hovered, setHovered] = useState(false)

  // REF
  const pentRef = useRef(null)
  const oneRef = useRef(null)
  const twoRef = useRef(null)
  const threeRef = useRef(null)
  const fourRef = useRef(null)
  const fiveRef = useRef(null)

  // SCROLL TO COMPONENT
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth'})
  }


  return (
    <section> 
      <div className='hero-container'>
        <div className='light-background telemarketing-background'></div>

        <div className='section-flex-container'>

          <h1 className='accent'>TELEMARKETING</h1>
          <h2>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</h2>
        </div>
      </div>

      <div className='pentagon-screen-split-container'>

        <div className='white-section-container' ref={pentRef}>

          <h2 className='accent'>THE POWER OF 5</h2>

          <hr></hr>

          <p>Here at Pentaro, we offer five distinct telemarketing services</p>
          
          {/* <p>Click to find out more below.</p> */}

          <br />

          <div className='pentagon-flex-container'>
            <div className='pentagon-clip-path-container'>

              <h3 className='left-text' onClick={() => scrollTo(oneRef)}>ONE</h3>
              <h3 className='right-text' onClick={() => scrollTo(twoRef)}>TWO</h3>
              <h3 className='bot-left-text' onClick={() => scrollTo(threeRef)}>THREE</h3>
              <h3 className='bot-right-text' onClick={() => scrollTo(fourRef)} >FOUR</h3>
              <h3 className='bot-text' onClick={() => scrollTo(fiveRef)}>FIVE</h3>

              <div onClick={() => scrollTo(oneRef)} className={hovered ? 'triangle-container left-tri hovered' : 'triangle-container left-tri'} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}><div className='blue-background'></div></div>
              <div onClick={() => scrollTo(twoRef)} className='triangle-container right-tri'><div className='blue-background'></div></div>
              <div onClick={() => scrollTo(threeRef)} className='triangle-container bot-left-tri'><div className='blue-background'></div></div>
              <div onClick={() => scrollTo(fiveRef)} className='triangle-container base-tri'><div className='blue-background'></div></div>
              <div onClick={() => scrollTo(fourRef)} className='triangle-container bot-right-tri'><div className='blue-background'></div></div>


            </div>
          </div>

            
          </div>

          <div className='service-options-container'>

            <div className='service-option' ref={oneRef}>

              <div className='content-container'>
                <h2 className='accent'>SERVICE ONE</h2>
                <hr></hr>
                <h3>Proin fringilla augue at sapien</h3>
                <p>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</p>
                  
                <p>Aenean sed sem at ante aliquam consequat. Ut rhoncus ex et orci feugiat, nec finibus neque rhoncus.</p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top</button>

              </div>


              <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div>

            </div>

            <div className='service-option' ref={twoRef}>

              <div className='content-container'>
                <h2 className='accent'>SERVICE TWO</h2>
                <hr></hr>
                <h3>Proin fringilla augue at sapien</h3>
                <p>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</p>
                  
                <p>Aenean sed sem at ante aliquam consequat. Ut rhoncus ex et orci feugiat, nec finibus neque rhoncus.</p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top</button>

              </div>



              <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div>

            </div>

            <div className='service-option' ref={threeRef}>

              <div className='content-container'>
                <h2 className='accent'>SERVICE 3</h2>
                <hr></hr>
                <h3>Proin fringilla augue at sapien</h3>
                <p>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</p>
                  
                <p>Aenean sed sem at ante aliquam consequat. Ut rhoncus ex et orci feugiat, nec finibus neque rhoncus.</p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top</button>

              </div>



              <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div>

            </div>

            <div className='service-option' ref={fourRef}>

              <div className='content-container'>
                <h2 className='accent'>SERVICE 4</h2>
                <hr></hr>
                <h3>Proin fringilla augue at sapien</h3>
                <p>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</p>
                  
                <p>Aenean sed sem at ante aliquam consequat. Ut rhoncus ex et orci feugiat, nec finibus neque rhoncus.</p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top</button>

              </div>



              <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div>

            </div>

            <div className='service-option' ref={fiveRef}>

              <div className='content-container'>
                <h2 className='accent'>SERVICE 5</h2>
                <hr></hr>
                <h3>Proin fringilla augue at sapien</h3>
                <p>Proin fringilla augue at sapien imperdiet mollis. Vivamus ut quam ut tellus ullamcorper elementum non non turpis.</p>
                  
                <p>Aenean sed sem at ante aliquam consequat. Ut rhoncus ex et orci feugiat, nec finibus neque rhoncus.</p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top</button>

              </div>



              <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div>

            </div>

          </div>

      </div>

    </section>
  )
}

export default Telemarketing