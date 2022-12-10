import React from "react";
import logo from "../../assets/img/logo.svg";
import facebook from "../../assets/img/social-media/facebook.svg";
import twitter from "../../assets/img/social-media/twitter.svg";
import youtube from "../../assets/img/social-media/youtube.svg";
import dribbble from "../../assets/img/social-media/dribbble.svg";
import List from "../UI/List/List";

function Footer() {
  const Quicklinks = [
    "Home",
    "Beers",
    "About Us",
    "Contact Us",
    "Become A Contributor",
  ];
  const Contact = [
    " (+55) 254. 254. 254",
    "Info@lsemajafrica.com",
    "Helios Tower 75 Tam Trinh Hoang",
    "Mai - Ha Noi - Viet Nam",
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__about">
          <div className="footer__logo">
            <img src={logo} alt="logo" />
          </div>
          <p className="footer__about-paragraph">
            Semaj Africa is an online education platform that delivers video
            courses, programs and resources.
          </p>
          <div className="footer__social-media">
            <a href="">
              <img
                className="footer__social-media-img"
                src={facebook}
                alt="facebook"
              />
            </a>
            <a href="">
              <img
                className="footer__social-media-img"
                src={twitter}
                alt="twitter"
              />
            </a>
            <a href="">
              <img
                className="footer__social-media-img"
                src={youtube}
                alt="youtube"
              />
            </a>
            <a href="">
              <img
                className="footer__social-media-img"
                src={dribbble}
                alt="dribbble"
              />
            </a>
          </div>
        </div>
        <div className="footer__navigation">
            
          <List title="Quicklinks" list={Quicklinks} />
        </div>
        <div className="footer__contact">
          <List title="Contact Us" list={Contact} />
        </div>
        <div className="footer__faq">
          <p className="footer__faq-paragraph">Terms and Conditions</p>
          <p className="footer__faq-paragraph">Faq</p>
        </div>
      </div>
      <div className="footer__company">
        <div className="footer__inner">
          <p className="footer__company-paragraph">
            All Right Reserved | GOGE AFRICA 2019
          </p>
          <div className="footer__privacy-policy">
            <p className="footer__company-paragraph"> Privacy Policy </p>
            <p className="footer__company-paragraph"> Site</p>
            <b> Credit</b>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
