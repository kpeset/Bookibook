import React, { useRef, useContext } from "react";
import ExportContext from "../contexts/Contexts";

import logo from "../assets/logo_refonte.png";
import "../styles/navbar.css";

function Navbar() {
  const navRef = useRef();
  const { infoUser } = useContext(ExportContext.Context);

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
          {infoUser === null ? <a href="/login">Se Connecter</a> : ""}

          {infoUser === null ? (
            <a href="/register" className="btn-register">
              Créer Un Compte
            </a>
          ) : (
            <a href="/dashboard" className="btn-register">
              Dashboard
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
