import React, { useCallback } from "react";
import CocktailsItem from "./UI/CocktailsItem/CocktailsItem";
import { useDispatch } from "react-redux";
import { addCartAction } from "../store/actions/cartActions";
import Skeleton from "./UI/Skeleton/Skeleton";
import BigCardCocktail from "./UI/BigCardCocktail/BigCardCocktail";
import addToStorage from "../helpers/addToStorage";

function CocktailsGrid({ cocktails, category, isLoading, gridToggle, isAll }) {
  const dispatch = useDispatch();
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const addToCart = useCallback((value) => {
    const data = {
      categoryName: value.categoryName,
      dateModified: today,
      idDrink: value.idDrink,
      price: value.price,
      quantity: value.quantity,
      strDrink: value.strDrink,
      strDrinkThumb: value.strDrinkThumb,
      total_price: value.total_price,
      isBuy: true,
    };
    dispatch(addCartAction(data));
    addToStorage(data);
  }, []);

  return (
    <div className="cocktails-grid ">
      <div className="row">
        {!isAll
          ? cocktails.map((value, index) => {
              if (index <= 11) {
                return (
                  <CocktailsItem
                    cocktail={value}
                    key={value.idDrink}
                    addToCart={addToCart}
                    key={index}
                   
                    category={category}
                  />
                );
              }
            })
          : cocktails.map((value, index) =>
              !isLoading ? (
                <Skeleton key={value.idDrink} />
              ) : gridToggle ? (
                <BigCardCocktail
                  cocktail={value}
                  key={value.idDrink}
                  addToCart={addToCart}
                />
              ) : (
                <CocktailsItem
                  cocktail={value}
                  key={value.idDrink}
                  addToCart={addToCart}
                  key={index}
                  className="cockt-4"
                  category={category}
                />
              )
            )}

        {}
      </div>
    </div>
  );
}

export default CocktailsGrid;
