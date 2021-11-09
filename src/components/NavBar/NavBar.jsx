import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillWechat, AiTwotoneShop } from "react-icons/ai";
import { MdLogout, MdLogin } from "react-icons/md";

const containerStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "10vh",
  backgroundColor: "grey",
};

const linkStyles = {
  textDecoration: "none",
  color: "white",
};

const activeStyles = {
  color: "black",
};

export default function NavBar({ isLoggedIn, user, setUser }) {
  const logout = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/auth/logout`,
        {},
        { withCredentials: true }
      )
      .then(() => {
        setUser(null, false);
      });
  };

  return (
    <div style={containerStyles}>
      <NavLink style={linkStyles} activeStyle={activeStyles} exact to="/">
        <AiFillHome />
      </NavLink>

      <NavLink style={linkStyles} activeStyle={activeStyles} to="/forum">
        <AiFillWechat />
      </NavLink>

      <NavLink style={linkStyles} activeStyle={activeStyles} to="/marketplace">
        <AiTwotoneShop />
      </NavLink>

      {!isLoggedIn && (
        <>
          {" "}
          <NavLink to="/signup" style={linkStyles} activeStyle={activeStyles}>
            <h3>Register</h3>
          </NavLink>
          <NavLink to="/login" style={linkStyles} activeStyle={activeStyles}>
            <MdLogin />
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
          <NavLink to="/profile" style={linkStyles} activeStyle={activeStyles}>
            <h3>profile</h3>
          </NavLink>
          <NavLink to="/" style={linkStyles} activeStyle={activeStyles}>
            <MdLogout onClick={logout} />
          </NavLink>
        </>
      )}
    </div>
  );
}
