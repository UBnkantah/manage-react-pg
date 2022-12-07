import React, {useRef} from 'react'
import Logo from "../images/logo.svg"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

  const NavRef = useRef();

  const showNav = () => {
    NavRef.current.classList.toggle("responsive_navbar");
  }

  return (
    <div className='navbar'>
      <img src={Logo} alt="logo" />
      <nav ref={NavRef}>
        <Link href='/'>Pricing</Link>
        <Link href='/'>Product</Link>
        <Link href='/'>About Us</Link>
        <Link href='/'>Careers</Link>
        <Link href='/'>Community</Link>
        <button className='get_btn'>
          Get Started
        </button>
        <button className="navbar_btn navbar_close" onClick={showNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="navbar_btn" onClick={showNav}>
        <FaBars />
      </button>
    </div>
  )
}

export default NavBar
