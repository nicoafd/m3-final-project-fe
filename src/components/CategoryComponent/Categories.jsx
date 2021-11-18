import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Categories.css";

export class Categories extends Component {
  render() {
    return (
      <div class="container">
        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            class="category-image"
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/mobile_computers_devices_ahinyq.png"
          />
          <Card.Body>
            <Card.Title class="card-text">
              Mobile Computers & Devices
            </Card.Title>
          </Card.Body>
        </Card>

        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            class="category-image"
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/console_videogames_lqyghb.png"
          />
          <Card.Body>
            <Card.Title class="card-text">Consoles & Videogames</Card.Title>
          </Card.Body>
        </Card>

        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            class="category-image"
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/fashion_hwpu6b.png"
          />
          <Card.Body>
            <Card.Title class="card-text">Fashion</Card.Title>
          </Card.Body>
        </Card>

        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/sports_outdoors_kp5cmw.png"
          />
          <Card.Body>
            <Card.Title class="card-text">Sports & Outdoors</Card.Title>
          </Card.Body>
        </Card>

        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            class="category-image"
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/home_garden_f2zga1.png"
          />
          <Card.Body>
            <Card.Title class="card-text">Home & Garden</Card.Title>
          </Card.Body>
        </Card>

        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            class="category-image"
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/health_beauty_vtwx9s.png"
          />
          <Card.Body>
            <Card.Title class="card-text">Health & Beauty</Card.Title>
          </Card.Body>
        </Card>

        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            class="category-image"
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/cinema_book_music_geee25.png"
          />
          <Card.Body>
            <Card.Title class="card-text">Cinema, Books & Music</Card.Title>
          </Card.Body>
        </Card>

        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            class="category-image"
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/vehicle_motor_himq6u.png"
          />
          <Card.Body>
            <Card.Title class="card-text">Vehicles & Motor</Card.Title>
          </Card.Body>
        </Card>

        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            class="category-image"
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/art_collectible_xfmxgn.png"
          />
          <Card.Body>
            <Card.Title class="card-text">Art & Collectibles</Card.Title>
          </Card.Body>
        </Card>

        <Card class="category-card" style={{ width: "7rem" }}>
          <Card.Img
            class="category-image"
            style={{ width: "5rem" }}
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/kid_toy_psfz5w.png"
          />
          <Card.Body>
            <Card.Title class="card-text">Toys & Kids</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Categories;
