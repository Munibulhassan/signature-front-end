import React from 'react'
import logo from "../Assets/Approaved.png";
import login from "../Assets/login.png";
import login_form from "../Assets/login_form.png";
import rightarrow from "../Assets/Group 26.png";
import circle from "../Assets/Newhere.png";
import eye from "../Assets/eye-slash.png"
import google from "../Assets/googleicon.png";
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const navigate = useNavigate()
  return (
    <div className='signup_page'>
<section id="login_page">
    <div class="row insign_login">
  <div class="col-md-12 col-sm-12 login_side">
     <div class="header">
      <div class="col-md-6 logo">
      <img src={logo} class="img-fluid"/>
      </div>
      <div class="col-md-6 free_button">
      {/* <button type="button" className="btn upgrade try_free">
              Try Free Trial <img src={rightarrow} />
            </button> */}
      </div>
     </div>
     <div class="form">
        <div class="col-md-12 login_form">
          <div class="login_heading">
          <h1><span class="half_haeding" >Sign Up</span> to your Account</h1>
          </div>
          <div class="login_para">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
          <div class="loginform_img">
          <img src={login_form} class="img-fluid"/>
           </div>
          <div class="login_form">
          <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="First Name"/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            <img src={eye} class="eyelash"/>
          </div>
          {/* <div class="login_forget">
          <p><a href="#">Forget Password?</a></p>
          </div> */}
          <button type="login" class=" login_btn" onClick={()=>navigate("/login")} >Sign Up</button>
          <div class="form_or"><h5>OR</h5></div>
          <button type="login"  onClick={()=>navigate("/login")} class="btn google_btn"><img src={google} class="google_icon"/> Sign Up with Google</button>
         </form>
         <div class="dont_account sign_in">
          <p  onClick={()=>navigate("/login")}>Already have an account?<a href="#"> Login </a></p>
          </div>
          </div>
        </div>
     </div>
     <div class="login_img">
      <img src={login} class="img-fluid"/>
      </div>
  </div>
</div>
    </section>


    </div>
  )
}
