import React, { useState, useRef } from "react";
import classes from "./Select.module.scss";
import arrow from "../../../assets/img/arrow-select.svg";
import classNames from "classnames";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

function Select(props) {
  const [isActive, setActive] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(false));

  return (
    <div>
      <div className={classes.select}>
        <div
          className={classes.select__selection}
          onClick={() => setActive(!isActive)}
        >
          <h2 className={classes.select__title}>{props.options}</h2>
          <button className={classes.select__button}>
            <img
              className={
                !isActive
                  ? classNames(classes.select__arrow)
                  : classNames(classes["select__arrow--down"])
              }
              src={arrow}
              alt="arrow"
            />
          </button>
        </div>

        {isActive ? (
          <div ref={ref} className={classes.select__items}>
            {props.cocktailCategories.map((item) => (
              <div
                key={item.id}
                className={classes.select__item}
                onClick={() => (props.SelectOption(item), setActive(false))}
              >
                <h2 className={classes.select__itemTitle}>{item.name}</h2>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Select;
