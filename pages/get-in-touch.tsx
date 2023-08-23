import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';

// ICONS
import { FaLinkedin,  } from 'react-icons/fa';

import Head from 'next/head';
import Image from 'next/image';
import { axiosRequest } from '../helpers/axios-request';
import { useToast } from '@chakra-ui/react';

export type ContactFormData = {
  full_name: string;
  email: string;
  company_name?: string;
  phone_number: string;
  message?: string;
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toast = useToast();
  

  // STATE
  const [formData, setFormData] = useState<ContactFormData>({
    full_name: '',
    email: '',
    company_name: '',
    phone_number: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    axiosRequest({ formData, setFormData, toast });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

        <h2 className="heading3">Have a project you need help with?</h2>
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

          <input className="button" type="submit" value="Send message" />
            
        </form>
      </section>

      <section className="section section--dark">
        <div className="contact-details__container">
          <h2 className="accent heading2">CONTACT INFO</h2>
          <hr className="line-break line-break--white"></hr>

          <p className="paragraph white">Or contact us directly.</p>
          <h3 className="heading3 white">Email</h3>

          <a href="mailto:example@email.com" className="link link--faded">
            enquiries@pentaro.co.uk
          </a>

          <h3 className="heading3 white">Phone Number</h3>

          <p className="paragraph paragraph--faded">0113 5269 101</p>

          <h3 className="heading3 white">Address</h3>

          <p className="paragraph paragraph--faded">Pentaro Ltd. <br /> St Andrews House, Floor 2 <br />St Andrews Street<br />LS3 1LF</p>

          <h3 className="heading3 white">Social Media</h3>

          <div className="socials-container">
            <a className="link link--faded link__socials" target="_blank" href="https://uk.linkedin.com/company/pentaro-limited" aria-label="linked in">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="image-container image-container--bottom">
          <Image
            src="/assets/outside.jpg"
            alt="people outside an office"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
