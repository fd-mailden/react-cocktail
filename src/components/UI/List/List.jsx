import { Link } from "@mui/material";
import React from "react";
import classes from "./List.module.scss";

function List(props) {
  return (
      <ul className={classes.list}>
        <b className={classes.title}>{props.title}</b>
        {props.list.map((value) => (
         <li key={value.toString()} className={classes.list__item}>
          <Link>  {value}</Link> 
          </li>
        ))}
      </ul>
  );
}

export default List;
