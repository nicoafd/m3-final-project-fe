import React, { Component } from "react";
import axios from "axios";
import AddProductForm from "./AddProductForm";
import { Link } from "react-router-dom";
import "./Product.css"

export class OneProduct extends Component {
  state = {
    oneProduct: null,
    isLoading: true,
    edit: false,
  };

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/product/${this.props.match.params.id}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.setState({
          oneProduct: response.data,
          isLoading: false,
          data: response.data.edit,
        });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_HOST}/product/${this.props.match.params.id}`
      )
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/500"));
  };

  render() {
    const { isLoading, oneProduct, edit } = this.state;
    return (
      <div class="one-product-card">
        {isLoading && <h1>...Loading</h1>}
        {!isLoading && (
          <div>
            <h2>{oneProduct.name}</h2>
            <img src={oneProduct.image} alt="item" />
            <p>{oneProduct.description}</p>
            <p>Price: €{oneProduct.price}</p>
            <p>{oneProduct.category}</p>
            {/* <AddProductForm history={this.props.history} /> */}
            {/* <Comments threadId={this.props.match.params} /> */}
            <Link to={`/product/${oneProduct._id}/edit`}>
              <button>Edit</button>
            </Link>

            <button onClick={this.handleDelete}>Delete</button>

            {edit && <p>Edited</p>}
          </div>
        )}
      </div>
    );
  }
}
export default OneProduct;
