import React from 'react'
import Navbar from './Navbar';
 
function Header() {
  return (
    <div id='main'>
      <Navbar />
      <div className='name'>
        <h1><span>Launch Your App</span> With confidence and creativity </h1>
        <p className='details'>We are glad to have you here</p>
        <a href='/' className='cv-btn'>Download</a>
        </div> 
    </div>
  )
}

export default Header;
