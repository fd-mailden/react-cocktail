import React from "react";
import classes from "./Return.module.scss";
import arrowBack from "../../../assets/img/arrow-back.svg";

function Return({ title, ...props }) {
  return (
    <div {...props} className={classes.return}>
      <img className={classes.return__arrow} src={arrowBack} alt="arrowBack" />
      <a className={classes.return__title}>{title}</a>
    </div>
  );
}

export default Return;
