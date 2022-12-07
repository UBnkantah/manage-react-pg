import React from 'react'
import "./Different.css"
import { Data } from '../DifferentDB/DifferentDB'

const Different = () => {
  return (
    <div className='different'>
        <div className='different-left'>
            <h1>What’s different about Manage?</h1>
            <p> Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams. 
            </p>
        </div>
        <div className='different-rgt'>
            <div className='diff-rgt-details'>
                <div>
                    <button>01</button>
                </div>
                <div>
                    <h4>What’s different about Manage?</h4>
                    <p>Manage provides all the functionality your team needs, without 
                        the complexity. Our software is tailor-made for modern digital 
                        product teams. 
                    </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Different
