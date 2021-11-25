import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { Badge, ListGroup } from "react-bootstrap";
import "./Profile2.css";

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
    <div className="scrollable">
      {isLoading ? (
        <RingLoader loading={isLoading} size={50} />
      ) : (
        products.map((product) => {
          return (
            <div className="thread-card">
              <React.Fragment key={product._id}>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{product.name}</div>
                    {product.description}
                  </div>
                  <Link to={`/product/${product._id}`}>
                    <Badge variant="primary" pill>
                      details
                    </Badge>
                  </Link>
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
