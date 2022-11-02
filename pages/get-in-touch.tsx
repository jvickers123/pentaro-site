import React, { useState, useEffect } from 'react';
import axios from 'axios';

// CHAKRA STYLING
import { useToast } from '@chakra-ui/react';

// IMAGES
import outside from '../src/assets/outside.jpg';

// ICONS
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

// GOOGLE ANALYTICS
import { sendGetInTouch } from '../helpers/GA-Helper';
import Head from 'next/head';
import Image from 'next/image';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toast = useToast();

  // STATE
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone_number: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const date = new Date();
      const dateString = date.toString();
      const { full_name, company_name, email, phone_number, message } =
        formData;

      if (!full_name) throw 'Please provide a name';
      if (!email) throw 'Please provide a contact email';
      if (!phone_number) throw 'Please provide a phone number';
      if (!company_name) throw 'Please provide a company name';
      if (!message) throw 'Looks like you forgot to fill in the message.';

      await axios.post(
        'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-email',
        formData
      );

      const textMessageData = {
        message: `New Message from 
            
          ${full_name}
            
          Company: ${company_name}
    
            ${message} 
    
          on ${dateString}
    
          reply to: 
          ${email} 
        or 
          ${phone_number}.`,
      };

      // SEND TEXT NOTIFICATION
      await axios.post(
        'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-sms-1',
        textMessageData
      );
      await axios.post(
        'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-sms-2',
        textMessageData
      );
      await axios.post(
        'https://5021147o54.execute-api.eu-west-2.amazonaws.com/staging/send-message/send-sms-3',
        textMessageData
      );

      // GOOGLE ANALYTICS
      sendGetInTouch();

      toast({
        title: 'Message Sent.',
        description:
          'Thank you for your message. We will be in touch as soon as possible',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        phone_number: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Message failed to sent.',
        description: `Please try again. ${error}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value };
    setFormData(newObj);
  };
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Have a project you need help with? Send us a message and one of our team will be in touch as soon as possible."
        />
        <title>Get in touch | Pentaro: Telemarketing and Recruitment</title>
      </Head>

      <section className="section section--grey">
        <h1 className="heading1 heading1__contact accent">GET IN TOUCH</h1>

        <hr className="line-break line-break--dark"></hr>

        <h3 className="heading3">Have a project you need help with?</h3>
        <p className="paragraph">
          Send us a message and one of our team will be in touch as soon as
          possible.
        </p>

        <form onSubmit={handleSubmit} className="contact-form__form">
          <div className="contact-form__form-field">
            <label className="contact-form__label" htmlFor="full_name">
              Name <span className="contact-form__required">*</span>
            </label>
            <input
              className="contact-form__input"
              required
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__form-field">
            <label className="contact-form__label" htmlFor="email">
              Email <span className="contact-form__required">*</span>
            </label>
            <input
              className="contact-form__input"
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__form-field">
            <label className="contact-form__label" htmlFor="company_name">
              Company Name <span className="contact-form__required">*</span>
            </label>
            <input
              className="contact-form__input"
              required
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__form-field">
            <label className="contact-form__label" htmlFor="phone_number">
              Phone Number <span className="contact-form__required">*</span>
            </label>
            <input
              className="contact-form__input"
              required
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__form-field message-area">
            <label className="contact-form__label" htmlFor="message">
              Message <span className="contact-form__required">*</span>
            </label>
            <textarea
              className="contact-form__input"
              rows={6}
              required
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="button" onClick={handleSubmit}>
            Send message
          </button>
        </form>
      </section>

      <section className="dark-section-container contact-details">
        <div className="contact-info-container">
          <h2 className="accent">CONTACT INFO</h2>
          <hr></hr>

          <p className="paragraph">Or contact us directly.</p>
          <h3>Email</h3>

          <a href="mailto:example@email.com">enquiries@pentaro.co.uk</a>

          <h3>Phone Number</h3>

          <p className="phone-num">01133231850</p>

          <h3>Social Media</h3>

          <div className="socials">
            <a href="www.instagram.co.uk" target="_blank">
              <FiInstagram />
            </a>
            <a href="www.facebook.co.uk" target="_blank">
              <FiFacebook />
            </a>
            <a href="www.twitter.co.uk" target="_blank">
              <FiTwitter />
            </a>
          </div>
        </div>

        <Image src={outside} alt="people outside an office" />
      </section>
    </>
  );
};

export default Contact;
