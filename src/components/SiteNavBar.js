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
import { TbPentagon } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'

const SiteNavBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='nav-bar-main'>
      <Link to='/'><TbPentagon /></Link>

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
            <DrawerHeader><h2 className='dropdown-heading'>Pentaro</h2></DrawerHeader>

            <div className="dropdown-options-container">
              

              <Link className='options' onClick={onClose} to='/recruitment'>Recruitment</Link>
              <Link className='options' onClick={onClose} to='/telemarketing'>Telemarketing</Link>
              <Link className='options' onClick={onClose} to='/pentaroway'>The Pentaro Way</Link>
              <Link className='options' onClick={onClose} to='/getintouch'>Get In Touch</Link>
            </div>

            

        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default SiteNavBar