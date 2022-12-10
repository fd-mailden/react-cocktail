import React from 'react'
import classes from './ButtonPay.module.scss';

function ButtonPay({ children, ...props}) {
    return (
      <button {...props} type = 'button' className={classes.btn }>
        {children}
      </button>
    );
  }

export default ButtonPay
