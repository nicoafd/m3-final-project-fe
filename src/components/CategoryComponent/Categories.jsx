import React, { Component } from "react";
import { Button, Card, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Categories.css";
import Dropdown from "@restart/ui/esm/Dropdown";

export class Categories extends Component {

  render() {
    return (
      <div class="category-container">
        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/mobile_computers_devices_ahinyq.png"
          />
          <Card.Body>
            <Card.Title className="category-card-text">
              Mobile Computers & Devices
            </Card.Title>
          </Card.Body>
        </Card>

        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/console_videogames_lqyghb.png"
          />
          <Card.Body>
            <Card.Title class="category-card-text">
              Consoles & Videogames
            </Card.Title>
          </Card.Body>
        </Card>

        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/fashion_hwpu6b.png"
          />
          <Card.Body>
            <Card.Title class="category-card-text">Fashion</Card.Title>
          </Card.Body>
        </Card>

        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232639/sports_outdoors_kp5cmw.png"
          />
          <Card.Body>
            <Card.Title class="category-card-text">
              Sports & Outdoors
            </Card.Title>
          </Card.Body>
        </Card>

        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/home_garden_f2zga1.png"
          />
          <Card.Body>
            <Card.Title class="category-card-text">Home & Garden</Card.Title>
          </Card.Body>
        </Card>

        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/health_beauty_vtwx9s.png"
          />
          <Card.Body>
            <Card.Title class="category-card-text">Health & Beauty</Card.Title>
          </Card.Body>
        </Card>

        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/cinema_book_music_geee25.png"
          />
          <Card.Body>
            <Card.Title class="category-card-text">
              Cinema, Books & Music
            </Card.Title>
          </Card.Body>
        </Card>

        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/vehicle_motor_himq6u.png"
          />
          <Card.Body>
            <Card.Title class="category-card-text">Vehicles & Motor</Card.Title>
          </Card.Body>
        </Card>

        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/art_collectible_xfmxgn.png"
          />
          <Card.Body>
            <Card.Title class="category-card-text">
              Art & Collectibles
            </Card.Title>
          </Card.Body>
        </Card>

        <Card className="category-card">
          <Card.Img
            class="category-image"
            variant="top"
            src="https://res.cloudinary.com/db9eiaidf/image/upload/v1637232638/kid_toy_psfz5w.png"
          />
          <Card.Body>
            <Card.Title class="category-card-text">Toys & Kids</Card.Title>
          </Card.Body>
        </Card>

        <div class="category-container-mobile">
          <DropdownButton
            align="end"
            title="Dropdown end"
            id="dropdown-menu-align-end"
          >
            <Dropdown.Item eventKey="1">
              Mobile, Computers & Devices
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Consoles & Videogames</Dropdown.Item>
            <Dropdown.Item eventKey="3">Fashion</Dropdown.Item>
            <Dropdown.Item eventKey="4">Sports & Outdoors</Dropdown.Item>
            <Dropdown.Item eventKey="5">Home & Garden</Dropdown.Item>
            <Dropdown.Item eventKey="6">Health & Beauty</Dropdown.Item>
            <Dropdown.Item eventKey="7">Cinema</Dropdown.Item>
            <Dropdown.Item eventKey="8">Books & Music</Dropdown.Item>
            <Dropdown.Item eventKey="9">Vehicles & Motor</Dropdown.Item>
            <Dropdown.Item eventKey="10">Art & Collectibles</Dropdown.Item>
            <Dropdown.Item eventKey="11">Toys & Kids</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default Categories;
