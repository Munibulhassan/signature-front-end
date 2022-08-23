import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import rightarrow from "../../Assets/Group 26.png";
import selectMe from "../../Assets/Group 2671.png";
import Me from "../../Assets/Group 2676.png";
import meandteam from "../../Assets/Group 2678.png";
import selectmeandteam from "../../Assets/Group 2675.png";
import bulk from "../../Assets/Group 2674.png";
import selectbulk from "../../Assets/Group 2679.png";
import gdrive from "../../Assets/Google_Drive_logo.png";
import onedrive from "../../Assets/OneDrive-Logo.wine.png";
import Profile from "../../components/Profile";
import "./signature.css"

export default function Signature() {
  const [status, setstatus] = useState("1");

  return (
    
      <div className="Row containe">
        <div className="col-lg-2 col-md-4">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-8 signature_profile">
          <div className="content">
            <Profile />
            <p className="signatureheading">Signature</p>
            <div className="sign">
              {status == "1" ? (
                <div className="sign-menu">
                <div className="sign-menu-content only-me">
                  <h1 className="active-sign-menu">Only Me</h1>
                  <p className="active-sign-menu">
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
                </div>
                  <img src={selectMe} />
                </div>
              ) : (
                <div className="sign-menu" onClick={() => setstatus("1")}>
                <div className="sign-menu-content only-me">


                  <h1>Only Me</h1>
                  <p>
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
                  </div>
                  <img src={Me} />
                </div>
              )}
              {status == "2" ? (
                <div className="sign-menu me_team">
                <div className="sign-menu-content me_team">

                  <h1 className="active-sign-menu">Me & Team</h1>
                  <p className="active-sign-menu">
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
</div>
                  <img src={selectmeandteam} />
                </div>
              ) : (
                <div className="sign-menu " onClick={() => setstatus("2")}>
                <div className="sign-menu-content me_team">
                  
                  <h1>Me & Team</h1>
                  <p>
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
                  </div>
                  <img src={meandteam} />
                </div>
              )}

              {status == "3" ? (
                <div className="sign-menu bulk_sign">
                <div className="sign-menu-content bulk_sign">

                  <h1 className="active-sign-menu">Bulk Sign</h1>
                  <p className="active-sign-menu">
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
</div>
                  <img src={selectbulk} />
                </div>
              ) : (
                <div className="sign-menu" onClick={() => setstatus("3")}>
                <div className="sign-menu-content bulk_sign">
                  
                  <h1>Bulk Sign</h1>
                  <p>
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
                  </div>
                  <img src={bulk} />
                </div>
              )}
            </div>

            {status == "1" || status == "2" ? (
              <>
                <div className="sign-document signatureinput">
                  <h1>Prepare your documents from signing</h1>
                  <div className="signinput signatureinput">
                    <input type="email" placeholder="Email Address of viewer" />
                    <input
                      type="text"
                      placeholder="Document Title to identify your document."
                      style={{ marginLeft: "20px" }}
                      
                    />
                  </div>
                  <textarea
                    rows={6}
                    placeholder="Optional Message for the document signer"
                  />
                </div>
                {status == "2" ? (
                  <>
                    <div className="sign-document">
                      <h1>Signer</h1>
                      <div className="signinput">
                        <input type="text" placeholder="Full Name" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          style={{ marginLeft: "20px" }}
                        />
                      </div>
                    </div>
                    <div className="sign-document">
                      <h1>Add other signers</h1>
                      <div className="signinput">
                        <input type="text" placeholder="Full Name" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          style={{ marginLeft: "20px" }}
                        />
                      </div>
                    </div>
                  </>
                ) : null}

                <div className="upload">
                  <div className="drop">

                    <button type="button" className="btn upgrade">
                      Upload here
                      <img src={rightarrow} />
                    </button>
                    <h1> Drop your file here</h1>
                  </div>
                  <div className="gdrive">
                    <img src={gdrive} />
                    <p>Google Drive</p>
                  </div>

                  <div className="onedrive">
                    <img src={onedrive} />
                    <p>One Drive</p>
                  </div>
                </div>
                <div className="fill">
                  <button type="button" className="btn upgrade">
                    Fill & Sign <img src={rightarrow} />
                  </button>
                </div>
              </>
            ) : null}
            {status == "3" ? (
              <>
                <div className="sign-document">
                  <h1>Upload CSV file</h1>
                  <p>
                    Culpa aute cupidatat reprehenderit cillum exercitation id
                    incididunt pariatur voluptate qui non qui mollit.
                  </p>
                </div>
                <div className="upload">
                  <div className="drop">
                    <button type="button" className="btn upgrade">
                      Upload here
                      <img src={rightarrow} />
                    </button>
                    <h1> Drop your file here</h1>
                  </div>
                </div>
                <div className="sign-document">
                  <div className="signinput">
                    <input
                      type="text"
                      placeholder="Document Title to identify your document."
                    />
                  </div>
                  <textarea
                    rows={6}
                    placeholder="Optional Message for the document signer"
                  />
                </div>
                <div className="fill">
                  <button type="button" className="btn upgrade">
                    Select Column <img src={rightarrow} />
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    
  );
}
