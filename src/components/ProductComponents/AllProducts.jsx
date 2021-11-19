import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Payment from "../PaymentsComponents/Payment";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
      <div class="all-products">
        <h3>Latest Products</h3>
        {productList.length && (
          <>
            {productList.map((product) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <button onClick={() => this.handleClick(product)}>
                      Buy
                    </button>
                    {itemToBuy && itemToBuy._id === product._id && (
                      <Payment itemToBuy={itemToBuy} />
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default AllProducts;
