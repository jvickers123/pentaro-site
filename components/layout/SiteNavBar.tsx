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
    <div className="navbar-background">
      <div className="nav-bar-main">
        <Link href="/">
          <a className="accent ">
            <div className="logo-container">
              <Image
                src={greenLogo}
                alt="Pentaro logo"
                height={30}
                width={30}
              />
              <h2 className="pentaro-name">PENTARO</h2>
            </div>
          </a>
        </Link>

        <div className="mobile-navbar">
          <button onClick={onOpen}>
            <GiHamburgerMenu className="accent" />
          </button>
          <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="full">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Link href="/">
                  <h2 onClick={onClose} className="pentaro-name dropdown-title">
                    PENTARO
                  </h2>
                </Link>
              </DrawerHeader>

              <div className="dropdown-options-container">
                <Link className="options" onClick={onClose} href="/">
                  Home
                </Link>
                <Link
                  className="options"
                  onClick={onClose}
                  href="/telemarketing"
                >
                  Telemarketing
                </Link>
                <Link className="options" onClick={onClose} href="/recruitment">
                  Recruitment
                </Link>
                <Link className="options" onClick={onClose} href="/pentaro-way">
                  The Pentaro Way
                </Link>
                <Link
                  className="options"
                  onClick={onClose}
                  href="/get-in-touch"
                >
                  Get In Touch
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="desktop-navbar">
          <Link className="options" href="/">
            <a onClick={onClose}>Home </a>
          </Link>
          <Link className="options" href="/telemarketing">
            Telemarketing
          </Link>
          <Link className="options" href="/recruitment">
            Recruitment
          </Link>
          <Link className="options" href="/pentaro-way">
            The Pentaro Way
          </Link>
          <Link className="options" href="/get-in-touch">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteNavBar;
