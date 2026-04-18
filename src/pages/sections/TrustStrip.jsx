import React from 'react'
import { Section } from '../../components/Section'
import ts_logo1 from "../../assets/trust-strip/one opti.png"
import ts_logo2 from "../../assets/trust-strip/i am chosen.png"
import ts_logo3 from "../../assets/trust-strip/in full bloom.png"
import ts_logo4 from "../../assets/trust-strip/mobile bay obgyn center.png"

const TrustStrip = () => {
  return (
    <Section bg="secondary" align='center'>
        <h2 className='text-h2 font-heading font-bold'>Businesses our team has supported</h2>
        <p>Whether you need an upgrade, a full build, marketing setup, or content support. We’ll plug in where it helps most.</p>

        <div className='grid grid-cols-4 mt-7'>
            <img src={ts_logo1}/>
            <img src={ts_logo2}/>
            <img src={ts_logo3}/>
            <img src={ts_logo4}/>
        </div>
    </Section>
  )
}

export default TrustStrip
