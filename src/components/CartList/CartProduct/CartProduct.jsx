import React from "react";
import { ProductCart } from "./style";

export const CartProduct = ({ cartProduct, removeProductFromCart }) => {
  return (
    <ProductCart>
      <img src={cartProduct.img} alt="Imagem do produto" />
      <div>
        <h2>{cartProduct.name}</h2>
        <span>{cartProduct.category}</span>
      </div>
      <p
        onClick={() => {
          removeProductFromCart(cartProduct.id);
        }}
      >
        Remover
      </p>
    </ProductCart>
  );
};
