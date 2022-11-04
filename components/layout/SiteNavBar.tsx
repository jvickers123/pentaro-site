import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// UI STYLING
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerHeader,
} from '@chakra-ui/react';

// ICONS
import { GiHamburgerMenu } from 'react-icons/gi';

import greenLogo from '../../public/assets/logo-screenshot.png';

const SiteNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="navbar-background navigation__background">
      <div className="nav-bar-main navigation">
        <Link href="/">
          <a className="accent link">
            <div className="logo-container">
              <Image
                src={greenLogo}
                alt="Pentaro logo"
                className="logo"
                height={30}
                width={30}
              />
              <h2 className="pentaro-name pentaro-name__logo">PENTARO</h2>
            </div>
          </a>
        </Link>

        <div className="mobile-navbar navigation__mobile">
          <button onClick={onOpen} aria-label="navigation">
            <GiHamburgerMenu className="accent" />
          </button>
          <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="full">
            <DrawerOverlay />
            <DrawerContent className="">
              <div className="nav-modal">
                <DrawerCloseButton />
                <DrawerHeader>
                  <Link href="/">
                    <h2
                      onClick={onClose}
                      className="pentaro-name pentaro-name__mobile-nav"
                    >
                      PENTARO
                    </h2>
                  </Link>
                </DrawerHeader>

                <nav className="nav-modal__options-container">
                  <Link href="/">
                    <a
                      className="link options nav-modal__options"
                      onClick={onClose}
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/telemarketing">
                    <a
                      className="link options nav-modal__options"
                      onClick={onClose}
                    >
                      Telemarketing
                    </a>
                  </Link>
                  <Link href="/recruitment">
                    <a
                      className="link options nav-modal__options"
                      onClick={onClose}
                    >
                      Recruitment
                    </a>
                  </Link>
                  <Link href="/pentaro-way">
                    <a
                      className="link options nav-modal__options"
                      onClick={onClose}
                    >
                      The Pentaro Way
                    </a>
                  </Link>
                  <Link href="/get-in-touch">
                    <a
                      className="link options nav-modal__options"
                      onClick={onClose}
                    >
                      Get In Touch
                    </a>
                  </Link>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <nav className="desktop-navbar navigation__desktop">
          <Link href="/">
            <a className="link options navigation__item">Home </a>
          </Link>
          <Link href="/telemarketing">
            <a className="link options navigation__item">Telemarketing</a>
          </Link>
          <Link href="/recruitment">
            <a className="link options navigation__item">Recruitment</a>
          </Link>
          <Link href="/pentaro-way">
            <a className="link options navigation__item">The Pentaro Way</a>
          </Link>
          <Link href="/get-in-touch">
            <a className="link options navigation__item">Get In Touch</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteNavBar;
