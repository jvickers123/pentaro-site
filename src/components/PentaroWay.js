import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'

// IMAGES
import meeting from '../assets/happy-meeting.jpg'

const PentaroWay = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <section>
      <Helmet>
        <meta
          name="description"
          content="We have modernised and streamlined outsourced business development with sustainability and growth at the core of our process."
        />
        <title>The Pentaro Way | Pentaro: Telemarketing and Recruitment</title>
      </Helmet>
      
      <div className='hero-container'>
        <div className='hero pent-way-background'><div className='blue-background'></div></div>

        <div className='section-flex-container'>
          <h1 className='accent'>THE PENTARO WAY</h1>
          <h2>We have modernised and streamlined outsourced business development with sustainability and growth at the core of our process.</h2>
        </div>

      </div>

      <div className='plain-section-container middle' id='pentaro-way-box'>

        <div className='left-content-container'>
          <div className='image-container'>
          <img 
            src={meeting}
            alt='business meeting'
            />

        </div>
        </div>
        
        <div className='content-container middle'>

          <div className='dotted-line offset-left-top'></div>
          <h2 className='accent'>THE PENTARO WAY</h2>
          {/* <hr></hr> */}
          <h3>Changing perceptions.</h3>
          <p>As the economy changes, businesses are constantly presented with fresh opportunities and challenges.</p>
            
          <p>At Pentaro, we follow 5 core values to ensure we can help you to react and adapt in the best way possible.</p>
          
        </div>
        
        
        
      </div>

      <div className='grey-section-container'>
        <h2 className='accent'>OUR VALUES</h2>

        <hr></hr>

        <div className='values-container'>
          <div className='values-number-container'>
            <p className='values-numer accent'>1</p>
            <h3>Relationships</h3>
          </div>
          <p className='values-description'>Each of our partners benefit from having their own dedicated relationship manager. They will adopt and share your vision to help create a tailored growth strategy, unique to you. They provide frequent performance updates to track progress. Their role is to help our business become an extension of yours.</p>
        </div>

        <hr></hr>

        <div className='values-container'>
          <div className='values-number-container'>
            <p className='values-numer accent'>2</p>
            <h3>People</h3>
          </div>
          <p className='values-description'>At Pentaro, our culture puts our people at the heart of our process. Creating a working environment where success is shared, where professionalism is paramount, and where results are repeated.</p>
        </div>

        <hr></hr>

        <div className='values-container'>
          <div className='values-number-container'>
            <p className='values-numer accent'>3</p>
            <h3>Analytics</h3>
          </div>
          <p className='values-description'>Using innovative modern analysis techniques, developed by a dedicated team of experts, we provide all of our partners with weekly updates on key performance indicators, specific to your business. In an increasingly data-driven world, we believe in the importance of analysis, and believe our analytics are unlike anything else within the industry.</p>
        </div>

        <hr></hr>

        <div className='values-container'>
          <div className='values-number-container'>
            <p className='values-numer accent'>4</p>
            <h3>Transparency</h3>
          </div>
          <p className='values-description'>We are up front about all costs, with no hidden fees and flat fee recruitment options, so you can be sure you are getting the best service for the best price. Furthermore, we keep recordings of all our calls, which can be requested instantaneously for monitoring purposes.</p>
        </div>

        <hr></hr>

        <div className='values-container'>
          <div className='values-number-container'>
            <p className='values-numer accent'>5</p>
            <h3>Ethics</h3>
          </div>
          <p className='values-description'>Doing the right thing is often ignored. At Pentaro, we pride ourselves on having a clear code of ethics that puts integrity, honesty, and standards first.</p>
        </div>

      </div>
    </section>
  )
}

export default PentaroWay