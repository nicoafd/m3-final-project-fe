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
        this.setState({
          threads: [...response.data.threads],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/product/my-products`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          products: [...response.data.products],
        });
      })
      .catch((err) => console.log(err));
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
    this.handleProducts();
  }

  render() {
    const { username, city, products, threads } = this.state;
    return (
      <div>
        <h3>Welcome to your profile</h3>
        <h3>{username}</h3>
        <h3>{city}</h3>

        {threads.length && (
          <>
            {threads.map((thread) => {
              return (
                <div>
                  <h4>{thread.title}</h4>
                  <p>{thread.categories}</p>
                </div>
              );
            })}
          </>
        )}

        {products.length && (
          <>
            {products.map((product) => {
              return (
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.category}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
