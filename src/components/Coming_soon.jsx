import React from 'react'
import logo from '../assets/logo.svg'

const Coming_soon = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-[#548769] to-[#155146] '>
      <img src={logo} alt="balariTech_logo" className='w-96'/>
      {/* <Logo className="w-96"/> */}
      
      <h1 className='text-white'>IS COMING SOON</h1>
      <p>test</p>
    </div>
  )
}

export default Coming_soon
