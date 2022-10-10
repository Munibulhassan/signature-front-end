import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap"
import { toast } from "react-toastify";
import { createdocument, fileupload } from "../action/document.action";
import rightarrow from "../Assets/Group 26.png";
import {useNavigate} from "react-router-dom"

const  Uploadfile=()=> {
  const navigate = useNavigate();
  

  const [file, setfile] = useState();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [error, seterror] = useState({
    title: true,
    description: true,
    file: true,
  });

  const uploadfile = async () => {
    if (title.length == 0) {
      console.log(true);
      seterror({
        title: false,
        description: true,
        file: true,
      });
    } else if (description.length == 0) {
      seterror({
        title: true,
        description: false,
        file: true,
      });
    } else if (!file) {
      seterror({
        title: true,
        description: true,
        file: false,
      });
    } else {
      const payload = new FormData();

      payload.append("file", file);
      const res = await fileupload(payload);
      if (res.success) {
        const response = await createdocument({
          file: res.file,
          title,
          description,
        });
        if (response.success) {
          // navigate("/agreement")

          toast.success(response.message);
          window.location.reload() 
        } else {
          toast.error(response.message);
        }
      }
    }
  };
  
  return (
    <>
      <Row>
        <h1>Upload File for the Contracts</h1>
      </Row>
      <Row>
        {/* <input type="file" onChange= {(e)=>{
          setfile(e.target.files[0])
        }}></input> */}
        <div className="sign-document signatureinput">
          <div className="col-md-5">
            {/* <input type="email" placeholder="Email Address of viewer" /> */}
            <input
              className="form-control"
              type="text"
              value={title}
              placeholder="Document Title to identify your document."
              // style={{ marginLeft: "20px" }}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          {!error.title ? <p className="error">Title is missing</p> : null}

          <div className="col-md-10">
            <textarea
              className="form-control"
              rows={6}
              value={description}
              placeholder="Optional Message for the document signer"
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          {!error.description ? (
            <p className="error">Description is missing</p>
          ) : null}
        </div>
        <div className="upload col-md-12">
          <div className="drop col-md-6">
            <button type="button" className="btn upgrade">
              <label for="file-upload">Upload here</label>
              <img src={rightarrow} />
            </button>

            <input
              id="file-upload"
              style={{ display: "none" }}
              type="file"
              onChange={(e) => {
                setfile(e.target.files[0]);
              }}
            />
            <h1> Drop your file here</h1>
          </div>
        </div>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          {!error.file ? <p className="error">File is required</p> : null}
          <button
            className="btn upgrade left"
            onClick={() => {
              uploadfile();
            }}
          >
            Submit
          </button>
        </Col>
        <Col>
        </Col>
      </Row>
    </>
  );
}

export default Uploadfile;
