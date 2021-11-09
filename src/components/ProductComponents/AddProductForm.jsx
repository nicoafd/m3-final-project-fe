import axios from "axios";
import React, { Component } from "react";

class AddProductForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
  };

  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: === "price" ? valueAsNumber : event.target.value });
  // };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description, price, category, stock } = this.state;
    axios
      .post(`${process.env.REACT_APP_API_HOST}/product/create`, {
        name,

        description,
        price: Number(price),
        category,
        stock: Number(stock),
      }, {withCredentials: true})
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/500"));
  };

  render() {
    const { name, description, price, category, stock } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
          />

          <label htmlFor="description">Description</label>
          <input
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
          <input
            onChange={this.handleChange}
            type="text"
            name="category"
            value={category}
          />

          <label htmlFor="stock">Stock</label>
          <input
            onChange={this.handleChange}
            type="number"
            name="stock"
            value={stock}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProductForm;
