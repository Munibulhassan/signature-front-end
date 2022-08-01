import React from 'react'
import Profile from '../components/Profile'
import Sidebar from '../components/sidebar'

export default function Setting() {
  return (
    <div className='Row container' >
    <div className='col-md-4'>

      <Sidebar/>
    </div>
    <div className='col-md-8'>
    <div className="content"></div>
    <Profile/>
    <p className="signatureheading">Settings</p>
          <div className="sign-document">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
    </div>
    </div>
  )
}
