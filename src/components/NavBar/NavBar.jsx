import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillWechat, AiTwotoneShop } from "react-icons/ai";
import { MdLogout, MdLogin } from "react-icons/md";
import "./Navbar.css";
import "./index.js";

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
    <div class="navbar">
      <img
        src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637173969/tradehub-logo-white_s3sfhi.png"
        alt="logo"
        style={{ width: "9rem" }}
      />
      <a href="#" class="toggleButton">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>

      <div className="navbarLinks">
        <NavLink style={linkStyles} activeStyle={activeStyles} exact to="/">
          {/*  <AiFillHome /> */}
          <h3>Home</h3>
        </NavLink>

        <NavLink
          style={linkStyles}
          activeStyle={activeStyles}
          to="/marketplace"
        >
          {/* <AiTwotoneShop /> */}
          <h3>Marketplace</h3>
        </NavLink>

        <NavLink style={linkStyles} activeStyle={activeStyles} to="/forum">
          {/* <AiFillWechat /> */}
          <h3>Forum</h3>
        </NavLink>

        {!isLoggedIn && (
          <>
            {" "}
            <NavLink to="/signup" style={linkStyles} activeStyle={activeStyles}>
              <h3>Register</h3>
            </NavLink>
            <NavLink to="/login" style={linkStyles} activeStyle={activeStyles}>
              {/*  <MdLogin /> */}
              <h3>Login</h3>
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
            <NavLink
              to="/profile"
              style={linkStyles}
              activeStyle={activeStyles}
            >
              <h3>profile</h3>
            </NavLink>
            <NavLink to="/" style={linkStyles} activeStyle={activeStyles}>
              {/* <MdLogout onClick={logout} /> */}
              <button onClick={logout}>Log out</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
