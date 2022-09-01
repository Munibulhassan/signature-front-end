import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import rightarrow from "../../Assets/Group 26.png";
import team from "../../Assets/V3.png";
import addteam from "../../Assets/addteam.PNG";
import Profile from "../../components/Profile";
import "./team.css";
import { createteams, getteams, updateteam } from "../../action/action";
import { toast } from "react-toastify";
import { imageURL } from "../../action/config";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Team() {
  const [data, setdata] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [logo, setlogo] = useState({});
  const [document, setdocument] = useState({});
  const [id, setid] = useState("");

  const [edit, setedit] = useState(false);
  const [teamdata, setteamdata] = useState({
    name: "",
    viewer: "",
    member: "",
  });
  const [name, setname] = useState("");
  const [member, setmember] = useState("");

  const [viewer, setviewer] = useState("");

  const updateteamdata = async (e) => {
    console.log(teamdata);
    e.preventDefault();
    const payload = new FormData();
    payload.append("name", teamdata.name);
    if (typeof teamdata.member == String) {
      payload.append("member", JSON.stringify(teamdata.member.split(",")));
    } else {
      payload.append("member", teamdata.member);
    }
    if (typeof teamdata.viewer == String) {
      payload.append("viewer", JSON.stringify(teamdata.viewer.split(",")));
    } else {
      payload.append("viewer", teamdata.viewer);
    }
    const res = await updateteam(id, payload);
    console.log(res);

    if (res.success == true) {
      setteamdata({
        name: "",
        viewer: "",
        member: "",
      });
      toast.success(res.message);
      getteamdata();
      closeModal();
    } else {
      toast.error(res.message);
    }
  };
  const Addteam = async (e) => {
    e.preventDefault();

    const payload = new FormData();

    payload.append("name", teamdata.name);
    payload.append("viewer", JSON.stringify(teamdata.viewer.split(",")));
    payload.append("member", JSON.stringify(teamdata.member.split(",")));
    payload.append("file", logo[0]);
    payload.append("file", document[0]);
    const res = await createteams(payload);
    if (res.success == true) {
      getteamdata();
      toast.success(res.message);
      setIsOpen(false);
    } else {
      toast.success(res.message);
    }
  };
  const getteamdata = async () => {
    const res = await getteams();
    console.log(res);
    if (res.success == true) {
      setdata(res.data);
    } else {
      toast.error(res.message);
    }
  };

  useEffect(() => {
    getteamdata();
  }, []);

  function closeModal() {
    setIsOpen(false);
    setedit(false);
  }
  function handleSubmit(event) {
    console.log("Your favorite flavor is: " + event);
    event.preventDefault();
  }
  console.log(teamdata);
  return (
    <div className="Row containe">
      <div className="col-lg-2 col-md-4 team_container">
        <Sidebar />
      </div>
      <div className="col-lg-10 col-md-8">
        <div className="content team_content">
          <Profile />

          <p className="signatureheading">Team</p>
          <div className="team-document">
            <div className="team">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                quisquam ratione, consequuntur eaque magni ipsum odio temporibus
                aliquam qui repellat est labore ea nulla atque. Totam adipisci
                molestias omnis possimus!
              </p>
            </div>
            <div className="team-menu">
              <button
                type="button"
                className="btn upgrade"
                style={{ width: "max-content" }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
              >
                Add Team Member
                <img src={rightarrow} />
              </button>
            </div>
          </div>
          <div className="team-icon">
            {data.map((item) => {
              return (
                <div
                  className="teamcart"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(item.name);
                    setteamdata({
                      name: item.name,
                      member: item.member,
                      viewer: item.viewer,
                    });

                    setlogo({ image: imageURL + "team/" + item.logo });
                    setedit(true);
                    setid(item._id);
                  }}
                >
                  <div className="cartcontent">
                    <img src={imageURL + "team/" + item.logo} />
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}

            <div className="teamcart">
              <div
                className="cartcontent"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
              >
                <img src={addteam} />
                <p>Add Teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Team Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <form className="teamdata">
              <Row className="teamrow">
                <Col>
                  <lable>Team name</lable>
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Team name"
                    value={teamdata.name}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setteamdata({ ...teamdata, name: e.target.value });
                    }}
                  />
                </Col>
              </Row>
              <Row className="teamrow">
                <Col>
                  <lable>Logo</lable>
                </Col>
                <Col>
                  <input
                    type="file"
                    placeholder="Add logo"
                    onChange={(e) => setlogo(e.target.files)}
                  />
                </Col>
              </Row>
              <Row className="teamrow">
                <Col>
                  <lable>Document</lable>
                </Col>
                <Col>
                  <input
                    type="file"
                    placeholder="Add document"
                    onChange={(e) => setdocument(e.target.files)}
                  />
                </Col>
              </Row>
              <Row className="teamrow">
                <Col>
                  <lable>Member</lable>
                </Col>
                <Col>
                  <sub>
                    (You can enter multiple E-Mail with each seperated by comma)
                  </sub>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    multiple
                    size="50"
                    value={teamdata.member}
                    onChange={(e) => {
                      setteamdata({ ...teamdata, member: e.target.value });
                    }}
                  />
                </Col>
              </Row>
              <Row className="teamrow">
                <Col>
                  <lable>Viewer</lable>
                </Col>
                <Col>
                  <sub>
                    (You can enter multiple E-Mail with each seperated by comma)
                  </sub>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    multiple
                    size="50"
                    value={teamdata.viewer}
                    onChange={(e) => {
                      setteamdata({ ...teamdata, viewer: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            cancel
          </Button>
          <Button variant="primary" type="submit" onClick={(e) => Addteam(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={edit} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Team </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <form className="teamdata">
              <Row className="teamrow">
                <Col>
                  <div className="cartcontent">
                    <img src={logo.image} style={{ "margin-bottom": "10px" }} />
                  </div>
                </Col>
              </Row>
              <Row className="teamrow">
                <Col>
                  <lable>Team name</lable>
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Team name"
                    value={teamdata.name}
                    onChange={(e) => {
                      setteamdata({ ...teamdata, name: e.target.value });
                    }}
                  />
                </Col>
              </Row>

              {/* <Row className="teamrow">
                <Col>
                  <lable>Document</lable>
                </Col>
                <Col>
                  <input
                    type="file"
                    placeholder="Add document"
                    onChange={(e) => setdocument(e.target.files)}
                  />
                </Col>
              </Row> */}
              <Row className="teamrow">
                <Col>
                  <lable>Member</lable>
                </Col>
                <Col>
                  <sub>
                    (You can enter multiple E-Mail with each seperated by comma)
                  </sub>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    multiple
                    size="50"
                    value={teamdata.member}
                    onChange={(e) => {
                      setteamdata({ ...teamdata, member: e.target.value });
                    }}
                  />
                </Col>
              </Row>
              <Row className="teamrow">
                <Col>
                  <lable>Viewer</lable>
                </Col>
                <Col>
                  <sub>
                    (You can enter multiple E-Mail with each seperated by comma)
                  </sub>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    multiple
                    size="50"
                    value={teamdata.viewer}
                    onChange={(e) => {
                      setteamdata({ ...teamdata, viewer: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => updateteamdata(e)}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
