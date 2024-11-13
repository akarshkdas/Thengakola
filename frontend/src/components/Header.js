import React from 'react'
import './Header.css'
import logo from './../assets/home/thengakola_logo.png'

function Header() {
  return (
    <div className='header'>
      <img className = 'logo' src = {logo} alt='logo'/>
      <h1>thengakola.com</h1>
    </div>
  )
}

export default Header
