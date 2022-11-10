import React, { useState } from "react";
import Profile from "../../components/Profile";
import Sidebar from "../../components/sidebar";
import Subscription from "../../components/Subscription";
import rightarrow from "../../Assets/Group 26.png";
import "./setting.css";
import { Tab, Tabs } from "react-bootstrap";
import { toast } from "react-toastify";
import { passwordupdate, profileupdate } from "../../action/action";

export default function Setting() {
  const [key, setkey] = useState(window.location.hash.slice(1));
  const [first_name, setfirst_name] = useState(
    JSON.parse(localStorage.getItem("user")).first_name
  );

  


  const [email, setemail] = useState(
    JSON.parse(localStorage.getItem("user")).email
  );
  const [password, setpassword] = useState("");
  const [oldpassword, setoldpassword] = useState("");

  const [confirmpassword, setconfirmpassword] = useState("");
  document
    .getElementById("justify-tab-example-tab-home")
    ?.addEventListener("click", () => {
      window.location.href = "/setting/#home";
    });
  document
    .getElementById("justify-tab-example-tab-profile")
    ?.addEventListener("click", () => {
      window.location.href = "/setting/#profile";
    });
  document
    .getElementById("justify-tab-example-tab-longer-tab")
    ?.addEventListener("click", () => {
      window.location.href = "/setting/#longer-tab";
    });
  document
    .getElementById("justify-tab-example-tab-billing")
    ?.addEventListener("click", () => {
      window.location.href = "/setting/#billing";
    });
  const updateprofile = async () => {
    const payload = {
      first_name,
      
      email,
    };
    const res = await profileupdate(payload);

    
    if (res.success) {
      localStorage.setItem("user",JSON.stringify(res.data))
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  const updatepassword = async () => {
    const payload = {
      password:oldpassword,
      newpassword:password,      
      confirmpassword:confirmpassword,
    };
    const res = await passwordupdate(payload);

    
    if (res.success) {
      localStorage.setItem("user",JSON.stringify(res.data))
      setconfirmpassword("")
      setpassword("")
      setoldpassword("")
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="sinature_tabs">
            <Tabs
              defaultActiveKey={key}
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="home" title="Company">
                <div className="sign-document setting_input">
                  <h1>Basic Information</h1>
                  <div className="signinput">
                    <input
                      type="text"
                      placeholder="Company Name"
                      disabled
                      value={
                        JSON.parse(localStorage.getItem("user")).first_name
                      }
                    />
                    <input
                      type="email"
                      disabled
                      value={JSON.parse(localStorage.getItem("user")).email}
                      placeholder="Email Address"
                      style={{ marginLeft: "20px" }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Redirecting Page"
                    class="redirecting"
                  />
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
                            <input
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                            />
                            <label class="form-check-label" for="inlineRadio1">
                              Enable
                            </label>
                          </span>
                          <span class="unable-btn">
                            <input
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <label class="form-check-label" for="inlineRadio2">
                              Unable
                            </label>
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
                            <input
                              type="radio"
                              name="inlineRadioOption"
                              id="inlineRadio3"
                              value="option1"
                            />
                            <label class="form-check-label" for="inlineRadio3">
                              Enable
                            </label>
                          </span>
                          <span class="unable-btn">
                            <input
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio4"
                              value="option2"
                            />
                            <label class="form-check-label" for="inlineRadio4">
                              Unable
                            </label>
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
                            <input
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio5"
                              value="option1"
                            />
                            <label class="form-check-label" for="inlineRadio5">
                              Enable
                            </label>
                          </span>
                          <span class="unable-btn">
                            <input
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio6"
                              value="option2"
                            />
                            <label class="form-check-label" for="inlineRadio6">
                              Unable
                            </label>
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
                            <input
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio7"
                              value="option1"
                            />
                            <label class="form-check-label" for="inlineRadio7">
                              Enable
                            </label>
                          </span>
                          <span class="unable-btn">
                            <input
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio8"
                              value="option2"
                            />
                            <label class="form-check-label" for="inlineRadio8">
                              Unable
                            </label>
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
              <Tab
                eventKey="profile"
                title="Profile"
                onClick={() => {
                  setkey("profile");
                }}
              >
                <div>
                  <h1>Personal Information</h1>
                  <div>
                    <p className="profileh1">First Name </p>
                    <input
                      type="text"
                      className="profileinput"
                      value={first_name}
                      onChange={(e) => {
                        setfirst_name(e.target.value);
                      }}
                    ></input>
                  </div>
                 
                  <div>
                    <p className="profileh1">Email</p>

                    <input
                      type="text"
                      className="profileinput"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    ></input>
                  </div>
                  <button
                    className="btn upgrade update"
                    onClick={() => {
                      updateprofile();
                    }}
                  >
                    Update Email
                  </button>
                  <div className="password">
                      <p className="profileh1">Old Password </p>

                      <input
                        type="password"
                        className="profileinput"
                        style={{ width: "44%" }}
                        placeholder="old password"
                        value={oldpassword}
                        onChange={(e) => {
                          setoldpassword(e.target.value);
                        }}
                      ></input>
                    </div>

                  <div style={{ display: "flex" }}>
                    <div className="password">
                      <p className="profileh1">New Password </p>

                      <input
                        type="password"
                        className="profileinput"
                        style={{ width: "100%" }}
                        placeholder="new password"
                        value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="password" style={{ marginLeft: "20px" }}>
                      <p className="profileh1">Repeat New Password </p>

                      <input
                        type="password"
                        placeholder="confirm password"
                        className="profileinput"
                        style={{ width: "100%" }}
                        value={confirmpassword}
                        onChange={(e) => {
                          setconfirmpassword(e.target.value);
                        }}
                      ></input>
                    </div>
                  </div>
                  <button className="btn upgrade update" onClick={()=>{updatepassword()}}>
                    Update Password
                  </button>
                </div>
              </Tab>
              <Tab
                eventKey="longer-tab"
                title="Edit Signature"
                onClick={() => {
                  setkey("longer-tab");
                }}
              ></Tab>
              <Tab
                eventKey="billing"
                title="Billing"
                onClick={() => {
                  setkey("billing");
                }}
              >
                <div className="sign-document setting_input">
                  <Subscription />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
