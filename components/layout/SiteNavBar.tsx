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

// IMAGES
// import greenPentText from '../public/assets/pent-text-green.jpg';
// import whitePentText from '../public/assets/pent-text-white.png';
import greenLogo from '../../src/assets/logo-screenshot.png';

const SiteNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="navbar-background navigation__background">
      <div className="nav-bar-main navigation">
        <Link href="/">
          <a className="accent ">
            <div className="logo-container">
              <Image
                src={greenLogo}
                alt="Pentaro logo"
                className="logo"
                height={30}
                width={30}
              />
              <h2 className="pentaro-name">PENTARO</h2>
            </div>
          </a>
        </Link>

        <div className="mobile-navbar navigation__mobile">
          <button onClick={onOpen}>
            <GiHamburgerMenu className="accent" />
          </button>
          <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="full">
            <DrawerOverlay />
            <DrawerContent className="">
              <DrawerCloseButton />
              <DrawerHeader>
                <Link href="/">
                  <h2 onClick={onClose} className="pentaro-name dropdown-title">
                    PENTARO
                  </h2>
                </Link>
              </DrawerHeader>

              <div className="dropdown-options-container nav-modal">
                <Link
                  className="options nav-modal__options"
                  onClick={onClose}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="options nav-modal__options"
                  onClick={onClose}
                  href="/telemarketing"
                >
                  Telemarketing
                </Link>
                <Link
                  className="options nav-modal__options"
                  onClick={onClose}
                  href="/recruitment"
                >
                  Recruitment
                </Link>
                <Link
                  className="options nav-modal__options"
                  onClick={onClose}
                  href="/pentaro-way"
                >
                  The Pentaro Way
                </Link>
                <Link
                  className="options nav-modal__options"
                  onClick={onClose}
                  href="/get-in-touch"
                >
                  Get In Touch
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="desktop-navbar navigation__desktop">
          <Link href="/">
            <a className="options navigation__item">Home </a>
          </Link>
          <Link href="/telemarketing">
            <a className="options navigation__item">Telemarketing</a>
          </Link>
          <Link href="/recruitment">
            <a className="options navigation__item">Recruitment</a>
          </Link>
          <Link href="/pentaro-way">
            <a className="options navigation__item">The Pentaro Way</a>
          </Link>
          <Link href="/get-in-touch">
            <a className="options navigation__item">Get In Touch</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteNavBar;
