import React, {useEffect, useRef, useState} from 'react'
import {Helmet} from 'react-helmet'

// IMAGES
import individual from '../assets/telemarketing-individual.jpg'
import logo from '../assets/logo-screenshot.png'
import smilingTeleSales from '../assets/smiling-telesales.jpg'
import teleResearch from '../assets/telemarketing-research.jpg'


const Telemarketing = () => {

  // RENDER AT TOP OF PAGE
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      <Helmet>
        <meta
          name="description"
          content="Telemarketing at Pentaro prioritises quality, clarity, and consistency, producing direct connections and opportunities with your target audience."
        />
        <title>Telemarketing | Pentaro: Telemarketing and Recruitment</title>
      </Helmet>
      
      <div className='hero-container'>
        <div className='hero telemarketing-background'><div className='blue-background'></div></div>

        <div className='section-flex-container'>

          <h1 className='accent'>TELEMARKETING</h1>
          <h2>Telemarketing at Pentaro prioritises quality, clarity, and consistency, producing direct connections and opportunities with your target audience.</h2>
        </div>
      </div>

      <div className='pentagon-screen-split-container'>

        <div className='plain-section-container wheel' ref={pentRef}>

          <div className='content-container wheel'>
            <h2 className='accent'>THE POWER OF 5</h2>

            <hr></hr>

            <p>Here at Pentaro, we offer five telemarketing services</p>

            {/* <p>Click to find out more below.</p> */}

            <div className='logo-wheel-container'>

              <img src={logo} alt='pentaro logo' />

              <div className='wheel-option top-left' onClick={() => scrollTo(oneRef)}><h3 onClick={() => scrollTo(oneRef)}>LEAD <br /> GENERATION</h3></div>
              <div className='wheel-option top-right'onClick={() => scrollTo(twoRef)}><h3 onClick={() => scrollTo(twoRef)}id='appointment-text'>APPOINTMENT<br /> SETTING</h3></div>
              <div className='wheel-option right' onClick={() => scrollTo(threeRef)}><h3 onClick={() => scrollTo(threeRef)}>MARKET <br /> RESEARCH {/*<br /> & DATA <br /> CLEANSING */}</h3></div>
              <div className='wheel-option bottom' onClick={() => scrollTo(fourRef)}><h3 onClick={() => scrollTo(fourRef)} >CUSTOMER <br /> SERVICE</h3></div>
              <div className='wheel-option left' onClick={() => scrollTo(fiveRef)}><h3 onClick={() => scrollTo(fiveRef)}>DIRECT <br /> SELLING</h3></div>

            </div>
          </div>

          

            
          </div>

          <div className='plain-section-container offset-right'>
            
              

            <div className='content-container right' ref={oneRef}>
                        <div className='dotted-line offset-left-top'></div>
                <h2 className='accent'>LEAD GENERATION</h2>
                <hr></hr>
                <h3>Our lead generation service unearths and cultivates businesses within your target market, in order to collect a wide range of information to streamline your sales process, enhancing your sales activity.</h3>
                
                <p>Lead generation allows for a more strategic approach to prospecting, resulting in efficient development of your company's pipeline, optimising the scope for capitalisation of leads.</p>
                  
                <p>Our heavily analytical style utilises the best methods currently available, to ensure a constant and consistent flow of new business leads to nurture.</p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top <span className='accent'>^</span></button>


               


            </div>

            <div className='image-container'>
                  <img 
                    src={individual}
                    alt='Man calling customers'
                    />

                </div>
          </div>

          {/* <div className='plain-section-container service-option-container'> */}
          <div className='plain-section-container off-left'>



              
              <div className='content-container left' ref={twoRef}>
                
                <div className='dotted-line offset-left-top'></div>
                
                <h2 className='accent'>APPOINTMENT SETTING</h2>
                <hr></hr>
                <h3>At Pentaro, our appointment setting service generates high quality pre-booked meetings with relevant key decision makers for your sales development team to attend.</h3>

                <p>All of our appointments are qualified by your telemarketer, ensuring that prospects are in line with your business needs, generating interest for your products and or services. Your sales representatives can then do what they do best; build relationships and close meetings.</p>
                  
                <p>We take the stress out of booking valuable meetings, combining bespoke data analytics with a trained telemarketer, with a high level of industry knowledge, reflecting your companies’ values, culture and identity.</p>
                

                <p>Your telemarketer provides information packs detailing every appointment made, the key decision maker, and all buying signals or pain points that have been identified.</p>
                <button onClick={() => scrollTo(pentRef)}>Back to top <span className='accent'>^</span></button>




              {/* <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  /> */}

              {/* </div> */}

            </div>
            </div>
          
            
          

          <div className='plain-section-container offset-right'>
          <div className='content-container right' ref={threeRef}>
                        <div className='dotted-line offset-left-top'></div>
                <h2 className='accent'>MARKET RESEARCH & DATA CLEANSING</h2>
                <hr></hr>
                <h3>At Pentaro, our trained market research specialists implement bespoke strategies for each individual campaign.  Using market trends, direct research, process development, and risk analysis, we ensure the best insight into the market of your designated industry.</h3>
                <p>Information that we frequently provide includes:</p>

                <ul>
                  <li>Current customer satisfaction levels and feedback</li>
                  <li>Lapsed current customer warming</li>
                  <li>Alternative markets and revenue streams</li>
                  <li>Price and cost analysis relative to your competitors</li>
                  <li>Causes of customer migration</li>
                  <li>Competitors within the industry including locations, activities and operating markets</li>
                </ul>
                  
                <p>Information and market knowledge is invaluable to the success and growth for businesses in the current economic world. Market research and data cleansing through telemarketing is a fast and efficient method of delving deeper into your target audience, and the needs and desires of your customers.</p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top <span className='accent'>^</span></button>




            </div>

            <div className='image-container'>
                <img 
                  src={teleResearch}
                  alt='Man calling someone and looking at computer screen'
                  />

              </div>
          </div>

          <div className='plain-section-container offset-right'>
        


            <div className='content-container right' ref={fourRef}>
                        <div className='dotted-line offset-left-top'></div>
              {/* <div className='dark-background customer-service-background'></div> */}

                <h2 className='accent'>CUSTOMER SERVICE</h2>
                <hr></hr>
                <h3>Building and maintaining relationships with your customers is our speciality. </h3>
                
                <p>General enquiries and issues that your current and prospective customers face are vital to your client retention and growth.</p>
                  
                <p>Our customer service contact centre reflects your company ethos at every point of contact to ensure a satisfied customer base – our team always applies a methodical approach to customer service. </p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top <span className='accent'>^</span></button>




              {/* <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div> */}

            </div>

            <div className='image-container'>
                <img 
                  src={smilingTeleSales}
                  alt='Telemarketer smiling'
                  />

              </div>
          </div>

          <div className='plain-section-container off-left'>
            
            <div className='content-container left' ref={fiveRef}>
              <div className='dotted-line offset-left-top'></div>
                <h2 className='accent'>DIRECT SELLING</h2>
                <hr></hr>
                {/* <h3>Telemarketing at pentaro priorities quality, clarity, and consistency, producing direct connections and opportunities with your target audience.</h3> */}
                
                <h3>Our strategic approach and emphasis on analysis delivers a service that sets us apart from our competitors.</h3>
                  
                <p>Effective communication is a key component in all of our processes, with frequent updates, daily statistics, and with constant availability to discuss progress in order to ensure results.</p>
                

                <p>Our team have experience in dealing with partners from a wide variety of industries, having dealt with SME’s through to international corporates. </p>
                
                <p>Every campaign Pentaro take on, regardless its size, will receive the same level of service to gain the best possible returns. Our ambition is to build productive relationships and share success.</p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top <span className='accent'>^</span></button>



              {/* <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div> */}

            </div>
          </div>


            

            {/* <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div> */}

            

   

          {/* </div> */}

      </div>

    </section>
  )
}

export default Telemarketing