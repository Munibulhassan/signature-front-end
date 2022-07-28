import React from 'react'
import rightarrow from "../Assets/Group 26.png";
import profile from "../Assets/profile.jfif";
import notification from "../Assets/Group 25911.png";
import updationnotification from "../Assets/Group 2591.png";
export default function Profile() {
  return (
    <div className="profile">
    <button type="button" className="btn upgrade">
      Upgrade <img src={rightarrow} />
    </button>
    <img className="profile-img" src={profile} />
    <img className="notify" src={updationnotification} />
  </div>
  )
}
