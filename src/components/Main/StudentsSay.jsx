import React from "react";
import SliderStudents from "../UI/SliderStudents/SliderStudents";

function StudentsSay() {
  return (
    <section className="students-say">
      <div className="students-say__info">
        <h2 className="main-title">What Students Say</h2>
        <p className="main-text">
          Semaj Africa is an online education platform that delivers video
          courses, programs and resources for Individual, Advertising & Media
          Specialist,.
        </p>
      </div>
      <div className="students-say__slider">
          <SliderStudents/>
      </div>
    </section>
  );
}


export default StudentsSay;
