import React from 'react'
import logo from "../Assets/Approaved.png"
import circle from "../Assets/Newhere.png"
import login from "../Assets/login.png"
import login_form from "../Assets/login_form.png"
// import eye from "../Assets/eye-slash7.png"
import google from "../Assets/googleicon.png"
export default function Login() {
  return (
<>
<section id="login_page">
<div class="container">
<div class="row insign_login">
  <div class="col-md-8 col-sm-12 login_side">
     <div class="row header">
      <div class="col-md-6 logo">
      <img src={logo} class="img-fluid"/>
      </div>
      <div class="col-md-6 free_button">
      <button type="button" class="btn try_free">Try Free Trial<i class="fa-solid fa-arrow-right"></i></button>
      </div>
     </div>
     <div class="row">
        <div class="col-md-12 login_form">
          <div class="login_heading">
          <h1><span class="half_haeding">Login</span> to your Account</h1>
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
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            {/* <img src={eye} class="eyelash"/> */}
          </div>
          <button type="login" class=" login_btn">Login</button> 
          <div class="row form_or"><h5>OR</h5></div>
          <button type="login" class="btn google_btn"><img src={google} class="google_icon"/> Login with Google</button>
         </form>
          </div>
        </div>
     </div>
     <div class="login_img">
      <img src={login} class="img-fluid"/>
      </div>
  </div>
  <div class="col-md-4 col-sm-12 newhere_side">
      <div class="newhere_img">
      <img src={circle} class="img-fluid"/>
      </div>


    <div class="img_newhere">
    <div class="new_heading">
    <h1>New Here?</h1>
    </div>
    <div class="new_para">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
    </div>
    <div class="newhere_form">
          <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="First Name"/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Email Address"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" />
          </div>
          <div class="form_text">
            <p>Lorem Ipsum is simply dummy text <span class="term_privacy"><a href="#"> Term & Condition </a></span> industry. Lorem Ipsum has been the industry's<span class="term_privacy"><a href="#"> Privacy Policy </a></span>dummy text.</p>
          </div>
          <button type="login" class="btn newhere_login">Login</button> 
          <div class="row newhere_or"><h5>OR</h5></div>
          <button type="login" class="btn newhere_google"><img src={google} class="google_icon_new"/>Login with Google</button> 
         </form>
    </div>
    </div>


  </div>
</div>
</div>
</section>

</>
  )
}
