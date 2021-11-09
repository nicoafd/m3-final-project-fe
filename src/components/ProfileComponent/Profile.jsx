import axios from "axios";
import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    username: "",
    city: "",
    threads: [],
    products: [],
  };

  handleThreads = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/thread/my-threads`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.threads) {
          this.setState({
            threads: [...this.state.threads, response.data.threads],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
    this.handleThreads();
  }

  render() {
    const { username, city } = this.state;
    return (
      <div>
        <h3>Welcome to your profile</h3>
        <h3>{username}</h3>
        <h3>{city}</h3>
      </div>
    );
  }
}
