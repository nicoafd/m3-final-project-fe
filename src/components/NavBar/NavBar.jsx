import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "./Navbar.css";
import "./index.js";

const linkStyles = {
  textDecoration: "none",
  color: "white",
};

const activeStyles = {
  color: "yellow",
};

export default function NavBar({ isLoggedIn, user, setUser }) {
  const [isShowing, setShowing] = useState(false);

  //onclick from false t true and true to false
  //setting the menu as the top layer
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

  const handleClick = () => {
    setShowing(!isShowing);
  };

  return (
    <div class="navbar">
      <div>
        <NavLink exact to="/">
          <img
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637173969/tradehub-logo-white_s3sfhi.png"
            alt="logo"
            style={{ width: "9rem" }}
          />
        </NavLink>
      </div>

      <BsFillGrid3X3GapFill
        className="toggleButton"
        onClick={handleClick}
        color="white"
      />

      <div className="navbarLinks">
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
              <h3>Profile</h3>
            </NavLink>
            <NavLink to="/" style={linkStyles} activeStyle={activeStyles}>
              {/* <MdLogout onClick={logout} /> */}
              <button onClick={logout}>Log out</button>
            </NavLink>
          </>
        )}
      </div>

      {isShowing && (
        <div className="navbarLinks minimizedNavlinks">
          <NavLink
            style={linkStyles}
            activeStyle={activeStyles}
            to="/marketplace"
            onClick={handleClick}
          >
            {/* <AiTwotoneShop /> */}
            <h3>Market</h3>
          </NavLink>

          <NavLink
            style={linkStyles}
            activeStyle={activeStyles}
            to="/forum"
            onClick={handleClick}
          >
            {/* <AiFillWechat /> */}
            <h3>Forum</h3>
          </NavLink>

          {!isLoggedIn && (
            <>
              {" "}
              <NavLink
                to="/signup"
                style={linkStyles}
                activeStyle={activeStyles}
                onClick={handleClick}
              >
                <h3>Register</h3>
              </NavLink>
              <NavLink
                to="/login"
                style={linkStyles}
                activeStyle={activeStyles}
                onClick={handleClick}
              >
                {/*  <MdLogin /> */}
                <h3>Login</h3>
              </NavLink>
            </>
          )}

          {isLoggedIn && (
            <>
              {/*  <NavLink to="/sell" style={linkStyles} activeStyle={activeStyles}>
                <h3>List Item</h3>
              </NavLink>
              <NavLink
                to="/create"
                style={linkStyles}
                activeStyle={activeStyles}
              >
                <h3>Create Thread</h3>
              </NavLink> */}
              <NavLink
                to="/profile"
                style={linkStyles}
                activeStyle={activeStyles}
                onClick={handleClick}
              >
                <h3>Profile</h3>
              </NavLink>
              <NavLink
                to="/"
                style={linkStyles}
                activeStyle={activeStyles}
                onClick={handleClick}
              >
                {/* <MdLogout onClick={logout} /> */}
                <button onClick={logout}>Log out</button>
              </NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
}
