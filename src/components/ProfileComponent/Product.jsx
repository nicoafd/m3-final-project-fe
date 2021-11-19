import React, { useEffect, useState } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";

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
            <div class="">
            <React.Fragment key={product._id}>
              <h2 class="material-icons text-info mr-2" >{product.name}</h2>
              <p>{product.category}</p>
            </React.Fragment>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Product;
