import React from "react";
import FormSignIn from "./FormSignIn/FormSignIn";
import FormSignUp from "./FormSignUp/FormSignUp";
import "./Login.sass";

const Login = () => {
  return (
    <div id="login_container">
      <FormSignIn />
      {/* <FormSignUp /> */}
    </div>
  );
};

export default Login;
