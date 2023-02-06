import React from "react";
import Product from "./Prduct";
import { List } from "./style";

export const ProductList = ({ addProductToCart, listOfProducts }) => {
  return (
    <>
      <List>
        {listOfProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            addProductToCart={addProductToCart}
          />
        ))}
      </List>
    </>
  );
};
