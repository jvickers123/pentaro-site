import React, { useState } from 'react'

// CHAKRA STYLING
import { Button } from '@chakra-ui/react'

const Contact = () => {

  
  // STATE
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone_number: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value}
    setFormData(newObj)
  }
  return (
    <section className='contact-section'>
      <h1>CONTACT US</h1>

      <hr></hr>

      <h2>GET IN TOUCH</h2>
      <p>Have a project you need help with? Send us a message and someone will be in touch soon.</p>
      <form onSubmit={handleSubmit} className='contact-form'>

        <div className='form-field'>
          <label  htmlFor='full_name'>Full Name <span className='red'>*</span></label>
          <input required type='text' name='full_name' placeholder='Full Name' value={formData.full_name} onChange={handleChange}/>
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