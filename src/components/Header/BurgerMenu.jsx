import React from "react";
import { Button, LinkNavigation } from "../UI";

function BurgerMenu({ setMenuActive, menuActive }) {
  return (
    <div
      className={menuActive ? "burger active" : "burger"}
      onClick={() => setMenuActive(false)}
    >
      <div className="blur" />
      <div className="burger__navigation">
        <div className="burger__navigation-inner">
          <LinkNavigation navigation=" ">Home</LinkNavigation>
          <LinkNavigation navigation="cocktails">Cocktails</LinkNavigation>
          <LinkNavigation navigation=""> Blog</LinkNavigation>
          <LinkNavigation navigation=""> About Us</LinkNavigation>
          <LinkNavigation navigation=""> Contact Us</LinkNavigation>
        </div>
        <div className="burger__buttons">
          <Button>Be A Contributor</Button>
          <Button>Log in</Button>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
