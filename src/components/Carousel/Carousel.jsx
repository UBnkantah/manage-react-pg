import React from 'react'
import "./Carousel.css"
import { profile } from '../CarouselDB/CarouselDB'

const Carousel = () => {
  return (
    <div className='carousel'>
        <h1>What they've said</h1>
        <div className='carousel-profile'>
            {profile.map((items) => {
                return(
                    <div className='details' key={items.id}>
                        <img src={items.img} alt="avatar-img" />
                        <h2>{items.name}</h2>
                        <p>“{items.details}”</p>
                    </div>
                )
            })}
            
        </div>
        <div className="button">
            <button>Get Started</button>
        </div>
        
    </div>
  )
}

export default Carousel
