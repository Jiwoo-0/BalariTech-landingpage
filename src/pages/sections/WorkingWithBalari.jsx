import React from 'react'
import { Section } from '../../components/Section'
import WwCards from '../../components/WwCards'

const WorkingWithBalari = () => {
  return (
    <Section align='left'>
        <h2 className='text-h2 font-heading font-bold'>Why working with Balari feels different</h2>
        <p>Clear work, thoughtful support, and a process that stays fair from the start</p>

        <div className='grid grid-rows-2 grid-flow-col'>
            <WwCards>Hello</WwCards>
            <WwCards>This</WwCards>
            <WwCards>What</WwCards>
            <WwCards>Winter</WwCards>
        </div>
    </Section>
  )
}

export default WorkingWithBalari
