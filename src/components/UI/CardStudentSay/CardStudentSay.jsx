import React from "react";
import classes from "./CardStudentSay.module.scss";
import iconText from "../../../assets/img/icon-text.svg";
import student from '../../../assets/img/student.jpg'

function CardStudentSay() {
  return (
    <div className={classes.card}>
      <div className={classes.card__inner}>
        <img className={classes.card__top_icon} src={iconText} alt="iconText" />
        <p className={classes.card__info}>
          Semaj Africa is an online education platform that delivers video
          courses, programs and resources for Individual, Advertising & Media
          Specialist, Online Marketing Professionals, Freelancers and anyone.
        </p>
        <div className={classes.card__user}>
          <img src={student} alt="student" />
          <div className={classes.card__footer}>
            <h3>Arthur Broklyn</h3>
            <p>Categories: 3d Modelling</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardStudentSay;
