import React from 'react'
import './componentsStyle.css'

export default function DisplayDate() {
  return (
    <div className='display'>
        <div className='display_section'>
            <p className='display_section_data'>--</p>
            <p className='display_section_type'>years</p>
        </div>
        <div className='display_section'>
            <p className='display_section_data'>--</p>
            <p className='display_section_type'>months</p>
        </div>
        <div className='display_section'>
            <p className='display_section_data'>--</p>
            <p className='display_section_type'>days</p>
        </div>
    </div>
  )
}
