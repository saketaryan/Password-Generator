import React from 'react'
import Strength from './Strength'
import arrow from '../assets/arrow.png'

const PasswordGenerator = () => {
  return (
    <div className='box'>
    <div className='flex justify-between my-2'>
        <h5 className='my-auto'>Character Length</h5>
        <h3 className='my-auto counter'>0</h3>
    </div>
     <div className='flex my-10'>
        <input className='w-100 slider mx-auto' type='range' min='0' max='20' id='slider' />
     </div>

    <div className='my-2'>
        <div className='my-1 flex'>
            <input type='checkbox' id='uppercase' />
            <h4 className='ml-2' htmlFor='uppercase'>Include Uppercase Letters</h4>
        </div>
        <div className='my-1 flex'>
            <input type='checkbox' id='lowercase' />
            <h4 className='ml-2' htmlFor='lowercase'>Include Lowercase Letters</h4>
            </div>
        <div className='my-1 flex'>
            <input type='checkbox' id='numbers' />
            <h4 className='ml-2' htmlFor='numbers'>Include Numbers</h4>
        </div>
        <div className='my-1 flex'>
            <input type='checkbox' id='symbols' />
            <h4 className='ml-2' htmlFor='symbols'>Include Symbols</h4>
        </div>
    </div>

    <Strength />

    <div className='mx-auto box generate'>
        <div className='flex justify-center'>
            <div className='my-auto'>GENERATE</div>
            <img src={arrow} alt='arrow' className='relative my-auto'/>
        </div>
    </div>

    </div>
  )
}

export default PasswordGenerator