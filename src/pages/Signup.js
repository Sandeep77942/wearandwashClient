import { useState } from "react";
import "./Signup.css";
import { SERVER_URL } from "./helper";
import axios from "axios";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log({ firstname, lastname, email, password, confirmPassword });
    try {
      await axios.post(`${SERVER_URL}/auth/register`, {
        firstname,
        lastname,
        email,
        password,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <div className="signup">
      <div className="top">
        <div className="wrapper">
          {/*  <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          /> */}
        </div>
      </div>
      <div className="container">
        <form className="box">
          <h1 className="title">Sign Up</h1>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
            className="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
            className="lastname"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="email"
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="confirm-password"
          />
          <button className="loginButton" onClick={handleSignup}>
            Sign Up
          </button>
          <span className="signup-prompt">
            Already have an account?{" "}
            <a href="./Login" className="signup-link">
              Log in now.
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}
