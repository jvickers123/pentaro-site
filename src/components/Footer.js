import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='real-footer-container'>

      <div className='footer-links-container'>
        <Link to='/'>Pentaro</Link>
        <Link to='/recruitment'>Recruitment</Link>
        <Link to='/telemarketing'>Telemarketing</Link>
        <Link to='/pentaroway'>The Pentaro Way</Link>
        <Link to='/getintouch'>Contact Us</Link>
      </div>

      <p>&copy; Pentaro Ltd. 2022</p>
      <p>Website provided by <a href='www.jonnyvickers.co.uk' target='_blank'>Jonny Vickers</a></p>


    </div>
  )
}

export default Footer