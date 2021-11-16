import axios from "axios";
import React, { Component } from "react";
import Payment from "../PaymentsComponents/Payment";

export class AllProducts extends Component {
  state = {
    productList: [],
    isLoading: true,
    itemToBuy: null,
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

  handleClick = (item) => {
    this.setState({ itemToBuy: item });
  };

  render() {
    const { productList, isLoading, itemToBuy } = this.state;
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

                  <button onClick={() => this.handleClick(product)}>Buy</button>
                  {itemToBuy && itemToBuy._id === product._id && (
                    <Payment itemToBuy={itemToBuy} />
                  )}
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
