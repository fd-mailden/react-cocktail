import React from "react";
import classes from "./PremiumCard.module.scss";
import background from "../../../assets/img/price-card-img.svg";

function PremiumCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.card__inner}>
        <h1 className={classes.card__title}>Premium</h1>
        <div className={classes.card__price}>
          <h2>$</h2>
          <h1>{props.price}</h1>
          <p>/{props.time}</p>
        </div>
        <div className={classes.card__info}>
          <p>
            Semaj Africa is an online education
            <br /> platform that delivers video courses,
            <br /> programs and resources for
          </p>
          <ul>
            <li> Proxima Nova</li>
            <li>Offline Accessibility</li>
            <li>24/7 Supports</li>
            <li>Jobs Opportunity</li>
            <li>2.0% Transaction Fee</li>
            
          </ul>
        </div>
      </div>
      <img
        className={classes.card__background}
        src={background}
        alt="background"
      />
    </div>
  );
}

export default PremiumCard;
