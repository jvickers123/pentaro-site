import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';

import { axiosRequest } from '../../helpers/axios-request';

export type EnquireFormData = {
  full_name: string;
  email: string;
  phone_number: string;
};

const EnquireNow = () => {
  // STATE
  const [hideFooter, setHideFooter] = useState(false);
  const [formData, setFormData] = useState<EnquireFormData>({
    full_name: '',
    email: '',
    phone_number: '',
  });

  useEffect(() => {
    const url = window.location.href.split('/');
    url.includes('get-in-touch') ? setHideFooter(true) : setHideFooter(false);
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    axiosRequest({ formData, setFormData, quickEnquiry: true });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newObj = { ...formData, [e.target.name]: e.target.value };
    setFormData(newObj);
  };

  // CHECK IF ON THE GETINTOUCH PAGE

  return (
    <aside className={`enquire-now ${hideFooter ? 'enquire-now.hidden' : ''}`}>
      <div className="enquire-now__mobile">
        <Link href="/get-in-touch">
          <button className="button button--box-shadow">
            Send us a message
          </button>
        </Link>
      </div>

      <div className="enquire-now__desktop">
        <form onSubmit={handleSubmit} className="enquire-now__form">
          <div className="enquire-now__form-field">
            <label className="enquire-now__label" htmlFor="full_name">
              Name
            </label>
            <input
              className="enquire-now__input"
              required
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>

          <div className="enquire-now__form-field">
            <label className="enquire-now__label" htmlFor="email">
              Email
            </label>
            <input
              className="enquire-now__input"
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="enquire-now__form-field">
            <label className="enquire-now__label" htmlFor="phone_number">
              Phone No.
            </label>
            <input
              className="enquire-now__input"
              required
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>

          <button className="button button--enquire-now" onClick={handleSubmit}>
            Enquire now
          </button>
        </form>
      </div>
    </aside>
  );
};

export default EnquireNow;
