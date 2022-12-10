import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalRemove from "../components/ModalContent/ModalRemove";
import Table from "../components/Table";
import { Button } from "../components/UI";
import ModalWindow from "../components/UI/ModalWindow/ModalWindow";
import Return from "../components/UI/Return/Return";
import { useSelector, useDispatch } from "react-redux";
import { changeTotalPrice } from "../store/actions/cartActions";
import { clearCart} from "../store/actions/cartActions";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const clearStore = useCallback(() => {
    setModalActive(false);
    navigate("/");
    dispatch(clearCart());
    localStorage.removeItem("cart");
    localStorage.removeItem("count");
  }, []);
  useEffect(() => {
      dispatch(changeTotalPrice());
  }, []);

  return (
    <div className="cart cart-container">
      <Return
        onClick={() => {
          cart.length ? setModalActive(true) : navigate("/cocktails");
        }}
        title="Back"
      />
      <Table setModalActive={setModalActive} itemsCart={cart} />
      <div className="cart__total">
        <div className="total">
          <p className="total__title">Total: </p> <p> ${totalPrice}</p>
        </div>
        <Link to="/cart_form">
          <Button disabled={!totalPrice}>Buy All</Button>
        </Link>
      </div>
      <ModalWindow setActive={setModalActive} active={modalActive}>
        <ModalRemove setModalActive={setModalActive} clearStore={clearStore} />
      </ModalWindow>
    </div>
  );
}

export default Cart;
