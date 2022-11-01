import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';

// IMAGES
import handshake from '../src/assets/business-deal.jpg';
import handshake2 from '../src/assets/handshake2.jpg';

const Recruitment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Pentaro utilises modern research and data analysis techniques to acquire the best selection of viable candidates."
        />
        <title>Recruitment | Pentaro: Telemarketing and Recruitment</title>
      </Head>
      <section className="hero-container">
        <div className="hero recruitment-background hero-container__image hero-container__image--recruitment">
          <div className="blue-background hero-container__blue-background"></div>
        </div>

        <div className="section-flex-container hero-container__content">
          <h1 className="accent heading1  heading1__hero">RECRUITMENT</h1>
          <h2 className="heading2 heading2__hero">
            Pentaro utilises modern research and data analysis techniques to
            acquire the best selection of viable candidates.
          </h2>
        </div>
      </section>

      <section className="section section--left">
        <div className="card card--left">
          <div className="dotted-line offset-left-top"></div>

          <h2 className="accent heading2">BESPOKE RECRUITMENT SOLUTIONS</h2>
          <hr></hr>
          <h3 className="heading3">
            Pentaro utilises modern research and data analysis techniques to
            acquire the best selection of viable candidates.
          </h3>

          <p className="paragraph">
            Our experienced team will learn and understand your business and the
            role. Every candidate must pass our rigorous selection and screening
            process, finding the right candidates for you
          </p>
        </div>
      </section>

      <div className="section section--middle">
        <div className="left-content-container">
          <div className="image-container image-container--left">
            <Image
              src={handshake}
              alt="Shaking hands in a meeting"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="card card-content--middle">
          <div className="dotted-line offset-left-top"></div>

          <h2 className="accent">PARTNERSHIP</h2>

          <hr></hr>

          <h3 className="heading3">
            Placing the best talent comes from working in a partnership.
          </h3>
          <p className="paragraph">
            We will gain key insight into your business’s structure, talent,
            culture, and processes to provide candidates that exceed your
            expectations, and reflect your company values.
          </p>
        </div>
      </div>

      <div className="section section--right">
        <div className="card card--right">
          <div className="dotted-line offset-left-top"></div>

          <h2 className="accent">EXPERIENCE</h2>
          <hr></hr>
          <h3 className="heading3">
            Our team’s key experience lies in filling roles for growing
            businesses and SME’s.
          </h3>

          <p className="paragraph">
            Reliability and consistency are core values we hold, and require of
            candidates we propose.
          </p>
        </div>

        <div className="image-container image-container--right">
          <Image src={handshake2} alt="Business meeting handshake" />
        </div>
      </div>

      <div className="section section--left">
        <div className="card card--left">
          <div className="dotted-line offset-left-top"></div>

          <h2 className="accent">PERSONNEL</h2>
          <hr></hr>
          <h3 className="heading3">
            Personnel is the most important asset of any business.
          </h3>

          <p className="paragraph">
            We ensure the best possible return on investment, taking the stress
            out of the recruitment process whilst sourcing top talent across a
            spectrum of industries.
          </p>
        </div>
      </div>
    </>
  );
};

export default Recruitment;
