import { useState } from 'react'
import PasswordGenerator from './components/PasswordGenerator'
import PBox from './components/PBox'


function App() {

  return (
    <div className='flex'>
      <div className='w-30 mx-auto'>
     <PBox />
     <PasswordGenerator />
     </div>
    </div>
  )
}

export default App
