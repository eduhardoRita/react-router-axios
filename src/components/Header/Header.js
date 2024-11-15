import React from "react";
import Logo from "../../assets/earth-logo.gif"
import Navigation from "../Header/Navegation/Navigation";
import "../Header/styles.css"

const Header = () => {
  return (
    <>
      <header>
        <section className="header__section">
          <img src={Logo} />
          <h1>Continentes del mundo y sus paises</h1>
        </section>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
