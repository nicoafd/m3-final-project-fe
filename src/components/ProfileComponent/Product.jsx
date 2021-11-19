import React, { useEffect, useState } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { Badge, ListGroup } from "react-bootstrap";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/product/my-products`, {
        withCredentials: true,
      })
      .then((response) => {
        setProducts([...response.data.products]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <RingLoader loading={isLoading} size={50} />
      ) : (
        products.map((product) => {
          return (
            <div class="product-card">
            <React.Fragment key={product._id}>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{product.name}</div>
                  {product.description}
                </div>
                <Badge variant="primary" pill>
                  details
                </Badge>
              </ListGroup.Item>
              </React.Fragment>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Product;
