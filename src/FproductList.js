import { Fproduct } from "./Fproduct";
import { useEffect, useState } from "react";
import { API } from "./global";

export function FproductList() {
  const [productList, setProductList] = useState([]);

  const getProduct = () => {
    fetch(`${API}/flipkart`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setProductList(mvs));
  };

  useEffect(() => getProduct(), []);

  return (
    <div className="product-list">
      {productList.map(
        ({ image, tittle, rating, price, finalpricewithoffer, id }, index) => (
          <Fproduct
            key={index}
            image={image}
            tittle={tittle}
            rating={rating}
            price={price}
            finalpricewithoffer={finalpricewithoffer}
            id={id}
          />
        )
      )}
    </div>
  );
}
