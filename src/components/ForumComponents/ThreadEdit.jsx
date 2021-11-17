import React, { Component } from "react";
import axios from "axios";

export class ThreadEdit extends Component {
  state = {
    title: "",
    description: "",
    category: "",
    isActive: true,
    edit: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { title, description, category, isActive } = this.state;
    event.preventDefault();
    axios
      .patch(
        `${process.env.REACT_APP_API_HOST}/thread/${this.props.match.params.id}`,
        {
          title,
          description,
          category,
          isActive,
          edit: true,
        },
        { withCredentials: true }
      )
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/500"));
  };
  render() {
    const { title, description, category, isActive } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={this.handleChange}
          />
          <label htmlFor="category">Category</label>
          <select
            onChange={this.handleChange}
            id="category"
            name="category"
            value={category}
          >
            <option value="Mobile, Computers & Devices">
              Mobile, Computers & Devices
            </option>
            <option value="Consoles & Videogames">Consoles & Videogames</option>
            <option value="Fashion">Fashion</option>
            <option value="Sports & Outdoors">Sports & Outdoors</option>
            <option value="Home & Garden">Home & Garden</option>
            <option value="Health & Beauty">Health & Beauty</option>
            <option value="Cinema, Books & Music">Cinema, Books & Music</option>
            <option value="Vehicles & Motor">Vehicles & Motor</option>
            <option value="Art & Collectibles">Art & Collectibles</option>
            <option value="Toys & Kids">Toys & Kids</option>
          </select>

          <label htmlFor="isActive">Active post</label>
          <select
            onChange={this.handleChange}
            id="isActive"
            name="isActive"
            value={isActive}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default ThreadEdit;
