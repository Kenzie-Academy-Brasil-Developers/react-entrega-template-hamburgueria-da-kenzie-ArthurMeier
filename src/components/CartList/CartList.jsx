import React from "react";
import Product from "../ProductList/Prduct";
import CartProduct from "./CartProduct";
import { StyledContainer, Title, List } from "./style";

export const CartList = ({
  removeProductFromCart,
  listInCart,
  setListInCart,
}) => {
  function cartPrice(listInCart) {
    let totalPrice = 0;
    listInCart.forEach((product) => {
      totalPrice = totalPrice + product.price;
    });
    return totalPrice;
  }

  function renderCart(listInCart) {
    if (listInCart.length > 0) {
      return (
        <List>
          <ul>
            {listInCart.map((cartProduct) => (
              <CartProduct
                key={cartProduct.id}
                cartProduct={cartProduct}
                removeProductFromCart={removeProductFromCart}
              />
            ))}
          </ul>
          <div>
            <h2>Total</h2>
            <span>R$ {cartPrice(listInCart)}</span>
          </div>
          <button
            onClick={() => {
              setListInCart([]);
            }}
          >
            Remover todos
          </button>
        </List>
      );
    } else {
      return (
        <List>
          <h3>Sua sacola está vazia</h3>

          <p>Adicione um item</p>
        </List>
      );
    }
  }

  return (
    <StyledContainer>
      <Title>
        <p>Carrinho de compras</p>
      </Title>
      {renderCart(listInCart)}
    </StyledContainer>
  );
};
