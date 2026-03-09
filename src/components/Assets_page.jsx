import React from 'react'
import vl_logo from '../assets/Vertical-Lockup.svg'
import hl_logo from '../assets/logo.svg'


const Assets_page = () => {
  return (
    <div>
      <h1>Assets</h1>
      <img src={vl_logo} alt="vertical lockup" className='w-96'/>
      <img src={hl_logo} alt="horizontal lockup" className='w-96'/>
    </div>
  )
}

export default Assets_page
