import React from 'react'
import vl_logo_svg from '../assets/Vertical-Lockup.svg'
import hl_logo_svg from '../assets/logo.svg'
import vl_logo_png from '../assets/Vertical-Lockup.png'

const Assets_page = () => {
  return (
    <div>
      <h1>Assets</h1>
      <div className='flex gap-10'>
        <div>
          <h3>SVG</h3>
          <img src={vl_logo_svg} alt="vertical lockup" className='w-64'/>
          <img src={hl_logo_svg} alt="horizontal lockup" className='w-64'/>
        </div>
        <div className='bg-gray-100'>
          <h3>PNG</h3>
          <img src={vl_logo_png} alt="horizontal lockup" className='w-64'/>
        </div>
      </div>
    </div>
  )
}

export default Assets_page
