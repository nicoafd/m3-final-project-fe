import React, { Component } from "react";
import { Button, Card, DropdownButton, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



export class Categories extends Component {
  state = {

  }

  render() {
    return (
      <div class="category-container">
        <>
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
              <Card.Title class="category-card-text">
                Health & Beauty
              </Card.Title>
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
              <Card.Title class="category-card-text">
                Vehicles & Motor
              </Card.Title>
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
        </>
        <div class="category-container-mobile">
          <Form.Select>
            <option>All</option>
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
    );
  }
}

export default Categories;
