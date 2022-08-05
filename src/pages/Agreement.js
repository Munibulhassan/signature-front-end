import React, { useState } from "react";
import Profile from "../components/Profile";
import Sidebar from "../components/sidebar";
import rightarrow from "../Assets/Group 26.png";
import createdlogo from "../Assets/pexels-dinielle-de-veyra-4195342.png";
import { Dropdown } from "react-bootstrap";
import folder from "../Assets/free-folder-icon-1484-thumb.png";
import calculate from "../Assets/Group 2665.png";
import text from "../Assets/Group 2666.png";
import upload from "../Assets/Group 2667.png";
import calculateblue from "../Assets/Group 2664.png";
import textblue from "../Assets/Group 2663.png";
import uploadblue from "../Assets/Group 2662.png";

export default function Agreement() {
  const [status, setstaus] = useState(true);
  const [tab,settab] = useState(1)
  return (
    <div className="Row container">
      <div className="col-md-4">
        <Sidebar />
      </div>
      <div className="col-md-8">
        <div className="content">
          <Profile />
          <p className="signatureheading">Agreements</p>
          {status ? (
            <>
              <div className="sign-document">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                        placeholder="Search cuisine"
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
                <p className="result-count">1-4 of 8 results</p>
                <div className="agree-menu">
                  <button type="button" className="btn upgrade ">
                    Buy more signs
                    <img src={rightarrow} />
                  </button>
                  <button type="button" className="btn upgrade contract">
                    Create Contract
                    <img src={rightarrow} />
                  </button>
                </div>
              </div>
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
                  <tr>
                    <td>Contract 01</td>
                    <td>Completed</td>
                    <td>22 July 2022</td>
                    <td>
                      <img src={createdlogo} /> Chris
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>2</Dropdown.Item>
                          <Dropdown.Item>3</Dropdown.Item>
                          <Dropdown.Item>4</Dropdown.Item>
                          <Dropdown.Item>5</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>2</Dropdown.Item>
                          <Dropdown.Item>3</Dropdown.Item>
                          <Dropdown.Item>4</Dropdown.Item>
                          <Dropdown.Item>5</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>Contract 01</td>
                    <td>Completed</td>
                    <td>22 July 2022</td>
                    <td>
                      <img src={createdlogo} /> Chris
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>2</Dropdown.Item>
                          <Dropdown.Item>3</Dropdown.Item>
                          <Dropdown.Item>4</Dropdown.Item>
                          <Dropdown.Item>5</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>2</Dropdown.Item>
                          <Dropdown.Item>3</Dropdown.Item>
                          <Dropdown.Item>4</Dropdown.Item>
                          <Dropdown.Item>5</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>Contract 01</td>
                    <td>Completed</td>
                    <td>22 July 2022</td>
                    <td>
                      <img src={createdlogo} /> Chris
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>2</Dropdown.Item>
                          <Dropdown.Item>3</Dropdown.Item>
                          <Dropdown.Item>4</Dropdown.Item>
                          <Dropdown.Item>5</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>2</Dropdown.Item>
                          <Dropdown.Item>3</Dropdown.Item>
                          <Dropdown.Item>4</Dropdown.Item>
                          <Dropdown.Item>5</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>Contract 01</td>
                    <td>Completed</td>
                    <td>22 July 2022</td>
                    <td>
                      <img src={createdlogo} /> Chris
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>2</Dropdown.Item>
                          <Dropdown.Item>3</Dropdown.Item>
                          <Dropdown.Item>4</Dropdown.Item>
                          <Dropdown.Item>5</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>2</Dropdown.Item>
                          <Dropdown.Item>3</Dropdown.Item>
                          <Dropdown.Item>4</Dropdown.Item>
                          <Dropdown.Item>5</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="agree-document">
                <p className="signatureheading">Folders</p>
                <div className="agree-menu">
                  <button type="button" className="btn upgrade"  onClick={()=>setstaus(false)}>
                    Create Folder
                    <img src={rightarrow} />
                  </button>
                </div>
              </div>
              <div className="sign-document">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
            { tab == 1 ? (
                <div className="sign-menu ">
                  <h1 className="active-sign-menu">Calculate & Text Base</h1>
                  <p className="active-sign-menu">
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
                  <img src={calculateblue} />
                </div>
              ) : (
                <div className="sign-menu" onClick={() => settab(1)}>
                  <h1>Calculate & Text Base</h1>
                  <p>
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
                  <img src={calculate} />
                </div>
              )}
            {tab == 2 ? (
                <div className="sign-menu me_team">
                  <h1 className="active-sign-menu">Text Base Argument</h1>
                  <p className="active-sign-menu">
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
                  <img src={textblue} />
                </div>
              ) : (
                <div className="sign-menu " onClick={() => settab(2)}>
                  <h1>Text Base Argument</h1>
                  <p>
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
                  <img src={text} />
                </div>
              )}

              {tab == 3 ? (
                <div className="sign-menu bulk_sign">
                  <h1 className="active-sign-menu">Upload File</h1>
                  <p className="active-sign-menu">
                    Lorem Ex qui mollit officia aliqua do officia deserunt id
                    aliquip culpa.
                  </p>
                  <img src={uploadblue} />
                </div>
              ) : (
                <div className="sign-menu" onClick={() => settab(3)}>
                  <h1>Upload File</h1>
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
  );
}
