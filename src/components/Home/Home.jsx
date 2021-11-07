import React, { Component } from "react";

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
        <h2 style={heading2Styles}>
          At TradeHub you will sell items you no longer use, and connect with
          the community.
        </h2>
      </div>
    );
  }
}

export default Home;
