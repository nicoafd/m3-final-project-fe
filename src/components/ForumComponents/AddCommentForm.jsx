import React, { Component } from "react";
import axios from "axios";

class AddCommentForm extends Component {
  state = {
    description: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { description } = this.state;
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/comment/create/${this.props.id}`,
        {
          description,
        },
        { withCredentials: true }
      )
      .then(() => this.props.handleComments())
      .catch(() => this.props.history.push("/500"));
  };

  render() {
    const { description } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">comment:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default AddCommentForm;
