import axios from "axios";
import React, { Component } from "react";

export class AddThreadForm extends Component {
  state = {
    title: "",
    description: "",
    categories: "",
    isActive: true,
    edit: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { title, description, categories } = this.state;
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/thread/create`,
        {
          title,
          description,
          categories,
        },
        { withCredentials: true }
      )
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/500"));
  };

  render() {
    const { title, description, categories } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
          ></input>
          <input
            name="description"
            type="text"
            value={description}
            onChange={this.handleChange}
          ></input>
          <input
            name="categories"
            type="text"
            value={categories}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default AddThreadForm;
