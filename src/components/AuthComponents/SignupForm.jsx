import axios from "axios";
import React, { Component } from "react";
require("dotenv");

export default class SignupForm extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    city: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { username, password, email, city } = this.state;
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_HOST}/auth/signup`, {
        username,
        password,
        email,
        city,
      })
      .then((newUser) => {
        this.setState({ username: "", password: "", email: "", city: "" });

        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { username, password, email, city } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="example@example.com"
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <input
            type="text"
            name="city"
            value={city}
            onChange={this.handleChange}
            placeholder="City"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
