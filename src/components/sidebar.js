import React from "react";
import logo from "../Assets/Approaved.png";
import Signatureblue from "../Assets/Signature Blue.png";
import Signatureblack from "../Assets/Signature Black.png";
import Agreementsblue from "../Assets/Agreement Blue.png";
import Agreementsblack from "../Assets/Agreement Black.png";
import Settingsblack from "../Assets/Setting Black.png";
import Settingsblue from "../Assets/Setting Blue.png";
import Teamblue from "../Assets/Team Blue.png";
import Teamblack from "../Assets/Team Black.png";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Signature from "../pages/Signature";

export default function Sidebar() {
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.pathname.toLowerCase() == "/setting");
  const navigate = useNavigate();
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
}
