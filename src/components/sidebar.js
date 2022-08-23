import React, { useState } from "react";
import logo from "../Assets/Approaved.png";
import Signatureblue from "../Assets/Signature Blue.png";
import Signatureblack from "../Assets/Signature Black.png";
import Agreementsblue from "../Assets/Agreement Blue.png";
import Agreementsblack from "../Assets/Agreement Black.png";
import Settingsblack from "../Assets/Setting Black.png";
import Settingsblue from "../Assets/Setting Blue.png";
import Teamblue from "../Assets/Team Blue.png";
import Teamblack from "../Assets/Team Black.png";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import toggle from "../Assets/burger-menu.png";
import rightarrow from "../Assets/Group 26.png";
import "./sidebar.css"

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (window.innerWidth > 500) {
    return (
      <div div className="sidecontainer">
        <ul className="sidebar">
          <li>
            <img
              className="logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
              src={logo}
            />
          </li>
          {location.pathname.toLowerCase() == "/signature" ? (
            <li>
              <span>
                <img src={Signatureblue} />
              </span>
              <span className="active">Signature</span>
            </li>
          ) : (
            <li onClick={() => navigate("/signature")}>
              <span>
                <img src={Signatureblack} />
              </span>
              <span>Signature</span>
            </li>
          )}

          {location.pathname.toLowerCase() == "/agreement" ? (
            <li>
              <span>
                <img src={Agreementsblue} />
              </span>
              <span className="active">Agreements</span>
            </li>
          ) : (
            <li onClick={() => navigate("/agreement")}>
              <span>
                <img src={Agreementsblack} />
              </span>
              <span>Agreements</span>
            </li>
          )}

          {location.pathname.toLowerCase() == "/team" ? (
            <li>
              <span>
                <img src={Teamblue} />
              </span>
              <span className="active">Teams</span>
            </li>
          ) : (
            <li onClick={() => navigate("/team")}>
              <span>
                <img src={Teamblack} />
              </span>
              <span>Teams</span>
            </li>
          )}
          {location.pathname.toLowerCase() == "/setting" ? (
            <li>
              <span>
                <img src={Settingsblue} />
              </span>
              <span className="active">Setting</span>
            </li>
          ) : (
            <li onClick={() => navigate("/setting")}>
              <span>
                <img src={Settingsblack} />
              </span>
              <span>Setting</span>
            </li>
          )}
        </ul>
      </div>
    );
  } else {
    return (
      <>
        <Button
          variant=""
          className="toggle_btn"
          onClick={handleShow}
          style={{ background: "white", border: "none" }}
        >
          <img src={toggle} className="toggle_icon" />
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img
                className="logo"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
                src={logo}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="sidebar">
              {/* <li>
            <img
              className="logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
              src={logo}
            />
          </li> */}
              {location.pathname.toLowerCase() == "/signature" ? (
                <li>
                  <span>
                    <img src={Signatureblue} />
                  </span>
                  <span className="active">Signature</span>
                </li>
              ) : (
                <li onClick={() => navigate("/signature")}>
                  <span>
                    <img src={Signatureblack} />
                  </span>
                  <span>Signature</span>
                </li>
              )}

              {location.pathname.toLowerCase() == "/agreement" ? (
                <li>
                  <span>
                    <img src={Agreementsblue} />
                  </span>
                  <span className="active">Agreements</span>
                </li>
              ) : (
                <li onClick={() => navigate("/agreement")}>
                  <span>
                    <img src={Agreementsblack} />
                  </span>
                  <span>Agreements</span>
                </li>
              )}

              {location.pathname.toLowerCase() == "/team" ? (
                <li>
                  <span>
                    <img src={Teamblue} />
                  </span>
                  <span className="active">Teams</span>
                </li>
              ) : (
                <li onClick={() => navigate("/team")}>
                  <span>
                    <img src={Teamblack} />
                  </span>
                  <span>Teams</span>
                </li>
              )}
              {location.pathname.toLowerCase() == "/setting" ? (
                <li>
                  <span>
                    <img src={Settingsblue} />
                  </span>
                  <span className="active">Setting</span>
                </li>
              ) : (
                <li onClick={() => navigate("/setting")}>
                  <span>
                    <img src={Settingsblack} />
                  </span>
                  <span>Setting</span>
                </li>
              )}
            </ul>
            <button type="button" className="btn upgrade" style={{"width":"70%"}}>
              Upgrade <img alt="" src={rightarrow} />
            </button>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}
