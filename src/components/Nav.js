import React from 'react'
import logo from '../assets/imgs/Logo.svg'
import { BsSearch } from 'react-icons/bs'
import { MdClose, MdMenu } from 'react-icons/md'

function Nav() {
  return (
    <header>
      <div className='flex align-center justify-between'>
        <MdMenu className='burger' />
        <div className="logo">
          <img src={logo} alt="Interno" />
        </div>
        <nav>
          <MdClose className='close' />
          <div className="logo">
            <img src={logo} alt="Interno" />
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
            <li><a href=""><BsSearch /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav