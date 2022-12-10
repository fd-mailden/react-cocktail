import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import HeaderMenu from "./components/Header/HeaderMenu";
import MainPage from "./Pages/MainPage";
import { Route, Routes } from "react-router-dom";
import CocktailsPage from "./Pages/CocktailsPage";
import Cart from "./Pages/Cart";
import Form from "./Pages/Form";
import BurgerMenu from "./components/Header/BurgerMenu";
import { useDispatch } from "react-redux";
import {
  addItemFromStore,
  totalCountAction,
  clearCart
} from "./store/actions/cartActions";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const dispatch = useDispatch();
  function dispatchStore() {
      dispatch(clearCart())
    const arrCart = JSON.parse(localStorage.getItem("cart")) || [];
    arrCart.map((item) => {
      dispatch(addItemFromStore(item));
    });
  }
  useEffect(() => {
    const arrCart = JSON.parse(localStorage.getItem("cart")) || [];
    arrCart.map((item) => {
      dispatch(addItemFromStore(item));
    });
    window.onstorage = (e) => {
      if (e.key === "count") {
        let count = e.newValue;
        dispatch(totalCountAction(count));
        dispatchStore();
      }
    };
  }, []);

  return (
    <div className="App">
      <HeaderMenu setMenuActive={setMenuActive} menuActive={menuActive} />
      <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/cart_form" element={<Form />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
