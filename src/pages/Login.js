import { useState } from "react";/* 
import { Link} from "react-router-dom"; */
import "./Login.css";
import axios from "axios";
import { SERVER_URL } from "./helper";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const res = await axios.post(`${SERVER_URL}/auth/login`, {
        email,
        password,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">      
        </div>
      </div>
      <div className="background">
        <form>
          <h1 className="title">Log In</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="email"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="password"
          />
          <button className="loginButton" onClick={handleLogin}>
            Log In
          </button>
          {/* <span className="signup-prompt">
            No Account?{" "}
            <Link to="/signup" className="signup-link">
              Sign up now.
            </Link>
          </span> */}
          <span className="signup-prompt">
            No Account?{" "}
            <a href="./Signup" className="signup-link">
              Sign up now.
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}
