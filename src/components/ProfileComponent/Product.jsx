import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  const handleProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/product/my-products`, {
        withCredentials: true,
      })
      .then((response) => {
        setProducts([...response.data.products]);
        console.log(products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <React.Fragment key={product._id}>
            <h2>{product.name}</h2>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Product;
