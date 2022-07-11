import React from 'react'
import { Link } from 'react-router-dom'

// UI STYLING
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerHeader
} from '@chakra-ui/react'

// ICONS
import { GiHamburgerMenu } from 'react-icons/gi'

// IMAGES
import greenPentText from '../assets/pent-text-green.jpg'
import whitePentText from '../assets/pent-text-white.png'
import greenLogo from '../assets/logo-screenshot.png'

const SiteNavBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='nav-bar-main'>
      <Link to='/' className='accent'>
        <div className='logo-container'>
          <img src={greenLogo} alt='Pentaro logo' />
          <h2 className='pentaro-name'>PENTARO</h2>
        </div>
        
        </Link>

      <div className='mobile-navbar'>

        <button onClick={onOpen}>
        <GiHamburgerMenu className='accent'/>
        </button>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          size='full'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
              <DrawerHeader><Link to='/' onClick={onClose}><img src={whitePentText} alt='Pentaro' /></Link></DrawerHeader>

              <div className="dropdown-options-container">
                
                <Link className='options' onClick={onClose} to='/telemarketing'>Telemarketing</Link>
                <Link className='options' onClick={onClose} to='/recruitment'>Recruitment</Link>
                <Link className='options' onClick={onClose} to='/pentaroway'>The Pentaro Way</Link>
                <Link className='options' onClick={onClose} to='/getintouch'>Get In Touch</Link>
              </div>

              

          </DrawerContent>
        </Drawer>
      </div>

      <div className='desktop-navbar'>
                <Link className='options' to='/telemarketing'>Telemarketing</Link>
                <Link className='options' to='/recruitment'>Recruitment</Link>
                <Link className='options' to='/pentaroway'>The Pentaro Way</Link>
                <Link className='options' to='/getintouch'>Get In Touch</Link>
      </div>

    </div>
  )
}

export default SiteNavBar