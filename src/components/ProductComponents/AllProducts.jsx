import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Payment from "../PaymentsComponents/Payment";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Categories from "../CategoryComponent/Categories";
import Form from "react-bootstrap/Form";
import "./Product.css";

export class AllProducts extends Component {
  state = {
    productList: [],
    isLoading: true,
    itemToBuy: null,
    filteredList: [],
    isFiltered: false,
    categorySelected: "",
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
          filteredList: [...response.data],
        });
      })
      .catch((err) => this.props.history.push("/error"));
  };

  handleFilter = (category) => {
    console.log("filter magic happening!", category);
    const filteredList = this.state.productList.filter((item) => {
      return item.category.includes(category);
    });

    this.setState({
      filteredList: filteredList,
      isFiltered: true,
      categorySelected: category,
    });
  };

  componentDidMount() {
    this.handleProducts();
  }

  handleTurnOffFilter = () => {
    const { productList } = this.state;
    this.setState({ isFiltered: false, filteredList: [...productList] });
  };

  handleClick = (item) => {
    this.setState({ itemToBuy: item });
  };

  render() {
    const {
      productList,
      isLoading,
      itemToBuy,
      isFiltered,
      filteredList,
      categorySelected,
    } = this.state;
    const { isLoggedIn } = this.props;
    return (
      <div>
        <div class="category-container">
          <>
            <Card
              onClick={() => this.handleFilter("Mobile, Computers & Devices")}
              className="category-card"
              name="Mobile, Computers & Devices"
              border="light"
            >
              <Card.Img
                className="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/mobile_computers_devices_ahinyq.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">
                  Mobile Computers & Devices
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              onClick={() => this.handleFilter("Consoles & Videogames")}
              className="category-card"
              border="light"
            >
              <Card.Img
                className="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/console_videogames_lqyghb.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">
                  Consoles & Videogames
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              onClick={() => this.handleFilter("Fashion")}
              className="category-card"
              border="light"
            >
              <Card.Img
                className="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/fashion_hwpu6b.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">Fashion</Card.Title>
              </Card.Body>
            </Card>

            <Card
              onClick={() => this.handleFilter("Sports & Outdoors")}
              className="category-card"
              border="light"
            >
              <Card.Img
                className="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/sports_outdoors_kp5cmw.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">
                  Sports & Outdoors
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              onClick={() => this.handleFilter("Home & Garden")}
              className="category-card"
              border="light"
            >
              <Card.Img
                className="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/home_garden_f2zga1.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">
                  Home & Garden
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              onClick={() => this.handleFilter("Health & Beauty")}
              className="category-card"
              border="light"
            >
              <Card.Img
                className="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/health_beauty_vtwx9s.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">
                  Health & Beauty
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              onClick={() => this.handleFilter("Cinema, Books & Music")}
              border="light"
              className="category-card"
            >
              <Card.Img
                class="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/cinema_book_music_geee25.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">
                  Cinema, Books & Music
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              onClick={() => this.handleFilter("Vehicles & Motor")}
              border="light"
              className="category-card"
            >
              <Card.Img
                className="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/vehicle_motor_himq6u.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">
                  Vehicles & Motor
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              onClick={() => this.handleFilter("Art & Collectibles")}
              border="light"
              className="category-card"
            >
              <Card.Img
                className="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/art_collectible_xfmxgn.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">
                  Art & Collectibles
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              onClick={() => this.handleFilter("Toys & Kids")}
              border="light"
              className="category-card"
            >
              <Card.Img
                className="category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/kid_toy_psfz5w.png"
              />
              <Card.Body>
                <Card.Title className="category-card-text">
                  Toys & Kids
                </Card.Title>
              </Card.Body>
            </Card>
          </>

          <div class="category-container-mobile">
            <p className="product-body-text" style={{ fontWeight: "bold" }}>
              Select a category from the drop-down menu!
            </p>
            <Form.Select
              onChange={(event) => this.handleFilter(event.target.value)}
              id="category"
            >
              <option value="Mobile, Computers & Devices">
                Mobile, Computers & Devices
              </option>
              <option value="Consoles & Videogames">
                Consoles & Videogames
              </option>
              <option value="Fashion">Fashion</option>
              <option value="Sports & Outdoors">Sports & Outdoors</option>
              <option value="Home & Garden">Home & Garden</option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Cinema, Books & Music">
                Cinema, Books & Music
              </option>
              <option value="Vehicles & Motor">Vehicles & Motor</option>
              <option value="Art & Collectibles">Art & Collectibles</option>
              <option value="Toys & Kids">Toys & Kids</option>
            </Form.Select>
          </div>
        </div>
        <div className="product-filter-btn">
          <Button onClick={() => this.handleTurnOffFilter()}>
            Clear filter
          </Button>
        </div>
        <div className="sell-product-btn">
          {isLoggedIn && (
            <Link to="/sell">
              <Button>List Product</Button>
            </Link>
          )}
        </div>
        <div className="all-products product-scrollable">
          <div className="heading-all-products">
            {categorySelected && (
              <>
                <h4>{categorySelected}</h4>
              </>
            )}

            <h3>Latest Products...</h3>
          </div>
          {filteredList.length === 0 && (
            <>
              <h4 style={{ color: "red" }}>
                There are no products for this category.
              </h4>
              <h4 style={{ fontWeight: "bold" }}>
                Be the first to list a product under this category!
                <Link to="/sell">Click Here!</Link>
              </h4>
            </>
          )}
          {isFiltered && (
            <div className="all-product-cards">
              {filteredList.map((product) => {
                return (
                  <Card className="product-card">
                    <Card.Img
                      className="product-card-img"
                      variant="top"
                      src={product.image}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>

                      <Card.Text>{product.category}</Card.Text>

                      <Link to={`/product/${product._id}`}>
                        <Button className="see-details-btn">See Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          )}

          {!isFiltered && (
            <div className="all-products-cards">
              {productList.map((product) => {
                return (
                  <Card className="product-card">
                    <Card.Img
                      className="product-card-img"
                      variant="top"
                      src={product.image}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>

                      <Card.Text>{product.category}</Card.Text>

                      <Link to={`/product/${product._id}`}>
                        <Button className="see-details-btn">See Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AllProducts;
