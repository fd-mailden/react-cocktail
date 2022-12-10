import React from "react";
import classes from "./Button.module.scss";
import classNames from "classnames";

function Button({ children, styles, ...props}) {
  return (
    <button {...props} type = 'button'className={ classNames(classes.btn,classes[styles] ) }>
      {children}
    </button>
  );
}

export default Button;
 