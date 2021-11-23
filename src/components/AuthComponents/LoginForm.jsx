import axios from "axios";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./Auth.css";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
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
      .catch((err) => {
        this.setState({ errorMessage: err.response.data.errorMessage });
      });
  };

  render() {
    const { password, email, errorMessage } = this.state;
    return (
      <div class="auth-form">
        <Form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="example@example.com"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />

          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit">Login</button>
        </Form>
      </div>
    );
  }
}
