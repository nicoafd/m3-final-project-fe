import axios from "axios";
import React, { Component } from "react";
import Product from "./Product";
import Thread from "./Thread";

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
      <div>
        <h3>Welcome to your profile</h3>
        <h3>{username}</h3>
        <h3>{city}</h3>

        <Thread />
        <Product />
  
      </div>
    );
  }
}
