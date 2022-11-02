import React, { useEffect } from 'react';
import Head from 'next/head';

import Image from 'next/image';
// IMAGES
import meeting from '../src/assets/happy-meeting.jpg';

const PentaroWay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="We have modernised and streamlined outsourced business development with sustainability and growth at the core of our process."
        />
        <title>The Pentaro Way | Pentaro: Telemarketing and Recruitment</title>
      </Head>

      <section className="hero-container ">
        <div className="hero pent-way-background hero-container__image hero-container__image--pentaro-way">
          <div className="blue-background hero-container__blue-background"></div>
        </div>

        <div className="section-flex-container hero-container__content">
          <h1 className="accent heading1  heading1__hero">THE PENTARO WAY</h1>
          <h2 className="heading2 heading2__hero">
            We have modernised and streamlined outsourced business development
            with sustainability and growth at the core of our process.
          </h2>
        </div>
      </section>

      <section className="section section--middle" id="pentaro-way-box">
        <div className="left-content-container">
          <div className="image-container image-container--left">
            <Image src={meeting} alt="business meeting" />
          </div>
        </div>

        <div className="card card--middle">
          <div className="dotted-line offset-left-top"></div>
          <h2 className="accent">THE PENTARO WAY</h2>
          {/* <hr className='line-break'></hr> */}
          <h3 className="heading3">Changing perceptions.</h3>
          <p className="paragraph">
            As the economy changes, businesses are constantly presented with
            fresh opportunities and challenges.
          </p>

          <p className="paragraph">
            At Pentaro, we follow 5 core values to ensure we can help you to
            react and adapt in the best way possible.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <h2 className="accent heading2">OUR VALUES</h2>

        <hr className="line-break"></hr>

        <div className="values-container">
          <div className="values-container__number-container">
            <h2 className="heading-number accent">1</h2>
            <h3 className="heading3 heading3--values">Relationships</h3>
          </div>
          <p className="paragraph paragraph--values">
            Each of our partners benefit from having their own dedicated
            relationship manager. They will adopt and share your vision to help
            create a tailored growth strategy, unique to you. They provide
            frequent performance updates to track progress. Their role is to
            help our business become an extension of yours.
          </p>
        </div>

        <hr className="line-break"></hr>

        <div className="values-container">
          <div className="values-container__number-container">
            <h2 className="heading-number accent">2</h2>
            <h3 className="heading3 heading3--values">People</h3>
          </div>
          <p className="paragraph paragraph--values">
            At Pentaro, our culture puts our people at the heart of our process.
            Creating a working environment where success is shared, where
            professionalism is paramount, and where results are repeated.
          </p>
        </div>

        <hr className="line-break"></hr>

        <div className="values-container">
          <div className="values-container__number-container">
            <h2 className="heading-number accent">3</h2>
            <h3 className="heading3 heading3--values">Analytics</h3>
          </div>
          <p className="paragraph paragraph--values">
            Using innovative modern analysis techniques, developed by a
            dedicated team of experts, we provide all of our partners with
            weekly updates on key performance indicators, specific to your
            business. In an increasingly data-driven world, we believe in the
            importance of analysis, and believe our analytics are unlike
            anything else within the industry.
          </p>
        </div>

        <hr className="line-break"></hr>

        <div className="values-container">
          <div className="values-container__number-container">
            <h2 className="heading-number accent">4</h2>
            <h3 className="heading3 heading3--values">Transparency</h3>
          </div>
          <p className="paragraph paragraph--values">
            We are up front about all costs, with no hidden fees and flat fee
            recruitment options, so you can be sure you are getting the best
            service for the best price. Furthermore, we keep recordings of all
            our calls, which can be requested instantaneously for monitoring
            purposes.
          </p>
        </div>

        <hr className="line-break"></hr>

        <div className="values-container">
          <div className="values-container__number-container">
            <h2 className="heading-number accent">5</h2>
            <h3 className="heading3 heading3--values">Ethics</h3>
          </div>
          <p className="paragraph paragraph--values">
            Doing the right thing is often ignored. At Pentaro, we pride
            ourselves on having a clear code of ethics that puts integrity,
            honesty, and standards first.
          </p>
        </div>
      </section>
    </>
  );
};

export default PentaroWay;
