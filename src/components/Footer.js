import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// STYLING
import { Button } from '@chakra-ui/react'
const Footer = () => {
  
  // STATE
  const [hideFooter, setHideFooter] = useState(false)

  const navigate = useNavigate()

  // CHECK IF ON THE GETINTOUCH PAGE
  useEffect(() => {
    const url = window.location.href.split('/')
    url.includes('getintouch') ? setHideFooter(true) : setHideFooter(false)
  }, )
  
  return (
    <div className={hideFooter ? 'footer-hiddent' : 'footer-main'}>
      <div className='footer-mobile'>
        <Button onClick={() => navigate('getintouch')} className='get-in-touch-button'>Send us a message</Button>
      </div>
      <div className='footer-desktop'>
        <p>Destop</p>
      </div>
    </div>
  )
}

export default Footer