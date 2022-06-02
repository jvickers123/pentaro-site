import React from 'react'
import { useNavigate } from 'react-router-dom'

// STYLING
import { Button } from '@chakra-ui/react'
const Footer = () => {
  
  const navigate = useNavigate()

  // const handleSubmit = () => {
  //   // console.log('working')
  // }
  return (
    <div className='footer-main'>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor=''
      
      </form> */}
      <Button onClick={() => navigate('getintouch')} className='get-in-touch-button'>Send us a message</Button>
    </div>
  )
}

export default Footer