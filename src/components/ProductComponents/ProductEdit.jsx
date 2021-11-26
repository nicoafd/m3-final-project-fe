import React, { Component } from "react";
import axios from "axios";
import "./Product.css";
import { Form, InputGroup } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { BsArrowLeft } from "react-icons/bs";

export class ProductEdit extends Component {
  state = {
    name: "",
    description: "",
    category: "",
    stock: "",
    price: "",
    edit: false,
    errorMessage: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { name, description, category, stock, price } = this.state;
    event.preventDefault();
    axios
      .patch(
        `${process.env.REACT_APP_API_HOST}/product/${this.props.match.params.id}`,
        {
          name,
          description,
          category,
          stock,
          price,
          edit: true,
        },
        { withCredentials: true }
      )
      .then(() => this.props.history.push("/"))
      .catch((err) =>
        this.setState({ errorMessage: err.response.data.errorMessage })
      );
  };

  render() {
    const { name, description, category, price, stock, errorMessage } =
      this.state;
    return (
      <div class="add-product-form">
        <button
          className="goback-btn"
          onClick={() => this.props.history.goBack()}
        >
          <BsArrowLeft />
          Go Back
        </button>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label htmlFor="name">Name of Product</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              placeholder={"Enter product"}
            />
          </Form.Group>

          <Form.Group
            onChange={this.handleImageUpload}
            controlId="formFileSm"
            className="mb-3"
          >
            <Form.Label htmlFor="image">Image</Form.Label>
            <Form.Control type="file" size="sm" />
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

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label htmlFor="price">Price</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">€</InputGroup.Text>
              <Form.Control
                onChange={this.handleChange}
                type="number"
                name="price"
                value={price}
                placeholder="Enter price"
              />
            </InputGroup>
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

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label htmlFor="stock">Stock</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="number"
              name="stock"
              value={stock}
            />
          </Form.Group>

          <Button type="submit" variant="secondary" size="sm">
            Submit Product
          </Button>
          {errorMessage && <p>{errorMessage}</p>}
        </Form>
      </div>
    );
  }
}

export default ProductEdit;
