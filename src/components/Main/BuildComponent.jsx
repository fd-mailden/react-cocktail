import React from "react";
import background from "../../assets/img/background-bottom.svg";
import { Button } from "../UI";
import bartender from "../../assets/img/home/bl-bartender.jpg";

function BuildComponent() {
  return (
    <section className="build">
      <img className="build__background" src={background} alt="" />
      <div className="build__inner">
        <div className="build__left-img">
          <img className="build__img" src={bartender} alt="" />
          <svg
            className="build__mask"
            width="729"
            height="686"
            viewBox="0 0 729 686"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="build-clip">
              <path
                d="M194.472 668.909C19.1203 702.453 -149.319 583.218 -181.748 402.589C-214.177 221.961 -98.3156 48.3401 77.0359 14.7964C252.387 -18.7474 685.765 -5.83443 718.194 174.794C750.623 355.422 369.823 635.366 194.472 668.909Z"
                fill="#EFE4CF"
              />
            </clipPath>
          </svg>
        </div>

        <div className="build__info">
          <h2 className="main-title">
            Let’s Build Something Great Together
          </h2>
          <p className="main-text">
            Semaj Africa is an online education platform that delivers video
            courses, programs and resources for Individual, Advertising & Media
            Specialist, Online Marketing Professionals, Freelancers and anyone
            looking to pursue a career in digital marketing, Accounting, Web
            development, Programming. Multimedia and CAD design.
          </p>
          <Button>Let’s Talk!</Button>
        </div>
      </div>
    </section>
  );
}

export default BuildComponent;
