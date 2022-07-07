import React from "react";
import LoginForm from "../views/Login";
import Register from "./Register";
import { LoginUser } from "../model/Model";

const Login = () => {
  const login = (e) => {
    e.preventDefault();
    // Email and Pass Value
    const email = document.getElementById("log-email").value;
    const pass = document.getElementById("log-password").value;
    // Handle Login
    if (email !== "") {
      document.querySelector("#err-log").innerHTML = "";
      if (pass !== "") {
        document.querySelector("#err-log").innerHTML = "";
        document.querySelector("#log-button").setAttribute("disabled", "");
        document.querySelector("#log-button").innerHTML =
          '<span class="spinner-border"></span>';
        LoginUser(email, pass);
      } else {
        // Password Required Error
        document.querySelector("#err-log").innerHTML = "Password is required!";
      }
    } else {
      // Email Required Error
      document.querySelector("#err-log").innerHTML = "Email is required!";
    }
  };
  return (
    <div className="bg-light">
      <LoginForm handleSubmit={login} />
      <Register />
      {/* <Info /> */}
    </div>
  );
};

export default Login;
