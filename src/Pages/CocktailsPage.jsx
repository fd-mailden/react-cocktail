import React, { useState, useEffect } from "react";
import CocktailsGrid from "../components/CocktailsGrid";
import Search from "../components/Search";
import Greeting from "../components/UI/Greeting/Greeting";
import Select from "../components/UI/Select/Select";
import { useSelector, useDispatch } from "react-redux";
import Fade from "react-reveal/Fade";
import useDebounce from "../hooks/useDebounce";
import {
  searchCocktailsRequests,
  filterByDrinks,
  itemForCocktailPageRequests,
} from "../api/cocktailsRequests";

import { ReactComponent as GridInterface } from "../assets/img/grid-interface.svg";
import { ReactComponent as BulletList } from "../assets/img/bullet-list.svg";

function CocktailsPage() {
  const [options, setOptions] = useState("Category");
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(searchQuery, 1000);
  const [isLoading, setLoading] = useState(false);
  const [gridToggle, setGridToggle] = useState(false);
  const relatedCocktails = useSelector(
    (state) => state.cocktails.relatedCocktails
  );
  const cocktailCategories = [
    {
      id: 0,
      name: "All Cocktails",
      typeCocktail: "f",
      category: "a",
      type: "search",
    },
    {
      id: 1,
      name: "Alcoholic",
      typeCocktail: "a",
      category: "Alcoholic",
      type: "filter",
    },
    {
      id: 2,
      name: "Non Alcoholic",
      typeCocktail: "a",
      category: "Non_Alcoholic",
      type: "filter",
    },
    {
      id: 3,
      name: "Ordinary Drink",
      typeCocktail: "c",
      category: "Ordinary_Drink",
      type: "filter",
    },
    {
      id: 4,
      name: "Cocktail",
      typeCocktail: "c",
      category: "Cocktail",
      type: "filter",
    },
    {
      id: 5,
      name: "Cocktail glass",
      typeCocktail: "g",
      category: "Cocktail_glass",
      type: "filter",
    },
    {
      id: 6,
      name: "Champagne flute",
      typeCocktail: "g",
      category: "Champagne_flute",
      type: "filter",
    },
  ];
  function SelectOption(value) {
    setOptions(value.name);
    setLoading(false);
    dispatch(
      filterByDrinks(value.type, value.typeCocktail, value.category)
    ).finally(() => setLoading(true));
  }
  useEffect(() => {
    setLoading(false);
    dispatch(itemForCocktailPageRequests()).finally(() => setLoading(true));
    if (debouncedSearchTerm) {
      setLoading(false);
      dispatch(searchCocktailsRequests(debouncedSearchTerm)).finally(() =>
        setLoading(true)
      );
    }
  }, [debouncedSearchTerm]);

  return (
    <main className="cocktail-page">
      <Greeting />
      <div className="cocktail-page__search">
        <Fade left>
          <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        </Fade>
      </div>
      <div className="cocktail-page__grid">
        <div className="cocktail-page__left">
          <div className="cocktail-page__toggle">
            <BulletList
              onClick={() => setGridToggle(true)}
              className={gridToggle ? "svgIcon_active" : "svgIcon"}
            />
            <GridInterface
              onClick={() => setGridToggle(false)}
              className={!gridToggle ? "svgIcon_active" : "svgIcon"}
            />
          </div>

          {relatedCocktails ? (
            <CocktailsGrid
              isAll="true"
              gridToggle={gridToggle}
              cocktails={relatedCocktails}
              category="true"
              setloading={setLoading}
              isLoading={isLoading}
            />
          ) : (
            <div className="cocktail-page__error">
              <h1 className="cocktail-page__code">404</h1>
              <h1 className="cocktail-page__text">NOT FOUND</h1>
            </div>
          )}
        </div>
        <div className="cocktail-page__right">
          <Select
            cocktailCategories={cocktailCategories}
            SelectOption={SelectOption}
            options={options}
          />
        </div>
      </div>
    </main>
  );
}

export default CocktailsPage;
