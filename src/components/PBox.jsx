import React from 'react'
import copy from '../assets/copy.png'

const PBox = () => {
  return (
    <div>
        <h4 className='title text-center'>Password Generator</h4>
        <div className='box flex justify-between'>
            <h3 className='my-auto password'>PassW!rd</h3>
             <img src={copy} alt='copy' className='logo my-auto'/>
        </div>
    </div>
  )
}

export default PBox