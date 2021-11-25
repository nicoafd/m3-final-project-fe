import React, { Component } from "react";
import axios from "axios";
import AddProductForm from "./AddProductForm";
import { Link } from "react-router-dom";
import "./Product.css";
import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Payment from "../PaymentsComponents/Payment"

export class OneProduct extends Component {
  state = {
    oneProduct: null,
    isLoading: true,
    edit: false,
    itemToBuy: null,
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
        console.log(response);
        this.setState({
          oneProduct: response.data,
          isLoading: false,
          data: response.data.edit,
        });
      })
      .catch((err) => this.props.history.push("/error"));
  }

  // FOR STRIPE
  handleClick = (item) => {
    this.setState({ itemToBuy: item });
  };

  handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_HOST}/product/${this.props.match.params.id}`
      )
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/error"));
  };

  render() {
    const { isLoading, oneProduct, edit, itemToBuy } = this.state;
    return (
      <div class="one-product-card">
        {isLoading && <h1>...Loading</h1>}
        {!isLoading && (
          <>
            <div>
              <Card className="text-center">
                <Card.Header>{oneProduct.category}</Card.Header>
                <Card.Body>
                  <Card.Title>{oneProduct.name}</Card.Title>
                  <Card.Img src={oneProduct.image} />
                  <Card.Text>{oneProduct.description}</Card.Text>
                  <Card.Text>Price: €{oneProduct.price}</Card.Text>
                  <Button onClick={this.handleDelete} variant="primary">
                    Delete
                  </Button>
                  <Link to={`/product/${oneProduct._id}/edit`}>
                    <Button>Edit</Button>
                  </Link>
                  {edit && <p>Edited</p>}
                  <button onClick={() => this.handleClick(oneProduct)}>
                    Buy
                  </button>
                  {itemToBuy && itemToBuy._id === oneProduct._id && (
                    <Payment itemToBuy={itemToBuy} />
                  )}
                </Card.Body>
                <Card.Footer className="text-muted">
                  Added by {oneProduct.addedBy.username}
                </Card.Footer>
              </Card>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default OneProduct;
