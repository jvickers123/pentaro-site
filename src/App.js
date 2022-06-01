import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// COMPONENTS
import Header from './components/Header'
import Home from './components/Home'
import PentaroWay from './components/PentaroWay'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pentaroway' element={<PentaroWay/>}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
