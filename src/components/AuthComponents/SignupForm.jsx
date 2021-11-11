import axios from "axios";
import React, { Component } from "react";
import { PacmanLoader } from "react-spinners";
require("dotenv");

export default class SignupForm extends Component {
  state = {
    username: "",
    password: "",
    profilePic: "",
    email: "",
    city: "",
    imageIsUploading: false,
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
      .catch((err) => this.props.history.push("/500"));
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
        this.setState({ username: "", password: "", email: "", city: "", profilePic: ""});
        this.props.setUser(newUser.data, true);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { username, password, email, city, profilePic, imageIsUploading } =
      this.state;
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

          {profilePic && <img src={this.state.profilePic} alt="profile pic uploaded" />}
          <PacmanLoader loading={imageIsUploading} size={100} />
          <input onChange={this.handleImageUpload} type="file" name="profilePic" />

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
