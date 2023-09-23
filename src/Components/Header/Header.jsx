import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <div className='header-home-categories'>
            <div className='header-home'><a>Home</a></div>
            <div className='header-categories'><a>Categories</a></div>
            </div>
        <div className='header-about-contact'>
            <div className='header-about-us'><a>About Us</a></div>
            <div className='header-contact-us'><a>Contact Us</a></div>
        </div>
        <hr className='header-divider'/>
    </div>
  )
}

export default Header