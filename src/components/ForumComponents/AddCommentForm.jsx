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
        `${process.env.REACT_APP_API_HOST}/comment/create`,
        {
          description,
        },
        { withCredentials: true }
      )
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/500"));
  };

  render() {
    const { description } = this.props;
    return (
      <div>
        <form>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddCommentForm;
