import React, { useState } from "react";
import logo from "../assets/imgs/Logo.svg";
import { BsSearch } from "react-icons/bs";
import { MdClose, MdMenu } from "react-icons/md";

function Nav() {
  const [isActive, setActive] = useState(false);

  const openMenu = () => {
    setActive(!isActive);
  };
  const closeMenu = () => {
    setActive(!isActive);
  };
  return (
    <header>
      <div className="flex align-center justify-between">
        <MdMenu className="burger" onClick={openMenu} />
        <div className="logo">
          <img src={logo} alt="Interno" />
        </div>
        <nav className={isActive ? "open" : null}>
          <MdClose className="close" onClick={closeMenu} />
          <div className="logo">
            <img src={logo} alt="Interno" />
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/projects">Project</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">
                <BsSearch />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
