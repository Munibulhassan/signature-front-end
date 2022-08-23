import React from "react";
import Profile from "../../components/Profile";
import Sidebar from "../../components/sidebar";
import rightarrow from "../../Assets/Group 26.png";
import "./setting.css"
import { Tab, Tabs } from "react-bootstrap";


export default function Setting() {
  return (
    <div className="Row containe">
      <div className="col-lg-2 col-md-4">
        <Sidebar />
      </div>
      <div className="col-lg-10 col-md-8 signature_profile">
        <div className="content">
        <Profile />
        <p className="signatureheading">Settings</p>
        <div className="sign-document">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="sinature_tabs">
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Company">
            <div className="sign-document setting_input">
                  <h1>Basic Information</h1>
                  <div className="signinput">
                    <input type="text" placeholder="Company Name" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      style={{ marginLeft: "20px" }}
                    />
                  </div>
                  <input type="text" placeholder="Redirecting Page" class="redirecting"/>
                </div>
                <div className="settings_page">
                  <h1>Documents Prefences</h1>
                  <div class="row">
                    <div class="col-lg-6">
                    <div className="settings_radio_btn">
                  <div class="form-check">
                    <p>Available signature types</p>
                   </div>
                   <div class="form-check form-check-inline">
                  
                   <span class="enable-btn">
                  <input  type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label class="form-check-label" for="inlineRadio1">Enable</label>
                  </span>  
                  <span class="unable-btn">
                  <input  type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label class="form-check-label" for="inlineRadio2">Unable</label>
                  </span>    
                   </div>
                  </div>
                    </div>
                  <div class="col-lg-6">
                    <div className="settings_radio_btn security-check-boxes">
                  <div class="form-check ">
                    <p>Enable Signature Security Access</p>
                   </div>
                   <div class="form-check form-check-inline">
                 
                   <span class="enable-btn">
                  <input  type="radio" name="inlineRadioOption" id="inlineRadio3" value="option1"/>
                  <label class="form-check-label" for="inlineRadio3">Enable</label>
                  </span>  
                  <span class="unable-btn">
                  <input  type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option2"/>
                  <label class="form-check-label" for="inlineRadio4">Unable</label>
                  </span>    
                   </div>
                  </div>
                  </div> 
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                    <div className="settings_radio_btn">
                  <div class="form-check ">
                    <p>Independent Aundit Trail</p>
                   </div>
                   <div class="form-check form-check-inline">
                   
                  <span class="enable-btn">
                  <input  type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option1"/>
                  <label class="form-check-label" for="inlineRadio5">Enable</label>
                  </span>  
                  <span class="unable-btn">
                  <input  type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option2"/>
                  <label class="form-check-label" for="inlineRadio6">Unable</label>
                  </span>    
                   </div>
                  </div>
                    </div>
                    
                  <div class="col-lg-6">
                  <div class="settings_radio_btn">
                  <div class="form-check">
                  <p>Allow Signature to Download Original Documents</p>
                  </div>
                  {/* <div class="form-check form-check-inline enable-unable-btn"> */}
                  <div class="form-check form-check-inline">

                  <span class="enable-btn">
                  <input  type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option1"/>
                  <label class="form-check-label" for="inlineRadio7">Enable</label>
                  </span>  
                  <span class="unable-btn">
                  <input  type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option2"/>
                  <label class="form-check-label" for="inlineRadio8">Unable</label>
                  </span>    
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
                <div class="save_btn">
                <button type="button" className="btn upgrade">
      Save <img src={rightarrow} />
    </button>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              
            </Tab>
            <Tab eventKey="longer-tab" title="Edit Signature">
              
            </Tab>
          </Tabs>
        </div>
        </div>
      </div>
    </div>
  );
}




                  