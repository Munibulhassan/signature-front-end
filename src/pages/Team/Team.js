import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import rightarrow from "../../Assets/Group 26.png";
import ReactSelect from "react-select";
import Select from "react-select";
import { components } from "react-select";
import addteam from "../../Assets/addteam.PNG";
import Profile from "../../components/Profile";

import "./team.css";
import {
  createteams,
  getteams,
  getUser,
  sendinvite,
  updateteam,
} from "../../action/action";
import { toast } from "react-toastify";
import { imageURL } from "../../action/config";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Team() {
  const [data, setdata] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [logo, setlogo] = useState({});

  const [id, setid] = useState("");
  const [users, setusers] = useState([]);
  const [edit, setedit] = useState(false);
  const [invite, setinvite] = useState(false);

  const [teamdata, setteamdata] = useState({
    name: "",
    member: [],
    owner: "",
  });
  const [email, setemails] = useState("");

  const updateteamdata = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"))._id;

    if (user != teamdata.owner) {
      toast.error("Only owner of this team can update data");
      closeModal();
    } else {
      const res = await updateteam(id, teamdata);
      if (res.success == true) {
        toast.success(res.message);
        getteamdata();
        getusers();
        closeModal();
      } else {
        toast.error(res.message);
      }
    }
  };
  const Addteam = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("name", teamdata.name);
    payload.append("member", teamdata.member);
    payload.append("file", logo[0]);
    payload.append("file", document[0]);
    const res = await createteams(payload);
    if (res.success == true) {
      getteamdata();
      toast.success(res.message);
      setIsOpen(false);
    } else {
      toast.error(res.message);
    }
  };
  const getteamdata = async () => {
    const res = await getteams();

    if (res.success == true) {
      setdata(res.data);
    } else {
      toast.error(res.message);
    }
  };
  const getusers = async () => {
    const res = await getUser();
    const arr = [];
    if (res.success == true) {
      res.data.map((item) => {
        item.checked = false;
        item.value = item.email
        arr.push(item);
      });
    }
    setusers(arr);
  };

  useEffect(() => {
    getteamdata();
    getusers();
  }, []);

  function closeModal() {
    setIsOpen(false);
    setedit(false);
    setemails([]);
    setinvite(false);
    setteamdata({
      name: "",
      member: [],
    });
  }

  const handleselected = (selected) => {
    if (selected[0]) {
      const i = teamdata.member?.indexOf(selected[0]?._id);

      if (i == -1) {
        teamdata.member.push(selected[0]?._id);
        setteamdata({ ...teamdata, member: teamdata.member });
      } else {
        teamdata.member.splice(i, 1);
      }
      users.map((item, index) => {
        if (item._id == selected[0]?._id) {
          users[index].checked = !users[index].checked;
        }
      });
    }
  };
  const [selectedOptions, setSelectedOptions] = useState();
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  const invitesend = async () => {
    console.log({ email: JSON.stringify(email.split(",")) });
    const res = await sendinvite({ email: email.split(",") });
    console.log(res);
    if (res.success) {
      toast.success(res.message);
      closeModal();
    } else {
      toast.success(res.message);
    }
  };
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
                  setinvite(true);
                }}
              >
                Add Team Member
                <img src={rightarrow} />
              </button>
            </div>
          </div>
          <div className="team-icon row">
            {data.map((item) => {
              return (
                <div class="col-md-2">
                  <div
                    className="teamcart mb-4"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();

                      setteamdata({
                        name: item.name,
                        member: item.member,
                        owner: item.owner,
                      });

                      const userlist = [...users];
                      userlist.map((value, index) => {
                        for (var i = 0; i < item?.member?.length; i++) {
                          if (value._id == item.member[i]) {
                            userlist[index].checked = true;
                          }
                        }
                        if (index == userlist.length - 1) {
                          setusers(userlist);
                        }
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
                </div>
              );
            })}
            <div class="col-md-2">
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
      </div>
      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
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
                  <lable>Member</lable>
                </Col>
                <Col>
                  <sub>
                    (You can enter multiple E-Mail with each seperated by comma)
                  </sub>
                  <ReactSelect
                    options={users}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{
                      Option,
                    }}
                    onChange={handleselected}
                    allowSelectAll={true}
                    // value={teamdata.member}
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
      
      <Modal show={invite} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Invite New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <sub>
              (You can enter multiple E-Mail with each seperated by comma)
            </sub>
            <input
              type="text"
              name="email"
              id="email"
              multiple
              size="50"
              value={email}
              onChange={(e) => {
                setemails(e.target.value);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            cancel
          </Button>
          <Button variant="primary" type="submit" onClick={(e) => invitesend()}>
            Send invitation
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={edit} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Team Update</Modal.Title>
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

              <Row className="teamrow">
                <Col>
                  <lable>Member</lable>
                </Col>
                <Col>
                  
                  <ReactSelect
                    options={users}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option }}
                    onChange={handleselected}
                    allowSelectAll={true}
                    isSearchable={true}
                    // value={teamdata.member}
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
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.data.checked}
          onChange={() => null}
        />{" "}
        <label>{props.data.email.slice(0, 20)}</label>
      </components.Option>
    </div>
  );
};
