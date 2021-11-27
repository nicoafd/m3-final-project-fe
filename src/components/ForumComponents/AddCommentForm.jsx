import React, { Component } from "react";
import axios from "axios";
import "./Forum.css";
import Button from "react-bootstrap/Button";

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
        <form onSubmit={this.handleSubmit} className="add-comment-form">
          <input
            className="comment-input"
            type="text"
            name="description"
            placeholder="Write your comment"
            value={description}
            onChange={this.handleChange}
          />
          <Button className="comment-button thread-buttons" type="submit">
            Submit
          </Button>
        </form>

        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
}

export default AddCommentForm;
