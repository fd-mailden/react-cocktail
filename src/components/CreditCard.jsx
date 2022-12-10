import React from "react";
import cardImg from "../assets/img/modal/card-background.svg";
import InputMask from "react-input-mask";
import { ReactComponent as ErrorIcon } from "../assets/img/error.svg";

function CreditCard({ numberCart, date, cvv, isTokenSuccess }) {

  return (
    <div className="credit-card">
      <img className="credit-card__background" src={cardImg} alt="" />

      <div className="credit-card__inputs">
        <div className="credit-card__card-numbers">
          <label className=" credit-card__label">Card Number</label>
          <InputMask
            maskChar=" "
            value={numberCart.value}
            onChange={(e) => numberCart.onChange(e)}
            onBlur={(e) => numberCart.onBlur(e)}
            mask="9999 / 9999 / 9999 / 9999 "
            className="credit-card__input"
            type="text"
            placeholder="Card Number"
          />
          {numberCart.isDirty && numberCart.isEmpty  && (
            <ErrorIcon className="error_icon" />
          )}
          
        </div>

        <div className="credit-card__bottom-inputs">
          <div className="credit-card__card-numbers">
            <label className=" credit-card__label">Expires</label>
            <InputMask
              value={date.value}
              onChange={(e) => date.onChange(e)}
              onBlur={(e) => date.onBlur(e)}
              mask="99 / 9999"
              maskChar=" "
              className="credit-card__input -bottom"
              type="text"
              placeholder="mm/yy"
            />
            {date.isDirty && date.isEmpty  && (
              <ErrorIcon className="error_icon -bottom_left" />
            )}
           
          </div>
          <div className="credit-card__card-numbers">
            <label className=" credit-card__label">CVV</label>

            <InputMask
              value={cvv.value}
              onChange={(e) => cvv.onChange(e)}
              onBlur={(e) => cvv.onBlur(e)}
              mask="999"
              maskChar=" "
              className="credit-card__input -bottom"
              type="text"
              placeholder="CVV"
            />
            {cvv.isDirty && cvv.isEmpty && (
              <ErrorIcon className="error_icon -bottom_right" />
              
            )}
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CreditCard;
