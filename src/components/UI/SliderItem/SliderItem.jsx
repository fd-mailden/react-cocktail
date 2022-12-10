import React from "react";
import classes from "./SliderItem.module.scss";
import sliderIcon from "../../../assets/img/slider-icon.svg";
import { Button } from "../index";
import happyMan from "../../../assets/img/happyMan.png";

function SliderItem() {
  return (
    <div className={classes.item}>
      <div className={classes.item__inner}>
        <div className={classes.item__info}>
          <h1 className={classes.item__title}>
            Get Access to Unlimited Educational Resources. Everywhere,
            Everytime!
          </h1>
          <p className={classes.item__paragraph}>
            premium access to more than 10,000 resources ranging from courses,
            events e.t.c.
          </p>
          <div className={classes.item__btn}>
            <Button styles="btn--background-white">Get Access</Button>
          </div>
        </div>
        <div className={classes.item__images}>
          <img src={sliderIcon} alt="sliderIcon" />
          <img className={classes.item__human} src={happyMan} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
