import React from 'react'

const Strength = (props) => {
  return (
    <div className='flex strength'>
        <div className='w-100'>
        <div className='flex justify-between box bg-dark'>
            <h4 className='my-auto strength'>STRENGTH</h4>
            <div className='flex justify-between'>
                <div className={`box-st ${props.strength>=1&&'selected'}`}></div>
                <div className={`box-st ${props.strength>=2&&'selected'}`}></div>
                <div className={`box-st ${props.strength>=3&&'selected'}`}></div>
                <div className={`box-st ${props.strength>=4&&'selected'}`}></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Strength