import React, { Component } from "react";
import "./Home.css";

const heading2Styles = {
  width: "60vw",
  textAlign: "center",
  lineHeight: "5vh",
};

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img
          className="home-logo"
          src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637173969/tradehub-logo-white_s3sfhi.png"
          alt="logo black"
          style={{ width: "50vw" }}
        />
        <h2 style={heading2Styles}>
          At TradeHub you will sell items you no longer use, and connect with
          the community.
        </h2>

      </div>
    );
  }
}

export default Home;
