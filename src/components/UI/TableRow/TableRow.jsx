import React from "react";
import classes from "./TableRow.module.scss";
import close from "../../../assets/img/close.svg";

function TableRow({ setNumberValue, itemCart, removeItemCart }) {
  return (
    <div className={classes.table_row}>
      <div className={classes.table_row__item}>
        <div className={classes.product}>
          <img
            className={classes.product__image}
            src={itemCart.strDrinkThumb}
            alt="cocktail"
          />
          <div className={classes.product__details}>
            <h3 className={classes.product__name}>{itemCart.strDrink}</h3>
            <p className={classes.product__date}>{itemCart.dateModified}</p>
          </div>
        </div>
        <div className={classes.quantity}>
          <button
            className={classes.quantity__button}
            onClick={() => setNumberValue(itemCart.idDrink, false)}
          >
            -
          </button>
          <p className={classes.quantity__input}>{itemCart.quantity}</p>
          <button
            className={classes.quantity__button}
            onClick={() => setNumberValue(itemCart.idDrink, true)}
          >
            +
          </button>
        </div>
      </div>
      <div className={classes.table_row__item}>
        <div className={classes.table__price}>${itemCart.price}</div>
        <div className={classes.table__total}>
          <div className={classes.total}>
            <p className={classes.total__title}>Total:</p>
            <p>${itemCart.total_price}</p>
          </div>
        </div>
        <button
          onClick={() => removeItemCart(itemCart.idDrink)}
          type="button"
          className={classes.table__delete}
        >
          <img className={classes.table__img} src={close} alt="close" />
        </button>
      </div>
    </div>
  );
}

export default TableRow;
