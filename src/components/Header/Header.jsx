import React from 'react'
import HeaderImg from "../images/illustration-intro.svg"
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='fst-header'>
            <h1>Bring everyone together to build better products.</h1> 
            <p> Manage makes it simple for software teams to plan day-to-day 
                tasks while keeping the larger team goals in view.
            </p>
            <div className="button">
              <button>Get Started</button>
            </div>
            
        </div>
        <div className='sec-header'>
            <img src={HeaderImg} alt="header-img" />
        </div>
    </div>
  )
}

export default Header
