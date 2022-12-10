import React from "react";
import unlimitedAccess from "../../assets/img/home/Unlimited_Access.svg";
import learnAnywhere from "../../assets/img/home/Learn_Anywhere.svg";
import expertTeachers from "../../assets/img/home/Expert_Teachers.svg";

function About() {
  return (
    <section className="about">
      <div className="about__item">
        <img
          className="about__image"
          src={unlimitedAccess}
          alt="unlimitedAccess"
        />
        <div className="">
          <h4 className="about__title">Unlimited Access</h4>
          <p className="about__text">
            One subscription unlimited access
          </p>
        </div>
      </div>
      <div className="about__item">
        <img
          className="about__image"
          src={learnAnywhere}
          alt="learnAnywhere"
        />
        <div className="">
          <h4 className="about__title">Expert Teachers</h4>
          <p className="about__text">
            Learn from industry experts who are passionate about teaching
          </p>
        </div>
      </div>
      <div className="about__item">
        <img
          className="about__image"
          src={expertTeachers}
          alt="expertTeachers"
        />
        <div className="">
          <h4 className="about__title">Learn Anywhere</h4>
          <p className="about__text">
            Switch between your computer, tablet, or mobile device.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
