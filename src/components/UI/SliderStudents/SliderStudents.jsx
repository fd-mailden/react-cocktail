import "slick-carousel/slick/slick.css";
import "../../../assets/style/modules/_slick-dots.scss";
import React, { Component } from "react";
import Slider from "react-slick";

import CardStudentSay from "../CardStudentSay/CardStudentSay";

export default class SliderStudents extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  state = {
    slideIndex: 0,
    updateCount: 0,
  };
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  state = {
    slideIndex: 0,
    updateCount: 0,
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };

    return (
      <div >
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <CardStudentSay />
          <CardStudentSay />
          <CardStudentSay />
          <CardStudentSay />
          <CardStudentSay />
          <CardStudentSay />
          <CardStudentSay />
          <CardStudentSay />
        </Slider>
      </div>
    );
  }
}
