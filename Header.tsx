import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className="header">
  <a href="#default" className="logo">Basma Khan</a>
  <div className="header-right">
    <a className="active" href="#home">Home</a>
    <Link href="#contact">Contact</Link>
    <a href="#about">About</a>
  </div>
</div>
      
    </div>
  )
}

export default Header
