import React, { Component } from "react";
import axios from "axios";
import AddProductForm from "./AddProductForm";


export class OneProduct extends Component {
  state = {
    oneProduct: null,
    isLoading: true,
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
        this.setState({ oneProduct: response.data, isLoading: false });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { isLoading, oneProduct } = this.state;
    return (
      <div>
        <h2>One Thread</h2>
        {isLoading && <h1>...Loading</h1>}
        {!isLoading && (
          <div>
            <h2>{oneProduct.title}</h2>
            <p>{oneProduct.description}</p>
            <p>{oneProduct.category}</p>
            {/* <AddProductForm history={this.props.history} /> */}
            {/* <Comments threadId={this.props.match.params} /> */}
          </div>
        )}
      </div>
    );
  }
}
export default OneProduct;
