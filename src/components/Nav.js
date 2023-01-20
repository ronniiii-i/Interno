import React from 'react'
import logo from '../assets/imgs/Logo.svg'

function Nav() {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="Interno" />
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Conntact</a></li>
            <li><a href=""></a></li>
        </ul>
    </nav>
  )
}

export default Nav