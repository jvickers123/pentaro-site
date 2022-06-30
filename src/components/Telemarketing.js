import React, {useEffect, useRef, useState} from 'react'

// IMAGES
import individual from '../assets/telemarketing-individual.jpg'
import logo from '../assets/whatsapp.jpeg'

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

        <div className='green-section-container' ref={pentRef}>

          <h2 >THE POWER OF 5</h2>

          <hr></hr>

          <p>Here at Pentaro, we offer five distinct telemarketing services</p>
          
          {/* <p>Click to find out more below.</p> */}

          <br />
          <div className='logo-wheel-container'>

            <img src={logo} alt='pentaro logo' />

            <div className='wheel-option top-left' onClick={() => scrollTo(oneRef)}><h3 onClick={() => scrollTo(oneRef)}>TELEMARKETING</h3></div>
            <div className='wheel-option top-right'onClick={() => scrollTo(twoRef)}><h3 onClick={() => scrollTo(twoRef)}>CUSTOMER <br /> SERVICE</h3></div>
            <div className='wheel-option right' onClick={() => scrollTo(threeRef)}><h3 onClick={() => scrollTo(threeRef)}>MARKET <br /> RESEARCH <br /> & DATA <br /> CLEANSING</h3></div>
            <div className='wheel-option bottom' onClick={() => scrollTo(fourRef)}><h3 onClick={() => scrollTo(fourRef)}>LEAD <br /> GENERATION</h3></div>
            <div className='wheel-option left' onClick={() => scrollTo(fiveRef)}><h3 onClick={() => scrollTo(fiveRef)}>APPOINTMENT <br /> SETTING</h3></div>

          </div>

            
          </div>

          <div className='service-options-container'>

            <div className='service-option white-section-container' ref={oneRef}>

              <div className='content-container'>
                <h2 className='accent'>TELEMARKETING</h2>
                <hr></hr>
                <h3>Telemarketing at pentaro priorities quality, clarity, and consistency, producing direct connections and opportunities with your target audience.</h3>
                
                <p>Our strategic approach and emphasis on analysis delivers a service that sets us apart from our competitors.</p>
                  
                <p>Effective communication is a key component in all of our processes, with frequent updates, daily statistics, and with constant availability to discuss progress in order to ensure results.</p>
                

                <p>Our team have experience in dealing with clients from a wide variety of industries, having dealt with SME’s through to international corporates. </p>
                
                <p>Every campaign Pentaro take on, regardless it’s size, will receive the same level of service to gain the best possible returns. Our ambition is to build productive relationships and share success.</p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top</button>

              </div>


              {/* <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div> */}

            </div>

            <div className='service-option dark-container customer-service' ref={twoRef}>

              {/* <div className='dark-background customer-service-background'></div> */}

              <div className='content-container'>
                <h2 className='accent'>CUSTOMER SERVICE</h2>
                <hr></hr>
                <h3>Building and maintaining relationships with your customers is our speciality. </h3>
                
                <p>General enquiries and issues that your current and prospective customers face are vital to your client retention and growth.</p>
                  
                <p>Our customer service contact centre reflects your company ethos at every point of contact to ensure a satisfied customer base – our team always applies a methodical approach to customer service. </p>
                
                <button onClick={() => scrollTo(pentRef)}>Back to top</button>

              </div>



              {/* <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div> */}

            </div>

            <div className='service-option' ref={threeRef}>

              <div className='content-container'>
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
                
                <button onClick={() => scrollTo(pentRef)}>Back to top</button>

              </div>



              {/* <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  />

              </div> */}

            </div>

            <div className='service-option' ref={fourRef}>

              <div className='content-container'>
                <h2 className='accent'>LEAD GENERATION</h2>
                <hr></hr>
                <h3>Our lead generation service unearths and cultivates businesses within your target market, in order to collect a wide range of information to streamline your sales process, enhancing your sales activity.</h3>
                
                <p>Lead generation allows for a more strategic approach to prospecting, resulting in efficient development of your companies &#39; pipeline, optimising the scope for capitalisation of leads.</p>
                  
                <p>Our heavily analytical style utilises the best methods currently available, to ensure a constant and consistent flow of new business leads to nurture.</p>
                
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
                <h2 className='accent'>APPOINTMENT SETTING</h2>
                <hr></hr>
                <h3>At Pentaro, our appointment setting service generates high quality pre-booked meetings, with relevant key decision makers for your sales development team to attend.</h3>

                <p>All of our appointments are qualified by your telemarketer, ensuring that prospects are in line with your business’s needs, generating interest for your products and or services. Your sales representatives can then do what they do best; build relationships and close meetings.</p>
                  
                <p>We take the stress out of booking valuable meetings, combining bespoke data analytics with a trained telemarketer, with a high level of industry knowledge, reflecting your companies’ values, culture and identity.</p>
                

                <p>Your telemarketer provides information packs detailing every appointment made, the key decision maker, and all buying signals or pain points that have been identified.</p>
                <button onClick={() => scrollTo(pentRef)}>Back to top</button>

              </div>



              {/* <div className='image-container'>
                <img 
                  src={individual}
                  alt='Man calling customers'
                  /> */}

              {/* </div> */}

            </div>

          </div>

      </div>

    </section>
  )
}

export default Telemarketing