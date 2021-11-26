import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import Categories from "../CategoryComponent/Categories";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class AllThreads extends Component {
  state = {
    threadList: [],
    filteredList: [],
    isFiltered: false,
    activeCategory: "",
  };

  handleThreads = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/thread/all`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          threadList: [...response.data],
          filteredList: [...response.data],
        });
      })
      .catch((err) => this.props.history.push("/error"));
  };

  handleFilter = (category) => {
    console.log("filter magic happening!", category);
    const filteredList = this.state.threadList.filter((item) => {
      return item.category.includes(category);
    });

    this.setState({
      filteredList: filteredList,
      isFiltered: true,
      activeCategory: category,
    });
  };

  componentDidMount() {
    this.handleThreads();
  }

  handleTurnOffFilter = () => {
    const { threadList } = this.state;
    this.setState({ isFiltered: false, filteredList: [...threadList] });
  };

  render() {
    const { isLoggedIn } = this.props;
    const { threadList, isFiltered, filteredList, activeCategory } = this.state;
    return (
      <div className="all-thread-container">
        <div class="thread-category-container">
          <Button onClick={() => this.handleTurnOffFilter()}>
            Clear filter
          </Button>
          <h3>Categories Filter</h3>
          <div className="thread-scrollable">
            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Mobile, Computers & Devices")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/mobile_computers_devices_ahinyq.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Mobile Computers & Devices
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Consoles & Videogames")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/console_videogames_lqyghb.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Consoles & Videogames
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Fashion")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/fashion_hwpu6b.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Fashion
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Sports & Outdoors")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/sports_outdoors_kp5cmw.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Sports & Outdoors
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Home & Garden")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/home_garden_f2zga1.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Home & Garden
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Health & Beauty")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/health_beauty_vtwx9s.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Health & Beauty
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Cinema, Books & Music")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/cinema_book_music_geee25.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Cinema, Books & Music
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Vehicles & Motor")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/vehicle_motor_himq6u.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Vehicles & Motor
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Art & Collectibles")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/art_collectible_xfmxgn.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Art & Collectibles
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="thread-category-card"
              onClick={() => this.handleFilter("Toys & Kids")}
            >
              <Card.Img
                class="thread-category-image"
                variant="top"
                src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/kid_toy_psfz5w.png"
              />
              <Card.Body>
                <Card.Title class="thread-category-card-text">
                  Toys & Kids
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div class="category-container-mobile">
            <Form.Select
              onChange={(event) => this.handleFilter(event.target.value)}
              id="category"
            >
              <option>Mobile, Computers & Devices</option>
              <option>Consoles & Videogames</option>
              <option>Fashion</option>
              <option>Sports & Outdoors</option>
              <option>Home & Garden</option>
              <option>Health & Beauty</option>
              <option>Cinema, Books & Music</option>
              <option>Vehicles & Motor</option>
              <option>Art & Collectibles</option>
              <option>Toys & Kids</option>
            </Form.Select>
          </div>
        </div>
        <div class="all-threads">
          {isLoggedIn && (
            <Link to="/create">
              <Button>Create Thread</Button>
            </Link>
          )}

          <h3>Latest Threads</h3>
          {filteredList.length === 0 && (
            <>
              <h4 style={{ color: "red" }}>
                There are no threads for this category.
              </h4>
              <h4 style={{ fontWeight: "bold" }}>
                Be the first to list a thread under this category!
                <Link to="/create">Click Here!</Link>
              </h4>
            </>
          )}
          {isFiltered && (
            <div className="thread-scrollable">
              {filteredList.map((thread) => {
                return (
                  <Card
                    style={{ width: "70vw" }}
                    className="single-thread-card"
                  >
                    <Card.Body key={thread._id}>
                      <Card.Title>
                        Created by: {thread.createdBy.username}
                      </Card.Title>
                      <Card.Title>{thread.title}</Card.Title>
                      <Card.Text>Category: {thread.category}</Card.Text>
                      {/* <Card.Text>{thread.createdAt}</Card.Text> */}
                      <Link to={`/thread/${thread._id}`}>
                        <Button>See Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          )}
          {!isFiltered && (
            <div className="thread-scrollable">
              {threadList.map((thread) => {
                return (
                  <Card
                    style={{ width: "70vw" }}
                    className="single-thread-card"
                  >
                    <Card.Body key={thread._id}>
                      <Card.Title>
                        {/* Created by: {thread.createdBy.username} */}
                      </Card.Title>
                      <Card.Title>{thread.title}</Card.Title>
                      <Card.Text>Category: {thread.category}</Card.Text>
                      {/* <Card.Text>{thread.createdAt.slice(0, 10)}</Card.Text> */}
                      <Link to={`/thread/${thread._id}`}>
                        <Button>See Details</Button>
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

export default AllThreads;
