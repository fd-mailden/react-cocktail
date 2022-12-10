import React from "react";
import classes from "./LinkNavigation.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

function LinkNavigation({ children, ...props }) {
  return (
    <Link
      to={"/" + props.navigation}
      {...props}
      className={props.navigation ? classes.nav : classNames(classes.nav, classes['nav--disabled'])}
    >
      {children}
    </Link>
  );
}

export default LinkNavigation;
