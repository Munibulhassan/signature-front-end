import React from "react";
import Profile from "../components/Profile";
import Sidebar from "../components/sidebar";
import rightarrow from "../Assets/Group 26.png";
import { Dropdown } from "react-bootstrap";
import folder from "../Assets/free-folder-icon-1484-thumb.png"
export default function Agreement() {
  return (
    <div className="Row container">
      <div className="col-md-4">
        <Sidebar />
      </div>
      <div className="col-md-8">
        <div className="content">
          <Profile />

          <p className="signatureheading">Agreements</p>
          <div className="sign-document">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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



            <div className="agree-document">
            <p className="signatureheading">Folders</p>
<div className="agree-menu">
 <button type="button" className="btn upgrade ">
                Create Folder
                <img src={rightarrow} />
              </button>
            
 </div>
            </div>
            
          
          <div className="sign-document">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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

        </div>
      </div>
    </div>
  );
}
