import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// STYLING
import { Button } from '@chakra-ui/react'
const EnquireNow = () => {
  
  const navigate = useNavigate()
  
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
      const { data: whatsappData } = await axios.post('/send-text', 
      {message: 
        `Quick enquiry from ${full_name}:
        
      on ${dateString}
        
      reply to 
      ${email} 
      
      or ${phone_number}`})
      console.log(whatsappData, emailData)
    } catch (error) {
      console.log(error)
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
        <Button onClick={() => navigate('getintouch')} className='enquire-now-button'>Enquire now</Button>
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

          <Button className='light-btn' onClick={handleSubmit}>Enquire Now</Button>

        </form>
      </div>
    </div>
  )
}

export default EnquireNow