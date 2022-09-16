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
import DynamicField from "../../components/DynamicField";
import formValidation from "../../utils/formValidation";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import { createSignatureAction } from "../../action/signature.action";
import "./signature.css";

export default function Signature() {
  const [status, setstatus] = useState("1");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [signatureUser, setSignatureUser] = useState([{ name: "", email: "" }]);
  const [viewerUser, setViewerUser] = useState([]);
  const [error, setError] = useState(null);
  // const [formValues, setFormValues] = useState([{ file: "", signedby : [], viewedby:[], title:"", description:""}])
  const currentUser = JSON.parse(localStorage.getItem("user"));
  let inputFile = null;

  const signatuerHandleChange = (i, e) => {
    let newFormValues = [...signatureUser];
    if(error && Object.keys(error?.signedby)?.length>0)
    setError({ ...error, signedby: {...error.signedby,[(i+1).toString()]:{...error.signedby[(i+1).toString()],[e.target.name]:""}} });
    newFormValues[i][e.target.name] = e.target.value;
    setSignatureUser(newFormValues);
  };
  
  const viewerHandleChange = (i, e) => {
    let newFormValues = [...viewerUser];
    if(error && Object.keys(error?.viewedby)?.length>0)
    setError({ ...error, viewedby: {...error.viewedby,[(i).toString()]:{...error.viewedby[(i).toString()],[e.target.name]:""}} });
    newFormValues[i][e.target.name] = e.target.value;
    setViewerUser(newFormValues);
  };

  const uploadFileHandler = (e) => {
    e.preventDefault();
    inputFile.click();
    return false;
  };

  const descriptionHandleChange = (e) => {
    setDescription(e.target.value);
  };

  const changeNavHandleChange = (n) => {
    setstatus(n);
    setError(null)
  };

  const titleHandleChange = (e) => { 
    setError({ ...error, title: '' });
    setTitle(e.target.value);
  };

  const fileHandleChange = (e) => {
    setError({ ...error, file: '' });
    setFile(e.target.files[0]);
  };


  const formValidate = () => {
    const options = { abortEarly: false };
    let error = null
    let formData = {
      file: file,
      signedby: [
        { name: currentUser.first_name, email: currentUser.email },
        ...signatureUser,
      ],
      viewedby: viewerUser,
      title: title,
      description: description,
    };
    if(status === "1") {
      formData = {file,title}
      error = Joi.validate(
        formData,
        formValidation.createMeSignatureSchema,
        options
      );
    }else if(status === "2"){
      error = Joi.validate(
        formData,
        formValidation.createSignatureSchema,
        options
      );
    }
    console.log(error)
    const errors = {};
    if (error && error.error)
      for (let item of error?.error?.details) {
        if (item.path[0] == "signedby" || item.path[0] == "viewedby") {
          // if (item.path[0] == "viewedby") {
          // }
          if (errors[item.path[0]]) {
            if (errors[item.path[0]][item.path[1]]) {
              errors[item.path[0]] = {
                ...errors[item.path[0]],
                [item.path[1]]: {
                  ...errors[item.path[0]][item.path[1]],
                  [item.path[2]]: item.message,
                },
              };
            } else {
              errors[item.path[0]][item.path[1]] = {
                [item.path[2]]: item.message,
              };
            }
          } else {
            
            errors[item.path[0]] = {
              [item.path[1]]: { [item.path[2]]: item.message },
            };
          }
        } else {
          console.log(item.path[0])
          errors[item.path[0]] = item.message;
        }
      }
    const errorData = error.error ? errors : null;
    setError(errors || null);
    return errorData;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = formValidate();
    if (errors) return;
    console.log(errors,"lklkl")
    let formData = new FormData();
   
    formData.append("file", file);
    formData.append("signedby", [
      { name: currentUser.first_name, email: currentUser.email },
      ...signatureUser,
    ]);
    formData.append("viewedby", viewerUser);
    formData.append("title", title);
    formData.append("description", description);
    const res = await createSignatureAction(formData);
    if (res.success == true) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  // useEffect(()=>{

  // },[inputFile])
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
              <div className="sign-menu" onClick={()=>changeNavHandleChange("1")}>
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
              <div className="sign-menu " onClick={() => changeNavHandleChange("2")}>
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
              <div className="sign-menu" onClick={() => changeNavHandleChange("3")}>
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
              <div>
                <div className="sign-document signatureinput">
                  <h1>Prepare your documents from signing</h1>
                  <div className="col-md-5">
                    {/* <input type="email" placeholder="Email Address of viewer" /> */}
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Document Title to identify your document."
                      // style={{ marginLeft: "20px" }}
                      onChange={titleHandleChange}
                    />
                  </div>
                  {error?.title && (
                    <small className="text-danger">{error.title}</small>
                  )}
                  <div className="col-md-10">
                    <textarea
                      className="form-control"
                      rows={6}
                      placeholder="Optional Message for the document signer"
                      onChange={descriptionHandleChange}
                    />
                  </div>
                </div>
                {/* ================================================================================================================================================= */}
                {status == "2" ? (
                  <>
                    <div className="sign-document">
                      <h1>Signer</h1>
                      <div className="row">
                        <div class="col-md-5">
                          <input
                            className="form-control"
                            defaultValue={currentUser.first_name}
                            type="text"
                            disabled={true}
                            placeholder="Full Name"
                          />
                        </div>
                        <div class="col-md-5">
                          <input
                            type="email"
                            className="form-control col-md-5"
                            defaultValue={currentUser.email}
                            disabled={true}
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <h1>Add other signers</h1>
                      {/* <div className="signinput">
                        <input type="text" placeholder="Full Name" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          style={{ marginLeft: "20px" }}
                        />
                      <button className="rounded-circle" style={{width:"40px",fontSize:"1.4rem"}}>x</button> */}
                      {/* </div> */}
                      <DynamicField
                        formValues={signatureUser}
                        setFormValues={setSignatureUser}
                        handleChange={signatuerHandleChange}
                        errors={error?.signedby}
                        skipIndex={1}
                        noRemoveField={1}
                      />
                    </div>

                    <div className="sign-document">
                      <h1>Add viewer</h1>
                      <DynamicField
                        formValues={viewerUser}
                        setFormValues={setViewerUser}
                        handleChange={viewerHandleChange}
                        errors={error?.viewedby}
                        skipIndex={0}
                        noRemoveField={0}
                      />
                    </div>
                  </>
                ) : null}

                <div className="upload col-md-12">
                  <div className="drop col-md-6">
                    <button
                      onClick={uploadFileHandler}
                      type="button"
                      className="btn upgrade"
                    >
                      Upload here
                      <img src={rightarrow} />
                    </button>

                    <input
                      ref={(input) => (inputFile = input)}
                      style={{ display: "none" }}
                      type="file"
                      onChange={fileHandleChange}
                    />
                    <h1> Drop your file here</h1>
                    {error?.file && (
                      <small className=" text-danger">{error.file}</small>
                    )}
                  </div>
                  <div className="gdrive col-md-3">
                    <img src={gdrive} />
                    <p>Google Drive</p>
                  </div>

                  <div className="onedrive col-md-3">
                    <img src={onedrive} />
                    <p>One Drive</p>
                  </div>
                </div>
                
                <div className="mt-4 pb-3">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn upgrade"
                  >
                    Fill & Sign <img src={rightarrow} />
                  </button>
                </div>
              </div>
            </>
          ) : null}
          {/* ============================================================================================================================ */}
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
