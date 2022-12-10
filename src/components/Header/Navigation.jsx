import React from "react";
import { LinkNavigation } from "../UI";

function Navigation() {
  return (
    <nav className="navigation">
      <LinkNavigation navigation =" ">Home</LinkNavigation>

      <LinkNavigation navigation ="cocktails">Cocktails</LinkNavigation>

      <LinkNavigation navigation =""> Blog</LinkNavigation>
      <LinkNavigation navigation ="">  About Us</LinkNavigation>
      <LinkNavigation navigation =""> Contact Us</LinkNavigation>
    </nav>
  );
}

export default Navigation;
