import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Payment from "../PaymentsComponents/Payment";
import { BsHandThumbsUpFill } from "react-icons/bs";

export class OneProduct extends Component {
  state = {
    oneProduct: null,
    isLoading: true,
    edit: false,
    itemToBuy: null,
    userId: "",
    isLoggedIn: null,
  };

  componentDidMount() {
    const {isLoggedIn, user} = this.props
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
          userId: isLoggedIn ? user._id : "",

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
    const { userId, isLoading, oneProduct, edit, itemToBuy } = this.state;
    const { user, isLoggedIn } = this.props;
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
                  <Card.Img
                    className="one-product-img"
                    src={oneProduct.image}
                  />
                  <Card.Text>{oneProduct.description}</Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: €{oneProduct.price}</ListGroupItem>
                    <br></br>
                  </ListGroup>

                  {oneProduct.addedBy._id === userId && (
                    <>
                      <Button
                        className="product-btn"
                        onClick={this.handleDelete}
                        variant="primary"
                      >
                        Delete
                      </Button>
                      <Link to={`/product/${oneProduct._id}/edit`}>
                        <Button className="product-btn">Edit</Button>
                      </Link>
                    </>
                  )}

                  {edit && <p>Edited</p>}
                  <Button
                    className="product-btn"
                    onClick={() => this.handleClick(oneProduct)}
                  >
                    Buy
                  </Button>
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
