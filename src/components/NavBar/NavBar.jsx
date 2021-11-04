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
        <h3>Home</h3>
      </NavLink>

      <NavLink to="/signup" style={linkStyles} activeStyle={activeStyles}>
        <h3>Register</h3>
      </NavLink>

      <NavLink to="/login" style={linkStyles} activeStyle={activeStyles}>
        <h3>Log In</h3>
      </NavLink>

      <NavLink style={linkStyles} activeStyle={activeStyles} to="/forum">
        <h3>Discussion</h3>
      </NavLink>
    </div>
  );
}
