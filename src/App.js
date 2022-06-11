import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'


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
  return (
    <ChakraProvider >
      <BrowserRouter>
        <SiteNavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/recruitment' element={<Recruitment />}/>
          <Route path='/telemarketing' element={<Telemarketing />}/>
          <Route path='/pentaroway' element={<PentaroWay/>}/>
          <Route path='/getintouch' element={<Contact />}/>
        </Routes>
        <EnquireNow />
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
    
  )
}

export default App
