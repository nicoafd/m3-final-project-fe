import React from "react";
import { NavLink } from "react-router-dom";

const containerStyles = {
  display: "flex",
  justifyContent: "space-evenly",
};

const linkStyles = {
  textDecoration: "none",
};

const activeStyles = {
  textDecoration: "underline",
  color: "black",
};

export default function NavBar() {
  return (
    <div style={containerStyles}>
      <NavLink style={linkStyles} activeStyle={activeStyles} exact to="/">
        <h1>Home</h1>
      </NavLink>

      <NavLink style={linkStyles} activeStyle={activeStyles} to="/register">
        <h1>Register</h1>
      </NavLink>

      <NavLink style={linkStyles} activeStyle={activeStyles} to="/buy">
        <h1>Buy</h1>
      </NavLink>

      <NavLink style={linkStyles} activeStyle={activeStyles} to="/forum">
        <h1>Discussion</h1>
      </NavLink>
    </div>
  );
}
