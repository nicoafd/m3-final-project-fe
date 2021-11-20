import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import "./Forum.css";

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
      .then(() => this.props.history.push("/forum"))
      .catch(() => this.props.history.push("/error"));
  };
  render() {
    const { title, description, category, isActive } = this.state;
    return (
      <div class="create-thread-form">
        <Form class="add-thread-form" onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label htmlFor="title">Thread Title</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="title"
              value={title}
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="description"
              value={description}
              as="textarea"
              rows={3}
            />
          </Form.Group>

          <Form.Select
            onChange={this.handleChange}
            id="category"
            name="category"
            value={category}
          >
            <option>Choose a category...</option>
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
          </Form.Select>
          <br></br>
          <Button type="submit" variant="secondary" size="sm">
            Edit Thread
          </Button>
        </Form>
      </div>
    );
  }
}

export default ThreadEdit;
