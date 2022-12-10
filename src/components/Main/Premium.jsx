import React from "react";
import backgroundIMG from "../../assets/img/background-left-img.svg";
import { Button } from "../UI/index";
import PremiumCard from "../UI/PremiumCard/PremiumCard";
function Premium() {
  return (
    <section className="premium">
      <img
        className="premium__background-img"
        src={backgroundIMG}
        alt="backgroundIMG"
      />
      <div className="premium__inner">
        <div className="premium__plans">
          <div className="plans">
            <h2 className="main-title">
              Our <br /> Pricing Plans
            </h2>
            <p className="main-text">
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for
            </p>
            <Button>Start Free Trial</Button>
          </div>
        </div>
        <div className="premium__price">
          <PremiumCard price="15" time="Monthly" />
          <PremiumCard price="120" time="Annualy" />
        </div>
      </div>
    </section>
  );
}

export default Premium;
