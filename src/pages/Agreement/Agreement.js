import React, { useState } from "react";
import Profile from "../../components/Profile";
import Sidebar from "../../components/sidebar";
import rightarrow from "../../Assets/Group 26.png";
import createdlogo from "../../Assets/pexels-dinielle-de-veyra-4195342.png";
import { Dropdown } from "react-bootstrap";
import folder from "../../Assets/free-folder-icon-1484-thumb.png";
import calculate from "../../Assets/Group 2665.png";
import text from "../../Assets/Group 2666.png";
import upload from "../../Assets/Group 2667.png";
import calculateblue from "../../Assets/Group 2664.png";
import textblue from "../../Assets/Group 2663.png";
import uploadblue from "../../Assets/Group 2662.png";
import "./Agreement.css"

import { Modal } from "react-bootstrap";
export default function Agreement() {
  const [status, setstatus] = useState(false);
  const [tab, settab] = useState(1);
  const [content, setcontent] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [data, setdata] = useState([
    {
      title: "Contract 01",
      status: "Completed",
      datecreated: "22 July 2022",
      createdby: createdlogo,
      signedby: [1, 2, 3, 4, 5],
    },
    {
      title: "Contract 01",
      status: "Completed",
      datecreated: "22 July 2022",
      createdby: createdlogo,
      signedby: [1, 2, 3, 4, 5],
    },
    {
      title: "Contract 01",
      status: "Completed",
      datecreated: "22 July 2022",
      createdby: createdlogo,
      signedby: [1, 2, 3, 4, 5],
    },
    {
      title: "Contract 01",
      status: "Completed",
      datecreated: "22 July 2022",
      createdby: createdlogo,
      signedby: [1, 2, 3, 4, 5],
    },
    {
      title: "Contract 01",
      status: "Completed",
      datecreated: "22 July 2022",
      createdby: createdlogo,
      signedby: [1, 2, 3, 4, 5],
    },
  ]);

  return (
    <>
      <div className="Row containe">
        <div className="col-lg-2 col-md-4">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-8 signature_profile">
          <div className="content">
            <Profile />
            <p className="signatureheading">Agreements</p>
            {status==true?(
            <div className="team-document">

            <div className="team">
              <p>
              
              </p>
            </div>
            <div className="team-menu">
              <button type="button" className="btn upgrade" style={{"width":"max-content"}} onClick={()=>setstatus(!status)}>
                View list
                <img src={rightarrow} />
              </button>
            </div>
          </div>
            )
            :null}
            {!status ? (
              <>
                <div className="sign-document">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="agree-options">
                  <div className="distance">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Documents
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>0.5 mi</Dropdown.Item>
                        <Dropdown.Item>1 mi</Dropdown.Item>
                        <Dropdown.Item>2 mi</Dropdown.Item>
                        <Dropdown.Item>5 mi</Dropdown.Item>
                        <Dropdown.Item>10 mi</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="search">
                      <form class="form-inline">
                        <input
                          class="form-control landscape-search mr-sm-2"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </form>
                    </div>
                  </div>

                  <div className="status">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Status: All
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>0.5 mi</Dropdown.Item>
                        <Dropdown.Item>1 mi</Dropdown.Item>
                        <Dropdown.Item>2 mi</Dropdown.Item>
                        <Dropdown.Item>5 mi</Dropdown.Item>
                        <Dropdown.Item>10 mi</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="agree-document">
                <div className ="listing">
                  
                  <p className="result-count" 
                  >1-4 of 8 results</p>
                </div>
                  <div className="agree-menu">
                    <button type="button" className="btn upgrade more-sign">
                      Buy more signs
                      <img src={rightarrow} />
                    </button>
                    <button type="button" className="btn upgrade contract" onClick={()=>setstatus(!status)}>
                      Create Contract
                      <img src={rightarrow} />
                    </button>
                  </div>
                </div>
                {window.innerWidth <= 500 ? (
                  <div className="agreetable">
                    <table>
                      <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Date Created</th>
                        <th>More</th>
                        {/* <th></th>
                      <th></th> */}

                        {/* <th>Created by</th>
                      <th>Signed by</th>
                      <th>Action</th> */}
                      </tr>
                      {data.map((item) => {
                        return (
                          <tr>
                            <td>{item.title}</td>
                            <td>{item.status}</td>
                            <td>{item.datecreated}</td>
                            <td>
                              <i
                                style={{ "font-size": "24px" }}
                                className="fas"
                                onClick={() => {
                                  setcontent(item);
                                  setShow(true);
                                }}
                              >
                                &#xf105;
                              </i>
                            </td>
                          </tr>
                        );
                      })}
                    </table>
                  </div>
                ) : (
                  <div className="agreement-box">
                    <div className="agreetable">
                      <table>
                        <tr>
                          <th>Title</th>
                          <th>Status</th>
                          <th>Date Created</th>
                          <th>Created by</th>
                          <th>Signed by</th>
                          <th>Action</th>
                        </tr>
                        {data.map((item) => {
                          return (
                            <tr>
                              <td>{item.title}</td>
                              <td>{item.status}</td>
                              <td>{item.datecreated}</td>
                              <td>
                                <img src={item.createdby} /> Chris
                              </td>
                              <td>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                  >
                                    View
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    {item?.signedby.map((value) => {
                                      return (
                                        <Dropdown.Item>{value}</Dropdown.Item>
                                      );
                                    })}
                                  </Dropdown.Menu>
                                </Dropdown>
                              </td>
                              <td>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                  >
                                    View
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item>Rename</Dropdown.Item>
                                    <Dropdown.Item>Move to</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                    <Dropdown.Item>
                                      Change Permissions
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </td>
                            </tr>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                )}

                <div className="agree-document-icon">
                  <p className="agreeheading">Folders</p>
                  <div className="agree-folder">
                    <button
                      type="button"
                      className="btn upgrade"
                      
                    >
                      Create Folder
                      <img src={rightarrow} />
                    </button>
                  </div>
                </div>
                <div className="sign-document">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="upload">
                  <div className="folder-container">
                    <div className="folder">
                      <img src={folder} />
                    </div>
                    <p>Company</p>
                  </div>
                  <div className="folder-container">
                    <div className="folder">
                      <img src={folder} />
                    </div>
                    <p>My Doc</p>
                  </div>
                  <div className="folder-container">
                    <div className="folder">
                      <img src={folder} />
                    </div>
                    <p>Exe</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="sign">
                {tab == 1 ? (
                  <div className="sign-menu agree-m">
                    <h1 className="active-sign-menu agreement-white-title" >Calculate & Text Base</h1>
                    <p className="active-sign-menu">
                      Lorem Ex qui mollit officia aliqua do officia deserunt id
                      aliquip culpa.
                    </p>
                    <img src={calculateblue} />
                  </div>
                ) : (
                  <div className="sign-menu agree-m" onClick={() => settab(1)}>
                    <h1 className="agreement-white-title">Calculate & Text Base</h1>
                    <p>
                      Lorem Ex qui mollit officia aliqua do officia deserunt id
                      aliquip culpa.
                    </p>
                    <img src={calculate} />
                  </div>
                )}
                {tab == 2 ? (
                  <div className="sign-menu agree-m">
                    <h1 className="active-sign-menu agreement-white-title">Text Base Argument</h1>
                    <p className="active-sign-menu">
                      Lorem Ex qui mollit officia aliqua do officia deserunt id
                      aliquip culpa.
                    </p>
                    <img src={textblue} />
                  </div>
                ) : (
                  <div className="sign-menu agree-m" onClick={() => settab(2)}>
                    <h1 className="agreement-white-title">Text Base Argument</h1>
                    <p>
                      Lorem Ex qui mollit officia aliqua do officia deserunt id
                      aliquip culpa.
                    </p>
                    <img src={text} />
                  </div>
                )}

                {tab == 3 ? (
                  <div className="sign-menu bulk_sign agree-m">
                    <h1 className="active-sign-menu agreement-white-title">Upload File</h1>
                    <p className="active-sign-menu">
                      Lorem Ex qui mollit officia aliqua do officia deserunt id
                      aliquip culpa.
                    </p>
                    <img src={uploadblue} />
                  </div>
                ) : (
                  <div className="sign-menu agree-m" onClick={() => settab(3)}>
                    <h1 className="agreement-white-title">Upload File</h1>
                    <p>
                      Lorem Ex qui mollit officia aliqua do officia deserunt id
                      aliquip culpa.
                    </p>
                    <img src={upload} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        centered
        size="md"
        className="main-modal"
      >
        <Modal.Header closeButton>
          <p className="modal-title"
          >

          {content?.title}
          </p>
        </Modal.Header>
        <Modal.Body>
        

          <div className="row">
            <div className="col modalcontent" >
              <p>Status: {content?.status}</p>
              <p>Date Created: {content?.datecreated}</p>
              Created By:
              <img src={content?.createdby} />
            </div>
            <div className="col modalcontent">
            Signed By:
              <ul>
                {content?.signedby?.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        
        </Modal.Body>
      </Modal>
    </>
  );
}
