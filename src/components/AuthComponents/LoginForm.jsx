import axios from "axios";
import React, { Component } from "react";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { email, password } = this.state;

    event.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((loggedUser) => {
        this.setState({ email: "", password: "" });
        //
        this.props.setUser(loggedUser.data, true);
        //
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { password, email } = this.state;
    return (
      <div class="auth-form">
        <form onSubmit={this.handleSubmit}>
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

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
