import React, { useRef } from "react";

import logo from "../assets/logo_refonte.png";
import "../styles/navbar.css";

function Navbar() {
  const navRef = useRef();

  return (
    <header>
      <div className="navbar-logo">
        <img className="logo" src={logo} alt="logo earthathon" />
      </div>
      <nav ref={navRef}>
          <div className="navbar-first-part">
            <a href="/">Accueil</a>
            <a href="/trade">Echanges</a>
            <a href="/">A Propos</a>
          </div>
          <div className="navbar-second-part">
            <a href="/login">Se Connecter</a>
            <a href="/register" className="btn-register">Créer Un Compte</a>
        </div>


      </nav>

    </header>
  );
}

export default Navbar;
