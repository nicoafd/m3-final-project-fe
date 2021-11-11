import axios from 'axios';
import React, { Component } from 'react'

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
        this.setState({
          productList: [...response.data.products],
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
        {productList.length && (
          <>
            {productList.map((product) => {
              return (
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.category}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default AllProducts
