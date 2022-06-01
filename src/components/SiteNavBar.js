import React from 'react'
import { Link } from 'react-router-dom'

const SiteNavBar = () => {
  return (
    <div className='nav-bar-main'>
      <Link to='/'>Home</Link>
      <Link to='/pentaroway'>The Pentaro Way</Link>
      <Link to='/contact'>Contact Us</Link>
    </div>
  )
}

export default SiteNavBar