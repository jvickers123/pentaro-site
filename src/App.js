import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

// COOKIES
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import { initGA } from './components/GA-Helper'


// COMPONENTS
import SiteNavBar from './components/SiteNavBar'
import Home from './components/Home'
import Telemarketing from './components/Telemarketing'
import Recruitment from './components/Recruitment'
import PentaroWay from './components/PentaroWay'
import Contact from './components/Contact'
import EnquireNow from './components/EnquireNow'
import Footer from './components/Footer'

function App() {

  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)
    }
  }

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, [])

  return (
    <ChakraProvider >
      <BrowserRouter>
        <SiteNavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/recruitment' element={<Recruitment />}/>
          <Route path='/telemarketing' element={<Telemarketing />}/>
          <Route path='/pentaro-way' element={<PentaroWay/>}/>
          <Route path='/get-in-touch' element={<Contact />}/>
        </Routes>
        <EnquireNow />
        <Footer />
      </BrowserRouter>
      <CookieConsent 
          enableDeclineButton 
          style={{ background: "#082233" }}
          buttonStyle={{ color: "#52c4b1", background: "#fff" }}
          declineButtonStyle={{ background: "#fff", color: "#52c4b1"}}
          onAccept={handleAcceptCookie}>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </ChakraProvider>
    
  )
}

export default App
