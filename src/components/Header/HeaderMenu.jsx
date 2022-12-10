import React from "react";
import Navigation from "./Navigation";
import { Button } from "../UI";
import cartIcon from "../../assets/img/cart-icon.svg";
import logo from "../../assets/img/logo.svg";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function HeaderMenu({ setMenuActive, menuActive }) {
  const totalCount = useSelector((state) => state.cart.totalCount);
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__navigation">
          <Navigation />
          <button
            onClick={() => navigate("/cart")}
            className="header__cart-icon"
          >
            <div className="header__cart-numbers">
              <p>{totalCount}</p>
            </div>

            <img src={cartIcon} alt="cartIcon" />
          </button>
          <div className="header__buttons">
            <Button>Be A Contributor</Button>
            <Button>Log in</Button>
          </div>
        </div>
        <div className="menu-burger">
          <Link to="/cart">
            <div className="header__cart-icon">
              <div className="header__cart-numbers --mobil">
                <p>{totalCount}</p>
              </div>

              <img src={cartIcon} alt="cartIcon" />
            </div>
          </Link>
          <div
            className="burger-button"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMenu;
