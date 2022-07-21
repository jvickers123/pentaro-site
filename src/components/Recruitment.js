import React, {useEffect} from 'react'

// IMAGES
import handshake from '../assets/business-deal.jpg'
import handshake2 from '../assets/handshake2.jpg'

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
          <h2>Pentaro utilises modern research and data analysis techniques to acquire the best selection of viable candidates.</h2>
        </div>
      </div>

      <div className='plain-section-container off-left'>

        <div className='content-container left'>

          <div className='dotted-line offset-left-top'></div>
          
          <h2 className='accent'>BESPOKE RECRUITMENT SOLUTIONS</h2>
          <hr></hr>
          <h3>Pentaro utilises modern research and data analysis techniques to acquire the best selection of viable candidates.</h3>
          
          <p>Our experienced team will learn and understand your business and the role. Every candidate must pass our rigorous selection and screening process, finding the right candidates for you</p>

          
        </div>

      
        
      </div>

      <div className='plain-section-container middle'> 

        <div className='left-content-container'>
          <div className='image-container'>
            <img 
              src={handshake}
              alt='Shaking hands in a meeting'
              />
          </div>
        </div>

        <div className='content-container middle'>
          
          <div className='dotted-line offset-left-top'></div>
          
          <h2 className='accent'>PARTNERSHIP</h2>

          <hr></hr>


          <h3>Placing the best talent comes from working in a partnership.</h3>
          <p>We will gain key insight into your business’s structure, talent, culture, and processes to provide candidates that exceed your expectations, and reflect your company values.</p>

        </div>

        </div>

        <div className='plain-section-container offset-right'>
        


            <div className='content-container right'>
                <div className='dotted-line offset-left-top'></div>

                <h2 className='accent'>EXPERIENCE</h2>
                <hr></hr>
                <h3>Our team’s key experience lies in filling roles for growing business and SME’s.</h3>
                
                <p>Reliability and consistency are core values we hold, and require of candidates we propose.</p>
                  

            </div>

            <div className='image-container'>
                <img 
                  src={handshake2}
                  alt='Business meeting handshake'
                  />

              </div>
          </div>


          <div className='plain-section-container off-left'>

        <div className='content-container left'>

          <div className='dotted-line offset-left-top'></div>
          
          <h2 className='accent'>PERSONNEL</h2>
          <hr></hr>
          <h3>Personnel is the most important asset of any business.</h3>
          
          <p>We ensure the best possible return on investment, taking the stress out of the recruitment process whilst sourcing top talent across a spectrum of industries.</p>

          
        </div>

      
        
      </div>
    </section>
  )
}

export default Recruitment