import React from "react";
import Sidebar from "../../components/sidebar";
import rightarrow from "../../Assets/Group 26.png";
import team from "../../Assets/V3.png";
import addteam from "../../Assets/addteam.PNG";
import Profile from "../../components/Profile";
import "./team.css"

export default function Team() {
  return (
    <div className="Row container">
      <div className="col-md-4">
        <Sidebar />
      </div>
      <div className="col-md-8">
        <div className="content">
    <Profile/>

          <p className="signatureheading">Team</p>
          <div className="agree-document">
            <div className="sign-document team">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                quisquam ratione, consequuntur eaque magni ipsum odio temporibus
                aliquam qui repellat est labore ea nulla atque. Totam adipisci
                molestias omnis possimus!
              </p>
            </div>
            <div className="agree-menu">
              <button type="button" className="btn upgrade ">
                Add Team Member
                <img src={rightarrow} />
              </button>
            </div>
          </div>
          <div className="upload">
            <div className="teamcart">
              <div className="cartcontent">
                <img src={team} />
                <p>Team Technado</p>
              </div>
            </div>
            <div className="teamcart">
              <div className="cartcontent">
                <img src={addteam} />
                <p>Add Teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
