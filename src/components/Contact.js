import React, { useState } from 'react'
import axios from 'axios'

// CHAKRA STYLING
import { Button, useToast } from '@chakra-ui/react'

const Contact = () => {

  const toast = useToast()
  
  // STATE
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone_number: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const date = new Date()
      const dateString = date.toString()
      const {full_name, company_name, email, phone_number, message} = formData

      if (!full_name) throw 'Please provide a name'
      if (!email) throw 'Please provide a contact email'
      if (!phone_number) throw 'Please provide a phone number'
      if (!company_name) throw 'Please provide a company name'
      if (!message) throw 'Looks like you forgot to fill in the message.'

      const {data: emailData} = await axios.post('/send-email', formData)

      const { data: whatsappData } = await axios.post('/send-text', 
      {message: 
        `New Message from 
        
      ${full_name}
        
      Company: ${company_name}

        ${message} 

      on ${dateString}

      reply to: 
      ${email} 
    or 
      ${phone_number}.`})

      console.log(whatsappData, emailData)
      toast({
        title: 'Message Sent.',
        description: "Thank you for your message. We will be in touch as soon as possible",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        phone_number: '',
        message: '',
      })
    } catch (error) {
      console.log(error)
      toast({
        title: 'Message failed to sent.',
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
  return (
    <section className='contact-section'>
      <h1>GET IN TOUCH</h1>

      <hr></hr>

      <h3>Have a project you need help with?</h3>
      <p>Send us a message and one of out team will be in touch as soon as possible.</p>
      
      <form onSubmit={handleSubmit} className='contact-form'>

        <div className='form-field'>
          <label  htmlFor='full_name'>Name <span className='red'>*</span></label>
          <input required type='text' name='full_name' placeholder='John' value={formData.full_name} onChange={handleChange}/>
        </div>


        <div className='form-field'>
          <label htmlFor='email'>Email <span className='red'>*</span></label>
          <input required type='email' name='email' placeholder='email@email.com' value={formData.email} onChange={handleChange}/>
        </div>

        <div className='form-field'>
          <label htmlFor='company_name'>Company Name <span className='red'>*</span></label>
          <input required type='text' name='company_name' placeholder='Compnay Name Ltd.' value={formData.company_name} onChange={handleChange}/>
        </div>

        <div className='form-field'>
          <label htmlFor='phone_number'>Phone Number <span className='red'>*</span></label>
          <input required type='tel' name='phone_number' placeholder='0123456789' value={formData.phone_number} onChange={handleChange}/>
        </div>

        <div className='form-field message-area'>
          <label htmlFor='message'>Message <span className='red'>*</span></label>
          <textarea rows='6' required name='message' placeholder='Your message here...' value={formData.message} onChange={handleChange}/>
        </div>

        <Button className='light-btn' onClick={handleSubmit}>Send message</Button>

      </form>
    </section>
  )
}

export default Contact