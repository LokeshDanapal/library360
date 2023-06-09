import React, { Component } from "react";
import Logo from "./logo-png.png";
import Navbar from "../Components/Navbar";
import "./login.css";

export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "madhu@gmail.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div>
        <Navbar />
        <div
          className="App"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <img src={Logo} className="logo" alt="logo" />
          <form
            className="form"
            style={{ margin: "50px" }}
            onSubmit={this.handleSubmit}
          >
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your Email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button className="secondary" onClick={this.handleClick}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
