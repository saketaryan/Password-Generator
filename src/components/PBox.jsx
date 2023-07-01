import React from 'react'
import copy from '../assets/copy.png'

const PBox = (props) => {

    const copyPassword = () => {
        navigator.clipboard.writeText(props.password);
    }


  return (
    <div>
        <h4 className='title text-center'>Password Generator</h4>
        <div className='box flex justify-between'>
            <h3 className='my-auto password'>{props.password}</h3>
             <img onClick={copyPassword} src={copy} alt='copy' className='logo my-auto'/>
        </div>
    </div>
  )
}

export default PBox