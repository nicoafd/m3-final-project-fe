import axios from "axios";
import React, { Component } from "react";
import Product from "./Product";
import Thread from "./Thread";
import "./Profile2.css";

export default class Profile extends Component {
  state = {
    username: "",
    city: "",
    email: "",
    createdAt: "",
    profilePic: "",
  };

  handleUserInfo = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/profile`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          city: response.data.city,
          createdAt: response.data.createdAt.slice(0, 10),
          profilePic: response.data.profilePic,
        });
      })
      .catch((err) => {
        this.props.history.push("/error");
      });
  };

  componentDidMount() {
    this.handleUserInfo();
  }

  render() {
    const { username, city, email, createdAt, profilePic } = this.state;
    return (
      <div className="profile-component">
        <div className="profile-img-div">
          <img src={profilePic} className="profile-img" alt="Profile Img" />
          <h4>{username}</h4>
          <p>TradeHub User Since {createdAt}</p>
          <p>{email}</p>
          <p>{city}</p>
          <button>Edit Profile</button>
        </div>

        <div className="profile-listings">
          <div className="profile-products">
            <h6>Your products</h6>
            <Product />
          </div>

          <div className="profile-threads">
            <h6>Your Threads</h6>
            <Thread />
          </div>
        </div>
      </div>
    );
  }
}
