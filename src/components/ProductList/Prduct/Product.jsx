import React, { Children } from "react";
import { SytledItem, ImageContainer } from "./style";

export const Product = ({ product, addProductToCart }) => {
  return (
    <SytledItem>
      <ImageContainer>
        <img src={product.img} alt="imagem do produto" />
      </ImageContainer>
      <div>
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <p>R$ {product.price}</p>
        <button
          onClick={() => {
            addProductToCart(product);
          }}
        >
          Adicionar
        </button>
      </div>
    </SytledItem>
  );
};
