import React from "react";
import studentsIcon_1 from "../../assets/img/students/students_icon-1.svg";
import studentsIcon_2 from "../../assets/img/students/students_icon-2.svg";
import studentsIcon_3 from "../../assets/img/students/students_icon-3.svg";
import studentsIcon_4 from "../../assets/img/students/students_icon-4.svg";

function AboutStudents() {
  return (
    <section className="students">
      <div className="students__inner">
        <div className="students__item">
          <img
            className="students__image"
            src={studentsIcon_1}
            alt="studentsIcon_1"
          />
          <div className="students__info">
            <h2 className="students__title">5,679</h2>
            <p className="students__text">Registered Students</p>
          </div>
        </div>
        <div className="students__item">
          <img
            className="students__image"
            src={studentsIcon_2}
            alt="studentsIcon_2"
          />
          <div className="students__info">
            
            <h2 className="students__title">2,679</h2>
            <p className="students__text">
              Student has been helped to achieve their dreams
            </p>
          </div>
        </div>
        <div className="students__item">
          <img
            className="students__image"
            src={studentsIcon_3}
            alt="studentsIcon_3"
          />
          <div className="students__info">
            <h2 className="students__title">10,000</h2>
            <p className="students__text">
              More than 10,000 people visits our site monthly
            </p>
          </div>
        </div>
        <div className="students__item">
          <img
            className="students__image"
            src={studentsIcon_4}
            alt="studentsIcon_4"
          />
          <div className="students__info">
            <h2 className="students__title">#10</h2>
            <p className="students__text">
              Ranked among the top 10 growing online learning startups in West
              Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStudents;
