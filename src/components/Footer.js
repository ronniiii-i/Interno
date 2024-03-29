import logo from "../assets/imgs/Logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex column align-center justify-center">
      <div className="top flex justify-between wrap">
        <div className="column">
          <div className="logo">
            <img src={logo} alt="Interno" />
          </div>
          <p>
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className="socials flex align-center justify-between">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <div className="column">
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/projects">Our Projects</a>
            </li>
            <li>
              <a href="">Our Team</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/projects/kitchen">Kitchan</a>
            </li>
            <li>
              <a href="/projects/living-area">Living Area</a>
            </li>
            <li>
              <a href="/projects/bathroom">Bathroom</a>
            </li>
            <li>
              <a href="/projects/bedroom">Bedroom</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>Contact</h4>
          <p>
            55 East Birchwood Ave.
            <br />
            Brooklyn, New York 11201
          </p>
          <a href="mailto:contact@interno.com">contact@interno.com</a>
          <a href="tel:+(123) 456 - 7890">(123) 456 - 7890</a>
        </div>
      </div>
      <div className="bottom">
        <p>
          Copyright © Interno | Designed by Victorflow Templates
        </p>
      </div>
    </footer>
  );
}

export default Footer;
