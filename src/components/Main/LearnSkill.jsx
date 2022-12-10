import React from "react";
import bartender from "../../assets/img/home/bartender2.jpg";
import { Button } from "../UI";
import Fade from "react-reveal/Fade";

function LearnSkill() {
  return (
    <section className="learn">
      <div className="learn__inner">
        <Fade left>
          <div className="learn__left-img">
            <img className="learn__img" src={bartender} alt="" />

            <svg
              className="learn__mask"
              width="781"
              height="845"
              viewBox="0 0 781 845"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="learn-clip">
                <path
                  d="M-8.99049 836.918C-240.325 836.785 -427.751 649.533 -427.619 418.678C-427.486 187.823 -239.845 0.78547 -8.51082 0.918203C222.823 1.05094 772.553 119.759 772.421 350.614C772.288 581.469 222.344 837.051 -8.99049 836.918Z"
                  fill="rgba(239,228,207,0)"
                />
              </clipPath>
            </svg>
          </div>
        </Fade>
        <Fade right>
          <div className="learn__content">
            <h2 className="main-title">
              Learn A Skill. <br />
              Build Your Portfolio.<br />
              <b>Get Hired!</b>
            </h2>
            <p className="main-text">
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for Individual, Advertising &
              Media Specialist, Online Marketing Professionals, Freelancers and
              anyone looking to pursue a career in digital marketing,
              Accounting, Web development, Programming. Multimedia and CAD
              design.
            </p>
            <Button>Discover</Button>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default LearnSkill;
