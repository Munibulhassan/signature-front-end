import React, { useState } from "react";
import "./login.css";
import { Rings } from "react-loader-spinner";

import logo from "../../Assets/Approaved.png";
import login from "../../Assets/login.png";
import login_form from "../../Assets/login_form.png";
import rightarrow from "../../Assets/Group 26.png";
import { toast } from "react-toastify";
import eye from "../../Assets/eye-slash.png";
import google from "../../Assets/googleicon.png";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../../action/action";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import { baseURL } from "../../action/config";
import { GoogleLogin } from "react-google-login";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("munib1.teckflux@gmail.com");
  const [password, setPassword] = useState("12345679");
  const [loader, setloader] = useState(false);
  const userLogin = async () => {
    const userData = {
      email: email,
      password: password,
    };
    const res = await userlogin(userData);

    if (res.success == true) {
      
      toast.success("Login Succssfully");
      navigate("/agreement");

    } else {
      setloader(false);
      toast.error(res.message);
    }
  };

  return (
    <>
      <section id="login_page">
        <div class="row insign_login">
          <div class="col-md-12 col-sm-12 login_side">
            <div class="header">
              <div class="col-md-6 logo">
                <img src={logo} class="img-fluid" />
              </div>
              <div class="col-md-6 free_button">
                <button type="button" className="btn upgrade try_free">
                  Try Free Trial{" "}
                  <span>
                    <img src={rightarrow} />
                  </span>
                </button>
              </div>
            </div>
            <div class="form">
              <div class="col-md-12 login_form">
                <div class="login_heading">
                  <h1>
                    <span class="half_haeding">Login</span> to your Account
                  </h1>
                </div>
                <div class="login_para">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div class="loginform_img">
                  <img src={login_form} class="img-fluid" />
                </div>
                <div class="login_form">
                  <form>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                      <img
                        src={eye}
                        onClick={() => {
                          var p = document.getElementById(
                            "exampleInputPassword1"
                          );
                          if (p.type == "password") {
                            p.setAttribute("type", "text");
                          } else {
                            p.setAttribute("type", "password");
                          }
                        }}
                        class="eyelash"
                      />
                    </div>
                    <div class="login_forget">
                      <p>
                        <a href="#">Forget Password?</a>
                      </p>
                    </div>
                    <button
                      class="login_btn"
                      onClick={(e) => {
                        e.preventDefault();
                        if (loader == false) {
                          userLogin(e);
                        }
                        setloader(true);
                      }}
                    >
                      {!loader ? (
                        "Login"
                      ) : (
                        <span>
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span>Loading...</span>
                        </span>
                      )}
                    </button>
                    <div class="form_or">
                      <h5>OR</h5>
                    </div>
                    <button
                      type="login"
                      class="btn google_btn"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`${baseURL}/auth/google`);
                      }}
                    >
                      <img src={google} class="google_icon_login" /> Login with
                      Google
                    </button>
                    {/* <GoogleLogin
                      clientId="1008366125971-ccgl9h9a3hure3ag4sde5ooj1q7v7vhk.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    /> */}
                  </form>
                  <div class="dont_account sign_in">
                    <p onClick={() => navigate("/signup")}>
                      Don’t have an account?<a href="#"> Sign Up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="login_img">
              <img src={login} class="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
