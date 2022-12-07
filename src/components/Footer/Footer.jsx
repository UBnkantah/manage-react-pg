import React from 'react'
import FaceBookImg from "../images/icon-facebook.svg"
import InstagramImg from "../images/icon-instagram.svg"
import PinInterest from "../images/icon-pinterest.svg"
import TwitterImg from "../images/icon-twitter.svg"
import YouTubeImg from "../images/icon-youtube.svg"
import Logo from "../images/logo.svg"
import "./Footer.css"

const Footer = () => {

  return (
      <div className='footer'>
        <div className='contents'>
          <img src={Logo} alt="logo" />
          <div className='social-icons'>
            <div><img src={FaceBookImg} alt="facebookImg" /></div>
            <div><img src={YouTubeImg} alt="youtube-img" /></div>
            <div><img src={TwitterImg} alt="twitter-img" /></div>
            <div><img src={PinInterest} alt="pinterest" /></div>
            <div><img src={InstagramImg} alt="instagram-img" /></div>
          </div>
        </div>
        <ul className='contents'>
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
        <ul className='contents'>
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
        <div className='contents'>
          <form>
            <input type="email" name="email"
            placeholder='Enter your Email Address'
            id=""
            className='email'
            />
            <button type="submit" className='button'>Go</button>
          </form>
        </div>
    </div>
  )
}

export default Footer
