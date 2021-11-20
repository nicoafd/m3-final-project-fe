import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Categories from "../CategoryComponent/Categories";

const homeStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
};

const heading2Styles = {
  width: "60vw",
  textAlign: "center",
  lineHeight: "5vh",
};

class Home extends Component {
  render() {
    return (
      <div style={homeStyles}>
        <Categories />
        <img
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
