import React from "react";
import classes from "./Greeting.module.scss";
import sliderIcon from "../../../assets/img/slider-icon.svg";
import happyMan from "../../../assets/img/happyMan.png";

function Greeting() {
  return (
    <div className={classes.item}>
      <div className={classes.item__inner}>
        <div className={classes.item__info}>
          <h1 className={classes.item__info_title}>
            Browse Thousands of Our Video Tutorials Curated Only for you.
          </h1>
          <p className={classes.item__info_paragraph}>
            Access all tutorials and resources when you become a premium member
            of Semaj Africa.
          </p>
        </div>
        <div className={classes.item__images}>
          <img src={sliderIcon} alt="sliderIcon" />
          <img className={classes.item__human} src={happyMan} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Greeting;
