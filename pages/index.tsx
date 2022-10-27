import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Helmet } from 'react-helmet';

// IMAGES
import handshake from '../src/assets/happy-handshake.jpg';
import businessWoman from '../src/assets/business-woman.jpg';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Bespoke telemarketing and recruitment solutions for your business."
        />
        <title>Pentaro: Telemarketing and Recruitment</title>
      </Helmet>

      <section className="hero-container ">
        <div className="hero home-background hero-container__image hero-container__image--home">
          <div className="blue-background hero-container__blue-background"></div>
        </div>

        <div className="home-flex-container hero-container__content--home">
          <h1 className="accent home-heading heading1 pentaro-name">PENTARO</h1>
          <h2 className="home-h2 heading2 heading2__hero--home">
            Bespoke telemarketing and recruitment solutions
          </h2>
          <Link href="/getintouch">
            <a className="link link--hero">
              Get in touch <span className="accent">&gt;&gt;</span>
            </a>
          </Link>
        </div>
      </section>

      <section className="section section--left">
        <div className="card card--left">
          <div className="dotted-line offset-left-top"></div>

          <h2 className="accent">WHY US?</h2>
          <h3>
            Pentaro prioritises clear communication to ensure maximum growth
            potential for all our partners.
          </h3>
          <p>
            We are a modern, data-driven, results-focused business development
            agency, ready to help your business boost its bottom line.
          </p>

          <Link href="/pentaroway">
            <p>
              The Pentaro Way <span className="accent">&gt;&gt;</span>
            </p>
          </Link>
        </div>
      </section>

      <section className="section section--middle">
        <div className="left-content-container">
          <div className="image-container image-container--left">
            <Image src={handshake} alt="Two people shaking hands" />
          </div>
        </div>

        <div className="card card--middle">
          <div className="dotted-line offset-left-top"></div>

          <h2 className="accent">TELEMARKETING</h2>
          <h3>
            Telemarketing at Pentaro prioritises quality, clarity, and
            consistency, producing direct connections and opportunities with
            your target audience.
          </h3>
          <p>
            Our strategic approach and emphasis on analysis delivers a service
            that sets us apart from our competitors.
          </p>

          <Link href="/telemarketing">
            <p>
              View our services <span className="accent">&gt;&gt;</span>
            </p>
          </Link>
        </div>
      </section>

      <section className="section section--right">
        <div className="card card--right">
          <div className="dotted-line offset-left-top"></div>

          <h2 className="accent">RECRUITMENT</h2>
          <h3>
            Pentaro utilises modern research and data analysis techniques to
            acquire the best selection of viable candidates.
          </h3>

          <p>
            We will gain key insight into your business’s structure, talent,
            culture, and processes to provide candidates that exceed your
            expectations, and reflect your company values.
          </p>

          <Link href="/recruitment">
            <p>
              View our services <span className="accent">&gt;&gt;</span>
            </p>
          </Link>
        </div>

        <div className="image-container image-container--right">
          <Image src={businessWoman} alt="Business woman on computer" />
        </div>
      </section>
    </>
  );
};

export default Home;
