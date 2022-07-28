import React from 'react'
import Sidebar from '../components/sidebar'

export default function Team() {
  return (
    <div className='Row container'>
    <div className='col-md-2'>

      <Sidebar/>
    </div>
    <div className='col-md-10'>
    <div className="content"></div>
    </div>
    </div>
  )
}
