import React from 'react'
import Sidebar from '../components/sidebar'

export default function Setting() {
  return (
    <div className='Row container' >
    <div className='col-md-2'>

      <Sidebar/>
    </div>
    <div className='col-md-10'>
    <div className="content"></div>

    </div>
    </div>
  )
}
