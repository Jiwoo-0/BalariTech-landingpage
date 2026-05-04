import React from 'react'
import Navbar from '../components/Navbar'
import Service_modal from '../components/Service_modal'
import Services from './sections/Services'

const Testing = () => {
  return (
    <div className='align-middle'>
        <Navbar />
        <Service_modal/>
        <Services />
    </div>
  )
}

export default Testing
