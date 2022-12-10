import React from "react";
import classes from "./CocktailsItem.module.scss";
import cartIcon from "../../../assets/img/cart-icon-for-card.svg";
import classNames from "classnames";

function CocktailsItem({ cocktail, ...props }) {
  return (

    /* <div className="card-wrap">
    <div className="card">
      <figure>
        <img src="" alt="" />
      </figure>

      <div className="card-inner">
        <h3 className="card-inner__title"></h3>
      </div>
    </div>

    </div> */
    <div className={classNames(classes['cockt-3'],classes['cockt-2'],classes['cockt-1'])}>
      <div {...props} className={classes.card}>
        {props.category ? (
          <div className={classes.card__category}>
            <p className={classes.card__category_name}>
              {cocktail.categoryName}
            </p>
          </div>
        ) : null}
        <figure className={classes.card__figure}>
          <img
            className={classes.card__img}
            src={cocktail.strDrinkThumb}
            alt="cocktail"
          />
        </figure>
        <div className={classes.card__info}>
          <p className={classes.card__text}>{cocktail.strDrink}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            props.addToCart(cocktail);
          }}
          className={
            props.category
              ? classes.card__cart
              : classNames(classes.card__cart, classes["card__cart--position"])
          }
        >
          <img src={cartIcon} alt="cart" />
        </button>
      </div>
    </div>
  );
}

export default CocktailsItem;
