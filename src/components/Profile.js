import React from 'react'
import rightarrow from "../Assets/Group 26.png";
import profile from "../Assets/profile.jfif";
import notification from "../Assets/Group 25911.png";
import updationnotification from "../Assets/Group 2591.png";
import { useNavigate } from 'react-router-dom';
export default function Profile() {
  const navigate = useNavigate()
if(window.innerWidth>500){
    return (
      <div className="profile">
      <button type="button" className="btn upgrade" onClick={()=>{
      navigate("/setting/#billing")
        }}>
        Upgrade <img alt="" src={rightarrow} />
      </button>
      <img alt="" className="notify" src={updationnotification} />
      <img alt="" className="profile-img" src={profile} />
    </div>
    )
  }else{
    return (
      <div className="profile">
      <img alt="" className="notify" src={updationnotification} />
      <img alt="" className="profile-img" src={profile} />
    </div>
    )
  }

}
