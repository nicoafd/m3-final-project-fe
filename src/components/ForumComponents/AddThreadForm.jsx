import axios from "axios";
import React, { Component } from "react";

class AddThreadForm extends Component {
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
    const { title, description, category } = this.state;
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/thread/create`,
        {
          title,
          description,
          category,
        },
        { withCredentials: true }
      )
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/500"));
  };

  render() {
    const { title, description, category } = this.state;
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
          <label htmlFor="category">Category:</label>
          <input
            name="category"
            type="text"
            value={category}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default AddThreadForm;
