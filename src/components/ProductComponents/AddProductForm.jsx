import axios from "axios";
import React, { Component } from "react";
import RingLoader from "react-spinners/RingLoader";
import "./Product.css";
import Form from "react-bootstrap/Form";
import { InputGroup, Button } from "react-bootstrap";

class AddProductForm extends Component {
  state = {
    name: "",
    image: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    imageIsUploading: false,
    errorMessage: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleImageUpload = (event) => {
    // console.log(event.target.files[0]);
    this.setState({ imageIsUploading: true });
    const uploadData = new FormData();
    uploadData.append("image", event.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_API_HOST}/upload`, uploadData)
      .then((result) => {
        console.log(result);
        this.setState({
          image: result.data.imagePath,
          imageIsUploading: false,
        });
      })
      .catch((err) => this.props.history.push("/error"));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, image, description, price, category, stock } = this.state;
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/product/create`,
        {
          name,
          image,
          description,
          price: Number(price),
          category,
          stock: Number(stock),
        },
        { withCredentials: true }
      )
      .then(() => this.props.history.push("/"))
      .catch((err) =>
        this.setState({ errorMessage: err.response.data.errorMessage })
      );
  };

  render() {
    const {
      name,
      image,
      description,
      price,
      category,
      stock,
      imageIsUploading,
      errorMessage,
    } = this.state;
    return (
      <div class="add-product-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label htmlFor="name">Name of Product</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              placeholder="Enter product"
            />
          </Form.Group>

          <Form.Group
            onChange={this.handleImageUpload}
            controlId="formFileSm"
            className="mb-3"
          >
            <Form.Label htmlFor="image">Image</Form.Label>
            <RingLoader loading={imageIsUploading} size={150} />
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

          <Button
            type="submit"
            disabled={imageIsUploading}
            variant="secondary"
            size="sm"
          >
            Submit Product
          </Button>
          {errorMessage && <p>{errorMessage}</p>}
        </Form>
      </div>
    );
  }
}

export default AddProductForm;
