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
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import userimg from "../../Assets/userimg.jpg";
import {
  createFolderAction,
  getFolderAction,
  folderupdate,
  folderdelete,
} from "../../action/folder.action";
import "./Agreement.css";
import { useEffect } from "react";
import {
  getsignaturedata,
  updatesignature,
  deletesignature,
} from "../../action/signaturedoc.action";
import { getcontractdata, updatecontract } from "../../action/contract.action";
import { imageURL } from "../../action/config";
import Calculations from "../../components/Calculations";
import Textbase from "../../components/Textbase";
import Uploadfile from "../../components/uploadfile";
import { updatedocument } from "../../action/document.action";
import { transform } from "joi-browser";
import { useNavigate } from "react-router-dom";
// import SelectSearch from "react-select-search";

export default function Agreement() {
  const [status, setstatus] = useState(false);
  const [tab, settab] = useState(1);
  const [content, setcontent] = useState();
  const [show, setShow] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const handleClose = () => setShow(false);
  const [id, setid] = useState("");
  const [showFolderupdateModal, setshowFolderupdateModal] = useState(false);
  const [type, settype] = useState("Signature");
  const [docstatus, setdocstatus] = useState("ALL");
  const showFolderModalHandler = () => setShowFolderModal(true);
  const [title, settitle] = useState("");
  const [shownrenamemodal, setshownrenamemodal] = useState(false);
  const [showndeletedocument, setshowndeletedocument] = useState(false);
  const [search, setsearch] = useState("");
  const [page, setpage] = useState(1);
  const navigate = useNavigate();

  const [folderData, setFolderdata] = useState({
    name: "",
  });
  const [selectfoldermodal, setselectfoldermodal] = useState(false);
  const [getFolder, setGetFolder] = useState([]);
  ///update folder
  const updatefolder = async () => {
    const res = await folderupdate(id, folderData);
    if (res.success == true) {
      setFolderdata({ ...folderData, name: "" });
      toast.success(res.message);
      getFolders();
    } else {
      toast.error(res.message);
    }

    setshowFolderupdateModal(false);
  };
  const createFolder = async (e) => {
    e.preventDefault();
    if (!folderData.name) {
      toast.error("Folder name is required");
      setShowFolderModal(false);
    } else {
      const res = await createFolderAction(folderData);

      if (res.success == true) {
        await getFolders();
        setFolderdata({ ...folderData, name: "" });
        toast.success(res.message);
        setShowFolderModal(false);
      } else {
        toast.error(res.message);
      }
    }
  };
  const deleteFolder = async (e) => {
    e.preventDefault();
    const res = await folderdelete(id);

    if (res.success == true) {
      toast.success(res.message);
      getFolders();
    } else {
      toast.error(res.message);
    }
    setshowFolderupdateModal(false);
  };
  const getFolders = async () => {
    const res = await getFolderAction();

    if (res.success == true) {
      setGetFolder(res.data);
    } else {
      toast.error(res.message);
    }
  };
  const selectfolder = async (folderid) => {
    if (type == "Contracts") {
      const res = await updatedocument(id, { folder: folderid });
      if (res.success == true) {
        handleselectfolder();
        toast.success(res.message);
      } else {
        handleselectfolder();

        toast.error(res.message);
      }
    } else if (type == "Signature") {
      const res = await updatesignature(id, { folder: folderid });
      if (res.success == true) {
        handleselectfolder();
        toast.success(res.message);
      } else {
        handleselectfolder();

        toast.error(res.message);
      }
    }
  };
  const getsignature = async () => {
    const res = await getsignaturedata(docstatus, search);
    if (res.success == true) {
      setdata(res.data);
      // toast.success(res.message);
    } else {
      setdata([]);
      // toast.error(res.message);
    }
  };
  const getcontracts = async () => {
    const res = await getcontractdata(docstatus, search);
    if (res.success == true) {
      setdata(res.data);
      // toast.success(res.message);
    } else {
      setdata([]);

      // toast.error(res.message);
    }
  };

  useEffect(() => {
    if (type.toLowerCase() == "signature") {
      getsignature();
    } else {
      getcontracts();
    }
  }, [docstatus, type, search]);
  const [data, setdata] = useState();

  useEffect(() => {
    getFolders();
  }, []);

  const signaturedelete = async (e) => {
    e.preventDefault();
    const res = await deletesignature(id);

    if (res.success) {
      toast.success(res.message);
      getsignature();
    } else {
      toast.error(res.message);
    }
    setid("");
    setshowndeletedocument(false);
  };
  const renamedocument = async (e) => {
    e.preventDefault();

    if (type.toLowerCase() == "signature") {
      const res = await updatesignature(id, { title: title });

      if (res.success == true) {
        getsignature();
        // setdata(res.data);
        settitle("");
        toast.success(res.message);
      } else {
        // setdata([]);

        toast.error(res.message);
        settitle("");
      }
    } else {
      const res = await updatecontract(id, { title: title });
      if (res.success == true) {
        setdata(res.data);
        getcontracts();
        // toast.success(res.message);
      } else {
        setdata([]);

        // toast.error(res.message);
      }
    }
    setshownrenamemodal(false);
  };
  const handleselectfolder = () => {
    setselectfoldermodal(false);
  };

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
            {status == true ? (
              <div className="team-document">
                <div className="team">
                  <p></p>
                </div>
                <div className="team-menu">
                  <button
                    type="button"
                    className="btn upgrade"
                    style={{ width: "max-content" }}
                    onClick={() => setstatus(!status)}
                  >
                    View list
                    <img src={rightarrow} />
                  </button>
                </div>
              </div>
            ) : null}
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
                        {type}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          value="Contracts"
                          onClick={(e) => {
                            settype("Contracts");
                          }}
                        >
                          Contracts
                        </Dropdown.Item>
                        <Dropdown.Item
                          value="Contracts"
                          onClick={(e) => {
                            settype("Signature");
                          }}
                        >
                          Signature
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="search">
                      <form class="form-inline">
                        <input
                          class="form-control landscape-search mr-sm-2"
                          type="text"
                          value={search}
                          onChange={(e) => setsearch(e.target.value)}
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </form>
                    </div>
                  </div>

                  <div className="status">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Status: {docstatus}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            setdocstatus("ALL");
                          }}
                        >
                          ALL
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setdocstatus("DRAFT");
                          }}
                        >
                          DRAFT
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setdocstatus("AWAITING");
                          }}
                        >
                          AWAITING
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setdocstatus("COMPLETED");
                          }}
                        >
                          COMPLETED
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setdocstatus("RECEIVED");
                          }}
                        >
                          RECEIVED
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="agree-document">
                  <div className="listing" style={{ display: "flex" }}>
                    <img
                      src={rightarrow}
                      style={{
                        width: "40px",
                        height: "40px",
                        transform: "rotate(180deg)",
                      }}
                      onClick={() => {
                        if (page - 1 > 0) {
                          setpage(page - 1);
                        }
                      }}
                    />
                    <p className="result-count">
                      {(page - 1) * 10 + 1}-{((page - 1) * 10 + 10) <data?.length ?((page - 1) * 10 + 10):data?.length } of{" "}
                      {data?.length} results
                    </p>
                    <img
                      src={rightarrow}
                      style={{ width: "40px", height: "40px" }}
                      onClick={() => {
                        if(((page-1)*10+10)<data?.length){
                          setpage(page + 1)
                        }
                      }}
                    />
                  </div>
                  <div className="agree-menu">
                    <button type="button" className="btn upgrade more-sign"  onClick={()=>{
      navigate("/setting/#billing")
        }}>
                      Buy more signs
                      <img src={rightarrow} />
                    </button>
                    <button
                      type="button"
                      className="btn upgrade contract"
                      onClick={() => setstatus(!status)}
                    >
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
                      {data?.length == 0 ? (
                        <>No Data Exist</>
                      ) : (
                        data?.map((item) => {
                          return (
                            <tr>
                              <td>{item?.title}</td>
                              <td>{item?.status}</td>
                              <td>{item?.createdAt}</td>
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
                        })
                      )}
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
                        {data?.length == 0 ? (
                          <>No Data Exist</>
                        ) : (
                          data?.map((item) => {
                            return (
                              <tr>
                                <td>{item.title}</td>
                                <td>{item.status}</td>
                                <td>{item.createdAt.split("T")[0]}</td>
                                <td>
                                  <img
                                    src={
                                      item?.owner?.profile != undefined
                                        ? imageURL +
                                          "users/" +
                                          item?.owner?.profile
                                        : userimg
                                    }
                                    className="profile-img"
                                  />{" "}
                                  {item?.owner?.first_name}
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
                                      {item?.signer?.map((value) => {
                                        return (
                                          <Dropdown.Item>
                                            {value.name}
                                          </Dropdown.Item>
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
                                      <Dropdown.Item
                                        onClick={() => {
                                          setid(item._id);
                                          setshownrenamemodal(true);
                                        }}
                                      >
                                        Rename
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={() => {
                                          setid(item._id);
                                          setselectfoldermodal(true);
                                        }}
                                      >
                                        {" "}
                                        Move to
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={() => {
                                          setshowndeletedocument(true);
                                          setid(item._id);
                                        }}
                                      >
                                        Delete
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        Change Permissions
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </td>
                              </tr>
                            );
                          })
                        )}
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
                      onClick={showFolderModalHandler}
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
                <div className="row upload">
                  {getFolder.map((fol) => {
                    return (
                      <div className="folder-container col-md-4">
                        <div
                          className="folder"
                          onClick={(e) => {
                            e.preventDefault();
                            setshowFolderupdateModal(true);
                            setFolderdata({ ...folderData, name: fol.name });
                            setid(fol._id);

                            // showFolderModalHandler;
                          }}
                        >
                          <img src={folder} />
                        </div>
                        <p>{fol.name}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div className="sign">
                  {tab == 1 ? (
                    <div className="sign-menu agree-m">
                      <h1 className="active-sign-menu agreement-white-title">
                        Calculate & Text Base
                      </h1>
                      <p className="active-sign-menu">
                        Lorem Ex qui mollit officia aliqua do officia deserunt
                        id aliquip culpa.
                      </p>
                      <img src={calculateblue} />
                    </div>
                  ) : (
                    <div
                      className="sign-menu agree-m"
                      onClick={() => settab(1)}
                    >
                      <h1 className="agreement-white-title">
                        Calculate & Text Base
                      </h1>
                      <p>
                        Lorem Ex qui mollit officia aliqua do officia deserunt
                        id aliquip culpa.
                      </p>
                      <img src={calculate} />
                    </div>
                  )}
                  {tab == 2 ? (
                    <div className="sign-menu agree-m">
                      <h1 className="active-sign-menu agreement-white-title">
                        Text Base Argument
                      </h1>
                      <p className="active-sign-menu">
                        Lorem Ex qui mollit officia aliqua do officia deserunt
                        id aliquip culpa.
                      </p>
                      <img src={textblue} />
                    </div>
                  ) : (
                    <div
                      className="sign-menu agree-m"
                      onClick={() => settab(2)}
                    >
                      <h1 className="agreement-white-title">
                        Text Base Argument
                      </h1>
                      <p>
                        Lorem Ex qui mollit officia aliqua do officia deserunt
                        id aliquip culpa.
                      </p>
                      <img src={text} />
                    </div>
                  )}

                  {tab == 3 ? (
                    <div className="sign-menu bulk_sign agree-m">
                      <h1 className="active-sign-menu agreement-white-title">
                        Upload File
                      </h1>
                      <p className="active-sign-menu">
                        Lorem Ex qui mollit officia aliqua do officia deserunt
                        id aliquip culpa.
                      </p>
                      <img src={uploadblue} />
                    </div>
                  ) : (
                    <div
                      className="sign-menu agree-m"
                      onClick={() => settab(3)}
                    >
                      <h1 className="agreement-white-title">Upload File</h1>
                      <p>
                        Lorem Ex qui mollit officia aliqua do officia deserunt
                        id aliquip culpa.
                      </p>
                      <img src={upload} />
                    </div>
                  )}
                </div>
                <div>
                  {tab == 1 ? (
                    <Calculations />
                  ) : tab == 2 ? (
                    <Textbase />
                  ) : tab == 3 ? (
                    <Uploadfile />
                  ) : null}
                </div>
              </>
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
          <p className="modal-title">{content?.title}</p>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col modalcontent">
              <p>Status: {content?.status}</p>
              <p>Date Created: {content?.createdAt.split("T")[0]}</p>
              Created By:
              <img
                className="profile-img"
                src={
                  content?.owner?.profile != undefined
                    ? imageURL + "users/" + content?.owner?.profile
                    : userimg
                }
              />
            </div>
            <div className="col modalcontent">
              Signed By:
              <ul>
                {content?.signer?.map((item) => {
                  return <li>{item.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showFolderModal}
        onHide={() => {
          setShowFolderModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <form className="teamdata">
              <Row className="teamrow">
                <Col>
                  <lable>Folder name</lable>
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Team name"
                    value={folderData.name}
                    onChange={(e) => {
                      setFolderdata({ ...folderData, name: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => createFolder(e)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showFolderupdateModal}
        onHide={() => {
          setshowFolderupdateModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Rename Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <form className="teamdata">
              <Row className="teamrow">
                <Col>
                  <lable>Folder name</lable>
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Team name"
                    value={folderData.name}
                    onChange={(e) => {
                      e.preventDefault();

                      setFolderdata({ ...folderData, name: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            type="submit"
            onClick={(e) => deleteFolder(e)}
          >
            Delete
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => updatefolder(e)}
          >
            update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Rename modal */}
      <Modal
        show={shownrenamemodal}
        onHide={() => {
          setshownrenamemodal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Rename {type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <form className="teamdata">
              <Row className="teamrow">
                <Col>
                  <lable>Title</lable>
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                      e.preventDefault();
                      settitle(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </form>
          </>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button
            variant="danger"
            type="submit"
            onClick={(e) => deleteFolder(e)}
          >
            Delete
          </Button> */}
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => renamedocument(e)}
          >
            update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* delete document */}
      <Modal
        show={showndeletedocument}
        onHide={() => {
          setshowndeletedocument(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete {type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <>
            <form className="teamdata">
              <Row className="teamrow">
                <Col>
                  <lable>Title</lable>
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                      e.preventDefault();
                      settitle(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </form>
          </> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setid("");
              setshowndeletedocument(false);
            }}
          >
            No
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => signaturedelete(e)}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* select folder */}
      <Modal
        show={selectfoldermodal}
        onHide={handleselectfolder}
        animation={false}
        centered
        size="md"
        className="main-modal"
      >
        <Modal.Header closeButton>
          <p className="modal-title">Select Folder</p>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {getFolder.map((fol) => {
              return (
                <div className="folder-container col-md-4 select-folder">
                  <div
                    className="folder"
                    onClick={(e) => {
                      e.preventDefault();
                      selectfolder(fol._id);

                      // showFolderModalHandler;
                    }}
                  >
                    <img src={folder} />
                  </div>
                  <p>{fol.name}</p>
                </div>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
