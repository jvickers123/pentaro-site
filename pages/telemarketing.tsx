import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// IMAGES
import logo from '../public/assets/logo-screenshot.png';

const Telemarketing = () => {
  // RENDER AT TOP OF PAGE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // REF
  const pentRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);

  // SCROLL TO COMPONENT
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Telemarketing at Pentaro prioritises quality, clarity, and consistency, producing direct connections and opportunities with your target audience."
        />
        <title>Telemarketing | Pentaro: Telemarketing and Recruitment</title>
      </Head>

      <section className="hero-container">
        <div className="hero telemarketing-background hero-container__image hero-container__image--telemarketing">
          <Image
            src="/assets/telemarketing-team.jpg"
            alt="telemarketers at work"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="blue-background hero-container__blue-background"></div>
        </div>

        <div className="section-flex-container hero-container__content">
          <h1 className="accent heading1 heading1__hero">TELEMARKETING</h1>
          <h2 className="heading2 heading2__hero">
            Telemarketing at Pentaro prioritises quality, clarity, and
            consistency, producing direct connections and opportunities with
            your target audience.
          </h2>
        </div>
      </section>

      <section className="section section--center wheel" ref={pentRef}>
        <div className="card card--wheel">
          <h2 className="accent heading2">THE POWER OF 5</h2>

          <hr></hr>

          <p className="paragraph">
            Here at Pentaro, we offer five telemarketing services
          </p>

          <div className="wheel__container">
            <Image
              src={logo}
              alt="pentaro logo"
              layout="fill"
              objectFit="cover"
            />

            <div
              className="wheel__option wheel__option--top-left"
              onClick={() => scrollTo(oneRef)}
            >
              <h3
                className="heading3 heading3--wheel-option"
                onClick={() => scrollTo(oneRef)}
              >
                LEAD <br /> GENERATION
              </h3>
            </div>
            <div
              className="wheel__option wheel__option--top-right"
              onClick={() => scrollTo(twoRef)}
            >
              <h3
                className="heading3 heading3--wheel-option"
                onClick={() => scrollTo(twoRef)}
                id="appointment-text"
              >
                APPOINTMENT
                <br /> SETTING
              </h3>
            </div>
            <div
              className="wheel__option wheel__option--right"
              onClick={() => scrollTo(threeRef)}
            >
              <h3
                className="heading3 heading3--wheel-option"
                onClick={() => scrollTo(threeRef)}
              >
                MARKET <br /> RESEARCH {/*<br /> & DATA <br /> CLEANSING */}
              </h3>
            </div>
            <div
              className="wheel__option wheel__option--bottom"
              onClick={() => scrollTo(fourRef)}
            >
              <h3
                className="heading3 heading3--wheel-option"
                onClick={() => scrollTo(fourRef)}
              >
                CUSTOMER <br /> SERVICE
              </h3>
            </div>
            <div
              className="wheel__option wheel__option--left"
              onClick={() => scrollTo(fiveRef)}
            >
              <h3
                className="heading3 heading3--wheel-option"
                onClick={() => scrollTo(fiveRef)}
              >
                DIRECT <br /> SELLING
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--right">
        <div className="card card--right" ref={oneRef}>
          <div className="dots dots--right"></div>
          <h2 className="accent heading2">LEAD GENERATION</h2>
          <hr></hr>
          <h3 className="heading3">
            Our lead generation service unearths and cultivates businesses
            within your target market, in order to collect a wide range of
            information to streamline your sales process, enhancing your sales
            activity.
          </h3>

          <p className="paragraph">
            Lead generation allows for a more strategic approach to prospecting,
            resulting in efficient development of your company's pipeline,
            optimising the scope for capitalisation of leads.
          </p>

          <p className="paragraph">
            Our heavily analytical style utilises the best methods currently
            available, to ensure a constant and consistent flow of new business
            leads to nurture.
          </p>

          <button
            className="link link__back-to-top"
            onClick={() => scrollTo(pentRef)}
          >
            Back to top <span className="accent">^</span>
          </button>
        </div>

        <div className="image-container image-container--right">
          <Image
            src="/assets/telemarketing-individual.jpg"
            alt="Man calling customers"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="section section--left">
        <div className="card card--left" ref={twoRef}>
          <div className="dots"></div>

          <h2 className="accent heading2">APPOINTMENT SETTING</h2>
          <hr></hr>
          <h3 className="heading3">
            At Pentaro, our appointment setting service generates high quality
            pre-booked meetings with relevant key decision makers for your sales
            development team to attend.
          </h3>

          <p className="paragraph">
            All of our appointments are qualified by your telemarketer, ensuring
            that prospects are in line with your business needs, generating
            interest for your products and or services. Your sales
            representatives can then do what they do best; build relationships
            and close meetings.
          </p>

          <p className="paragraph">
            We take the stress out of booking valuable meetings, combining
            bespoke data analytics with a trained telemarketer, with a high
            level of industry knowledge, reflecting your companies’ values,
            culture and identity.
          </p>

          <p className="paragraph">
            Your telemarketer provides information packs detailing every
            appointment made, the key decision maker, and all buying signals or
            pain points that have been identified.
          </p>
          <button
            className="link link__back-to-top"
            onClick={() => scrollTo(pentRef)}
          >
            Back to top <span className="accent">^</span>
          </button>
        </div>
      </section>

      <section className="section section--right">
        <div className="card card--right" ref={threeRef}>
          <div className="dots dots--right"></div>
          <h2 className="heading2 accent">MARKET RESEARCH & DATA CLEANSING</h2>
          <hr></hr>
          <h3 className="heading3">
            At Pentaro, our trained market research specialists implement
            bespoke strategies for each individual campaign. Using market
            trends, direct research, process development, and risk analysis, we
            ensure the best insight into the market of your designated industry.
          </h3>
          <p className="paragraph">
            Information that we frequently provide includes:
          </p>

          <ul className="list">
            <li className="list-item">
              Current customer satisfaction levels and feedback
            </li>
            <li className="list-item">Lapsed current customer warming</li>
            <li className="list-item">
              Alternative markets and revenue streams
            </li>
            <li className="list-item">
              Price and cost analysis relative to your competitors
            </li>
            <li className="list-item">Causes of customer migration</li>
            <li className="list-item">
              Competitors within the industry including locations, activities
              and operating markets
            </li>
          </ul>

          <p className="paragraph">
            Information and market knowledge is invaluable to the success and
            growth for businesses in the current economic world. Market research
            and data cleansing through telemarketing is a fast and efficient
            method of delving deeper into your target audience, and the needs
            and desires of your customers.
          </p>

          <button
            className="link link__back-to-top"
            onClick={() => scrollTo(pentRef)}
          >
            Back to top <span className="accent">^</span>
          </button>
        </div>

        <div className="image-container image-container--right">
          <Image
            src="/assets/telemarketing-research.jpg"
            alt="Man calling someone and looking at computer screen"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="section section--right">
        <div className="card card--right" ref={fourRef}>
          <div className="dots dots--right"></div>

          <h2 className="heading2 accent">CUSTOMER SERVICE</h2>
          <hr></hr>
          <h3 className="heading3">
            Building and maintaining relationships with your customers is our
            speciality.{' '}
          </h3>

          <p className="paragraph">
            General enquiries and issues that your current and prospective
            customers face are vital to your client retention and growth.
          </p>

          <p className="paragraph">
            Our customer service contact centre reflects your company ethos at
            every point of contact to ensure a satisfied customer base – our
            team always applies a methodical approach to customer service.{' '}
          </p>

          <button
            className="link link__back-to-top"
            onClick={() => scrollTo(pentRef)}
          >
            Back to top <span className="accent">^</span>
          </button>
        </div>

        <div className="image-container image-container--right">
          <Image
            src="/assets/smiling-telesales.jpg"
            alt="Telemarketer smiling"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="section section--left">
        <div className="card card--left" ref={fiveRef}>
          <div className="dots"></div>
          <h2 className="heading2 accent">DIRECT SELLING</h2>
          <hr></hr>

          <h3 className="heading3">
            Our strategic approach and emphasis on analysis delivers a service
            that sets us apart from our competitors.
          </h3>

          <p className="paragraph">
            Effective communication is a key component in all of our processes,
            with frequent updates, daily statistics, and with constant
            availability to discuss progress in order to ensure results.
          </p>

          <p className="paragraph">
            Our team have experience in dealing with partners from a wide
            variety of industries, having dealt with SME’s through to
            international corporates.{' '}
          </p>

          <p className="paragraph">
            Every campaign Pentaro take on, regardless its size, will receive
            the same level of service to gain the best possible returns. Our
            ambition is to build productive relationships and share success.
          </p>

          <button
            className="link link__back-to-top"
            onClick={() => scrollTo(pentRef)}
          >
            Back to top <span className="accent">^</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Telemarketing;
