import axios from "axios";
import React, { Component } from "react";
import Product from "./Product";
import Thread from "./Thread";
import "./Profile2.css";
import { Form, Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

export default class Profile extends Component {
  state = {
    username: "",
    city: "",
    email: "",
    createdAt: "",
    profilePic: "",
    isShowingForm: false,
    imageIsUploading: false,
    successMessage: false,
  };

  handleUserInfo = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/profile`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          city: response.data.city,
          createdAt: response.data.createdAt.slice(0, 10),
          profilePic: response.data.profilePic,
        });
      })
      .catch((err) => {
        this.props.history.push("/error");
      });
  };

  componentDidMount() {
    this.handleUserInfo();
  }

  handleImageUpload = (event) => {
    this.setState({ imageIsUploading: true });
    const uploadData = new FormData();
    uploadData.append("image", event.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_API_HOST}/upload`, uploadData)
      .then((result) => {
        console.log(result);
        this.setState({
          profilePic: result.data.imagePath,
          imageIsUploading: false,
        });
      })
      .catch((err) => this.props.history.push("/error"));
  };

  handleSubmit = (event) => {
    const { profilePic, isShowingForm } = this.state;
    event.preventDefault();

    axios
      .patch(
        `${process.env.REACT_APP_API_HOST}/profile/edit-pic`,
        { profilePic },
        { withCredentials: true }
      )
      .then((result) => {
        console.log(result);
        /*  this.setState({ profilePic: result.data.imagePath }); */
        this.setState({ isShowingForm: !isShowingForm, successMessage: true });
        this.props.history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push("/error");
      });
  };

  showForm = () => {
    this.setState({ isShowingForm: !this.state.isShowingForm });
  };

  render() {
    const {
      username,
      city,
      email,
      createdAt,
      profilePic,
      isShowingForm,
      successMessage,
    } = this.state;
    return (
      <div className="profile-component">
        <div className="profile-img-div">
          <img src={profilePic} className="profile-img" alt="Profile Img" />
          <h4>{username}</h4>
          <p>TradeHub User Since {createdAt}</p>
          <p>{email}</p>
          <p>{city}</p>
          <button onClick={this.showForm}>Edit Profile Picture</button>
        </div>

        {successMessage && (
          <div className="success-msg">
            <p>Succesfully changed your profile picture. You look beautiful</p>
            <AiOutlineClose
              color="red"
              onClick={() => this.setState({ successMessage: false })}
            />
          </div>
        )}

        {isShowingForm && (
          <Form onSubmit={this.handleSubmit}>
            <Form.Group
              onChange={this.handleImageUpload}
              controlId="formFileSm"
              className="mb-3"
            >
              <Form.Label htmlFor="profilePic">Profile Picture</Form.Label>
              <Form.Control type="file" size="sm" name="profilePic" />
            </Form.Group>
            <Button type="submit">Upload</Button>
          </Form>
        )}

        <div className="profile-listings">
          <div className="profile-products">
            <h6>Your products</h6>
            <Product />
          </div>

          <div className="profile-threads">
            <h6>Your Threads</h6>
            <Thread />
          </div>
        </div>
      </div>
    );
  }
}
