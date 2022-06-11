import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// STYLING
import { Button, useToast } from '@chakra-ui/react'


const EnquireNow = () => {
  
  const navigate = useNavigate()
  const toast = useToast()

  // STATE
  const [hideFooter, setHideFooter] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
  })


  const handleSubmit = async (e) => {
    e.preventDefault()




    try {
      const {data: emailData} = await axios.post('/send-enquiry', formData)
      const date = new Date()
      const dateString = date.toString()
      const {full_name, email, phone_number} = formData

      if (!full_name) throw 'Please provide a name'
      if (!email) throw 'Please provide a contact email'
      if (!phone_number) throw 'Please provide a phone number'


      const { data: whatsappData } = await axios.post('/send-text', 
      {message: 
        `Quick enquiry from ${full_name}:
        
      on ${dateString}
        
      reply to 
      ${email} 
      
      or ${phone_number}`})
      console.log(whatsappData, emailData)
      toast({
        title: 'Enquiry Sent.',
        description: "Thank you for your enquiry. We will be in touch as soon as possible",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setFormData({
        full_name: '',
        email: '',
        phone_number: '',
      })
    } catch (error) {
      console.log(error)
      toast({
        title: 'Enquiry failed to sent.',
        description: `Please try again. ${error}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

  }

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value}
    setFormData(newObj)
  }


  // CHECK IF ON THE GETINTOUCH PAGE
  useEffect(() => {
    const url = window.location.href.split('/')
    url.includes('getintouch') ? setHideFooter(true) : setHideFooter(false)
  }, )
  
  return (

    <div className={hideFooter ? 'footer-hiddent' : 'footer-main'}>
      <div className='footer-mobile'>
        <Button onClick={() => navigate('getintouch')} className='enquire-now-button'>Send us a message</Button>
      </div>

      <div className='footer-desktop'>
        <form onSubmit={handleSubmit}>

          <div className='form-field'>
            <label  htmlFor='full_name'>Full Name</label>
            <input required type='text' name='full_name' placeholder='Full Name' value={formData.full_name} onChange={handleChange}/>
          </div>


          <div className='form-field'>
            <label htmlFor='email'>Email</label>
            <input required type='email' name='email' placeholder='email@email.com' value={formData.email} onChange={handleChange}/>
          </div>

          <div className='form-field'>
            <label htmlFor='phone_number'>Phone Number</label>
            <input required type='tel' name='phone_number' placeholder='0123456789' value={formData.phone_number} onChange={handleChange}/>
          </div>

          <Button className='light-btn' onClick={handleSubmit}>Enquire now</Button>

        </form>
      </div>
    </div>
  )
}

export default EnquireNow