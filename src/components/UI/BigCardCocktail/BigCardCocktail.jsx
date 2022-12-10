import React from "react";
import classes from "./BigCardCocktail.module.scss";
import cart from "../../../assets/img/cart-icon-for-card.svg";

function BigCardCocktail({ cocktail, ...props }) {
  return (
    <div className={classes.card}>
      <div className={classes.card__inner}>
        <img
          className={classes.card__image}
          src={cocktail.strDrinkThumb}
          alt="imgDrink"
        />
        <div className={classes.card__info}>
          <p className={classes.card__instructions}>
            <b>Instructions: </b>
            Pour all ingredients in to cocktail shaker, mix and serve ove ice a
            chilled glass
          </p>
          <div className={classes.card__recept}>
            <b>Measure: </b>
            <ul className={classes.card__list}>
              <li>1 3/4 shot</li>
              <li>1 shot</li>
            </ul>
            <b>Ingredients: </b>
            <ul className={classes.card__list}>
              <li>Gin</li>
              <li>Grant Marnier</li>
              <li>Lemon Juice</li>
            </ul>
          </div>
          <img
            onClick={() => {
              props.addToCart(cocktail);
            }}
            className={classes.card__cart}
            src={cart}
            alt="cart"
          />
        </div>
      </div>
      <div className={classes.card__title}>
        <p className={classes.card__paragraph}>{cocktail.strDrink}</p>
      </div>
    </div>
  );
}

export default BigCardCocktail;
