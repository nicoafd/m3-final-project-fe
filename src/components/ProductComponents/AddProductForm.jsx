import axios from "axios";
import React, { Component } from "react";
import RingLoader from "react-spinners/RingLoader";
import "./Product.css";

class AddProductForm extends Component {
  state = {
    name: "",
    image: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    imageIsUploading: false,
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
      .catch((err) => this.props.history.push("/500"));
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
      .catch(() => this.props.history.push("/500"));
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
    } = this.state;
    return (
      <div>
        <form class="add-product-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
          />

          {image && <img src={this.state.image} alt="product uploaded" />}
          <RingLoader loading={imageIsUploading} size={150} />
          <input onChange={this.handleImageUpload} type="file" name="image" />

          <label htmlFor="description">Description</label>
          <textarea
            rows="8"
            cols="50"
            id="description-input"
            onChange={this.handleChange}
            type="text"
            name="description"
            value={description}
          />

          <label htmlFor="price">Price</label>
          <input
            onChange={this.handleChange}
            type="number"
            name="price"
            value={price}
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
          {/* <input
            onChange={this.handleChange}
            type="text"
            name="category"
            value={category}
          /> */}

          <label htmlFor="stock">Stock</label>
          <input
            onChange={this.handleChange}
            type="number"
            name="stock"
            value={stock}
          />

          <button type="submit" disabled={imageIsUploading}>
            Add Product
          </button>
        </form>
      </div>
    );
  }
}

export default AddProductForm;
