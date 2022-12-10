import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { SliderItem } from "../index";

import Slider from "react-slick";

import classes from "./SliderComponent.module.scss";
import arrowPrevious from "../../../assets/img/slider-arrow-previous.svg";
import arrowNext from "../../../assets/img/slider-arrow-next.svg";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };

    return (
      <div className={classes.slider}>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </Slider>
        <div className={classes.slider__btn}>
          <button className={classes.btn_previous} onClick={this.previous}>
            <img src={arrowPrevious} alt="arrowPrevious" />
          </button>
          <button className={classes.btn_next} onClick={this.next}>
            <img src={arrowNext} alt="arrowPrevious" />
          </button>
        </div>
      </div>
    );
  }
}
