import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Bespoke telemarketing and recruitment solutions, tailored to your business. A modern, data-driven business development agency, specialising in B2B telesales. Based in the UK."
        />
        <title>Pentaro: Telemarketing and Recruitment</title>
      </Head>

      <section className="hero-container ">
        <div className="hero-container__image hero-container__image--home">
          <Image
            src="/assets/home-background.jpg"
            alt="telemarketers at work"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="hero-container__blue-background"></div>
        </div>

        <div className="hero-container__content--home">
          <h1 className="accent heading1 pentaro-name">PENTARO</h1>
          <h2 className="heading2 heading2__hero heading2__hero--home">
            Bespoke telemarketing and recruitment solutions
          </h2>
          <Link href="/getintouch">
            <a className="link">
              Get in touch <span className="accent">&gt;&gt;</span>
            </a>
          </Link>
        </div>
      </section>

      <section className="section section--left">
        <div className="card card--left">
          <div className="dots "></div>

          <h2 className="accent heading2">WHY US?</h2>
          <h3 className="heading3">
            Pentaro prioritises clear communication to ensure maximum growth
            potential for all our partners.
          </h3>
          <p className="paragraph">
            We are a modern, data-driven, results-focused business development
            agency, ready to help your business boost its bottom line.
          </p>

          <Link href="/pentaroway">
            <a className="link">
              The Pentaro Way <span className="accent">&gt;&gt;</span>
            </a>
          </Link>
        </div>
      </section>

      <section className="section section--middle">
        <div className="left-content-container">
          <div className="image-container image-container--left">
            <Image
              src="/assets/handshake2.jpg"
              alt="Two people shaking hands"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="card card--middle">
          <div className="dots dots--right"></div>

          <h2 className="accent heading2">TELEMARKETING</h2>
          <h3 className="heading3">
            Telemarketing at Pentaro prioritises quality, clarity, and
            consistency, producing direct connections and opportunities with
            your target audience.
          </h3>
          <p className="paragraph">
            Our strategic approach and emphasis on analysis delivers a service
            that sets us apart from our competitors.
          </p>

          <Link href="/telemarketing">
            <a className="link">
              View our telemarketing services{' '}
              <span className="accent">&gt;&gt;</span>
            </a>
          </Link>
        </div>
      </section>

      <section className="section section--right">
        <div className="card card--right">
          <div className="dots dots--right"></div>

          <h2 className="accent heading2">RECRUITMENT</h2>
          <h3 className="heading3">
            Pentaro utilises modern research and data analysis techniques to
            acquire the best selection of viable candidates.
          </h3>

          <p className="paragraph">
            We will gain key insight into your business’s structure, talent,
            culture, and processes to provide candidates that exceed your
            expectations, and reflect your company values.
          </p>

          <Link href="/recruitment">
            <a className="link">
              View our services <span className="accent">&gt;&gt;</span>
            </a>
          </Link>
        </div>

        <div className="image-container image-container--right">
          <Image
            src="/assets/business-woman.jpg"
            alt="Business woman on computer"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
