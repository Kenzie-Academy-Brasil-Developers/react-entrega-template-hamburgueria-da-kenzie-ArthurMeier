import GlobalStyle from "./styles/global";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import axios from "axios";
import { api } from "./services/api";
import { Body } from "./style";

function App() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [listInCart, setListInCart] = useState([]);

  useEffect(() => {
    async function loadListOfProducts() {
      try {
        const response = await api.get("products", {
          params: {
            limit: 6,
          },
        });
        setListOfProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadListOfProducts();
  });

  const addProductToCart = (product) => {
    if (listInCart.includes(product)) {
      alert("esse item ja esta no carrinho!");
    } else {
      setListInCart([...listInCart, product]);
    }
  };

  const removeProductFromCart = (productId) => {
    const newProductList = listInCart.filter(
      (product) => product.id !== productId
    );
    setListInCart(newProductList);
  };

  return (
    <Body className="App">
      <GlobalStyle />
      <Header />
      <section>
        <ProductList
          addProductToCart={addProductToCart}
          listOfProducts={listOfProducts}
        />

        <CartList
          setListInCart={setListInCart}
          removeProductFromCart={removeProductFromCart}
          listInCart={listInCart}
        />
      </section>
    </Body>
  );
}

export default App;
