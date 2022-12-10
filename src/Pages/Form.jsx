import React, { useState } from "react";
import { Button } from "../components/UI";
import { useNavigate } from "react-router-dom";
import Return from "../components/UI/Return/Return";
import ModalWindow from "../components/UI/ModalWindow/ModalWindow";
import ModalCard from "../components/ModalContent/ModalCard";
import ModalSuccessful from "../components/ModalContent/ModalSuccessful";
import { useInput } from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/actions/cartActions";

function Form() {
  const [modalActive, setModalActive] = useState(false);
  const [isSuccessful, setSuccessful] = useState(false);
  const dispatch = useDispatch();

  const fullName = useInput("", { isEmpty: true });
  const country = useInput("", { isEmpty: true });
  const address = useInput("", { isEmpty: true });
  const state = useInput("", { isEmpty: true });
  const zip = useInput("", { isEmpty: true, minLength: 6 });
  const city = useInput("", { isEmpty: true });
  const mobile = useInput("", { isEmpty: true, isPhone: true });
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    setModalActive(true);
  }
  function allSuccessful() {
    localStorage.removeItem("cart");
    dispatch(clearCart())
  }
  function windowClose(){
    setSuccessful(false);
    navigate("/");
    setModalActive(false)
    dispatch(clearCart())
  }

  const validForm =
    !fullName.inputValid ||
    !country.inputValid ||
    !address.inputValid ||
    !city.inputValid ||
    !mobile.inputValid ||
    !state.inputValid ||
    !zip.inputValid;

  return (
    <div className="form cart-container">
      <Return onClick={() => navigate("/cart")} title="Cart" />
      <form className="form__inner" onSubmit={handleSubmit}>
        <h1 className="form__title">Select Your Delivery Information</h1>
        <div className="">
          {fullName.isDirty && fullName.isEmpty && (
            <p className="error">*** Empty line !</p>
          )}
          <input
            value={fullName.value}
            onChange={(e) => fullName.onChange(e)}
            onBlur={(e) => fullName.onBlur(e)}
            className="form__input"
            placeholder="Full Name"
            type="text"
          />
        </div>
        <div className="">
          {country.isDirty && country.isEmpty && (
            <p className="error">*** Empty line !</p>
          )}
          <input
            value={country.value}
            onChange={(e) => country.onChange(e)}
            onBlur={(e) => country.onBlur(e)}
            className="form__input"
            placeholder="Country / Region"
            type="text"
          />
        </div>
        <div className="">
          {address.isDirty && address.isEmpty && (
            <p className="error">*** Empty line !</p>
          )}
          <input
            value={address.value}
            onChange={(e) => address.onChange(e)}
            onBlur={(e) => address.onBlur(e)}
            className="form__input"
            placeholder="Street Address"
            type="text"
          />
        </div>
        <div className="">
          {city.isDirty && city.isEmpty && (
            <p className="error">*** Empty line !</p>
          )}
          <input
            value={city.value}
            onChange={(e) => city.onChange(e)}
            onBlur={(e) => city.onBlur(e)}
            className="form__input"
            placeholder="City"
            type="text"
          />
        </div>
        <div className="">
          {state.isDirty && state.isEmpty && (
            <p className="error">*** Empty line !</p>
          )}
          <input
            value={state.value}
            onChange={(e) => state.onChange(e)}
            onBlur={(e) => state.onBlur(e)}
            className="form__input"
            placeholder="State / Province / Region"
            type="text"
          />
        </div>
        <div className="">
          {zip.isDirty && zip.minLength && (
            <p className="error">*** minimum length 6 characters!</p>
          )}
          <input
            value={zip.value}
            onChange={(e) => zip.onChange(e)}
            onBlur={(e) => zip.onBlur(e)}
            className="form__input"
            placeholder="Zip / Postal Code"
            type="text"
          />
        </div>
        <div className="">
          {mobile.isDirty && mobile.isPhone && (
            <p className="error">*** Phone number is not correct !</p>
          )}
          <input
            value={mobile.value}
            onChange={(e) => mobile.onChange(e)}
            onBlur={(e) => mobile.onBlur(e)}
            className="form__input"
            placeholder="Mobile"
            type="text"
          />
        </div>
        <Button
          disabled={validForm}
          type="submit"
          onClick={() => {
            setModalActive(true);
          }}
          styles="btn--width"
        >
          Save and Ship To This Address
        </Button>
      </form>

      <ModalWindow setActive={setModalActive} active={modalActive}>
        {!isSuccessful ? (
          <ModalCard setSuccessful={setSuccessful} />
        ) : (
          <ModalSuccessful allSuccessful={allSuccessful}  windowClose= {windowClose}/>
        )}
      </ModalWindow>
    </div>
  );
}

export default Form;
