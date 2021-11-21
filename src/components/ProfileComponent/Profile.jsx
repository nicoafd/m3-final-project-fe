import axios from "axios";
import React, { Component } from "react";
/* import Product from "./Product";
import Thread from "./Thread"; */
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";

export default class Profile extends Component {
  state = {
    username: "",
    city: "",
  };

  handleUserInfo = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/profile`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          username: response.data.username,
          city: response.data.city,
        });
        console.log(this.state.username, this.state.city);
      })
      .catch((err) => {});
  };

  componentDidMount() {
    this.handleUserInfo();
  }

  render() {
    const { username, city } = this.state;
    return (
      <div class="profile-component">
        {/* <h3>Welcome to your profile, {username}!</h3> */}
        <ProfileInfo />
      </div>
    );
  }
}
