import axios from "axios";
import React, { Component } from "react";

export class AllProducts extends Component {
  state = {
    productList: [],
  };

  handleProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/product/all`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          productList: [...response.data],
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.handleProducts();
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        <h1>TEST</h1>
        {productList.length && (
          <>
            {productList.map((product) => {
              return (
                <React.Fragment key={product._id}>
                  <h4>{product.name}</h4>
                  <p>{product.category}</p>
                </React.Fragment>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default AllProducts;
