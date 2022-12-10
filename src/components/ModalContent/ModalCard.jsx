import React from "react";
import ButtonPay from "../UI/ButtonPay/ButtonPay";
import { ReactComponent as BagIcon } from "../../assets/img/modal/bag.svg";
import CreditCard from "../CreditCard";
import { useInput } from "../../hooks/useInput";
import { tokenRequests } from "../../api/cocktailsRequests";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

function ModalCard({ setSuccessful }) {
  const dispatch = useDispatch();
  const isTokenSuccess = useSelector((state) => state.cart.isTokenSuccess);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const numberCart = useInput("", { isEmpty: true });
  const dateCart = useInput("", { isEmpty: true });
  const cvv = useInput("", { isEmpty: true });
  const { enqueueSnackbar } = useSnackbar();
  const validCart =
    !numberCart.inputValid || !dateCart.inputValid || !cvv.inputValid;

  const dataCard = {
    type: "card",
    number: numberCart.value.replace(/[/ ]/g, ""),
    expiry_month: dateCart.value.substr(0, 2),
    expiry_year: dateCart.value.substr(4, 5),
    cvv: cvv.value,
  };
  function postCard() {
    dispatch(tokenRequests(dataCard))
      .then((res) => {
        enqueueSnackbar("201 Success", {
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar("422 Card number invalid ", {
          variant: "error",
        });
      });
    setSuccessful(isTokenSuccess);
  }

  return (
    <div className="modal-card">
      <h1 className="modal-card__title">Card</h1>
      <hr />
      <div className="modal-card__card">
        <CreditCard
          numberCart={numberCart}
          date={dateCart}
          cvv={cvv}
          isTokenSuccess={isTokenSuccess}
        />
      </div>
      <ButtonPay disabled={validCart} onClick={() => postCard()}>
        <div className="modal-card__button">
          <BagIcon />
          <p>Pay: #{totalPrice}.00</p>
        </div>
      </ButtonPay>
    </div>
  );
}

export default ModalCard;
