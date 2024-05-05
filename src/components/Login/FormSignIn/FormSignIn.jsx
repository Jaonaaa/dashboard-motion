import React, { useState } from "react";
import LogoDefault from "../../../assets/svg/LogoDefault";
import RowInput from "../RowInput/RowInput";
import Divider from "../Divider/Divider";
import ButtonLogo from "../ButtonLogo/ButtonLogo";
import GoogleIcon from "../../../assets/svg/GoogleIcon";
import "./FormSignIn.sass";
import { alaivoGet, alaivoPost } from "../../../utils/Alaivo";
import LogoDefaultBig from "../../../assets/svg/LogoDefaultBig";

const FormSignIn = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alaivoPost("apollo/art/profiles",JSON.stringify(formData))
    const res = await alaivoGet("apollo/art/profiles", null, false);
    console.log(res);
  };

  const handleInputForm = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="sign_in_form">
      <div className="logo">
        <LogoDefaultBig />
      </div>
      <div className="title">Sign in</div>
      <div className="subtitle">Let's dive with us in this incredible journey.</div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <RowInput title="Email" type="email" id="email" name="email" onChange={handleInputForm} fullWidth />
        <RowInput title="Password" type="password" id="password" name="password" onChange={handleInputForm} fullWidth />
        <div className="button">
          <button>Login</button>
        </div>
        <div className="sign_up_link">
          <div className="text">Don't have an account ?</div>
          <div className="link">Register here.</div>
        </div>
      </form>
      {/* <Divider text={"OR"} className={"divider_form"} />
      <ButtonLogo icon={<GoogleIcon />} text={"Continue with Google"} /> */}
      {/* <ButtonLogo icon={<AppleIcon />} text={"Continue with Apple"} /> */}
    </div>
  );
};

export default FormSignIn;
