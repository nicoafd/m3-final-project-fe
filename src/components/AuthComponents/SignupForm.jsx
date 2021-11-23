import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { PacmanLoader, RingLoader } from "react-spinners";
import "./Auth.css";

require("dotenv");

export default class SignupForm extends Component {
  state = {
    username: "",
    password: "",
    profilePic: "",
    email: "",
    city: "",
    imageIsUploading: false,
    errorMessage: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    this.setState({ imageIsUploading: true });
    const uploadData = new FormData();
    uploadData.append("image", event.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_API_HOST}/upload`, uploadData)
      .then((result) => {
        console.log(result);
        this.setState({
          profilePic: result.data.imagePath,
          imageIsUploading: false,
        });
      })
      .catch((err) => this.props.history.push("/error"));
  };

  handleSubmit = (event) => {
    const { username, password, email, city, profilePic } = this.state;
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_HOST}/auth/signup`, {
        username,
        password,
        profilePic,
        email,
        city,
      })
      .then((newUser) => {
        this.setState({
          username: "",
          password: "",
          email: "",
          city: "",
          profilePic: "",
        });
        this.props.setUser(newUser.data, true);
        this.props.history.push("/");
      })
      .catch((err) =>
        this.setState({ errorMessage: err.response.data.errorMessage })
      );
  };

  render() {
    const { username, password, email, city, errorMessage, imageIsUploading } =
      this.state;
    return (
      <div>
        <div class="add-product-form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                name="username"
                value={username}
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="password"
                name="password"
                value={password}
                placeholder="*******"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label htmlFor="email">E-Mail</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="email"
                name="email"
                value={email}
                placeholder="Enter E-Mail address"
              />
            </Form.Group>

            <Form.Group
              onChange={this.handleImageUpload}
              controlId="formFileSm"
              className="mb-3"
            >
              <Form.Label htmlFor="profilePic">Profile Picture</Form.Label>
              <RingLoader loading={imageIsUploading} size={150} />
              <Form.Control type="file" size="sm" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label htmlFor="price">City</Form.Label>
              <InputGroup>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="city"
                  value={city}
                  placeholder="Enter city"
                />
              </InputGroup>
            </Form.Group>

            <Button
              type="submit"
              disabled={imageIsUploading}
              variant="secondary"
              size="sm"
            >
              Register
            </Button>
            {errorMessage && <p>{errorMessage}</p>}
          </Form>
        </div>
      </div>
    );
  }
}
