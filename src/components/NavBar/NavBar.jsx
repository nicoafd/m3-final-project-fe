import axios from "axios";
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

export default function NavBar({ isLoggedIn, user, setUser }) {
  const logout = () => {
    axios.post(`${process.env.REACT_APP_API_HOST}/auth/logout`).then(() => {
      setUser(null, false);
    });
  };

  return (
    <div style={containerStyles}>
      <NavLink style={linkStyles} activeStyle={activeStyles} exact to="/">
        <h3>Home</h3>
      </NavLink>

      <NavLink style={linkStyles} activeStyle={activeStyles} to="/forum">
        <h3>Discussion</h3>
      </NavLink>

      <NavLink style={linkStyles} activeStyle={activeStyles} to="/marketplace">
        <h3>Marketplace</h3>
      </NavLink>

      {!isLoggedIn && (
        <>
          {" "}
          <NavLink to="/signup" style={linkStyles} activeStyle={activeStyles}>
            <h3>Register</h3>
          </NavLink>
          <NavLink to="/login" style={linkStyles} activeStyle={activeStyles}>
            <h3>Log In</h3>
          </NavLink>
        </>
      )}

      {isLoggedIn && (
        <>
          <NavLink to="/sell" style={linkStyles} activeStyle={activeStyles}>
            <h3>List Item</h3>
          </NavLink>
          <NavLink to="/create" style={linkStyles} activeStyle={activeStyles}>
            <h3>Create Thread</h3>
          </NavLink>
          <button onClick={logout}>Log Out</button>
        </>
      )}
    </div>
  );
}
