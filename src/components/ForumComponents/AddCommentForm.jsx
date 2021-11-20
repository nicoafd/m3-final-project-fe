import React, { Component } from "react";
import axios from "axios";

class AddCommentForm extends Component {
  state = {
    description: "",
    errorMessage: "",
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
      .catch((err) =>
        this.setState({ errorMessage: err.response.data.errorMessage })
      );
  };

  render() {
    const { description, errorMessage } = this.state;
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

        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
}

export default AddCommentForm;
