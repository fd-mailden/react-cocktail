import React from "react";
import CocktailsGrid from "../CocktailsGrid";
import { Button } from "../UI";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

function Cocktails({isLoading, setIsLoading}) {
  const navigate = useNavigate()
  const cocktails = useSelector((state) => state.cocktails.cocktails);
  return (
    <section className="cocktails">
      <div className="cocktails__inner">
        <div className="cocktails__title">
          <h2 className="main-title">Cocktails</h2>
        </div>
        <CocktailsGrid isAll = {false} cocktails={cocktails}  setIsLoading ={setIsLoading} isLoading= {isLoading}/>
        <div className="cocktails__btn">
          <Button type = 'button' onClick = {()=>navigate('/cocktails')}>All Beers</Button>
        </div>
      </div>
    </section>
  );
}

export default Cocktails;
