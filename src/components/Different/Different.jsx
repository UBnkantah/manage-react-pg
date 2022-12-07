import React from 'react'
import "./Different.css"
import { Data } from '../DifferentDB/DifferentDB'

const Different = () => {
  return (
    <div className='different'>
        <div className='different-div'>
            <h1>What’s different about Manage?</h1>
            <p> Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams. 
            </p>
        </div>
        <div className='different-div'>
            {Data.map((item) => {
                return(
                    <div className='diff-rgt' key={item.id}>
                        <div className='button'>
                            <button>{item.number}</button>
                        </div>
                        <div className='details'>
                            <h4>{item.heading}</h4>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
            })}
            
        </div>
      
    </div>
  )
}

export default Different
