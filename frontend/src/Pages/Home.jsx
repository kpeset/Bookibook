import { NavLink } from "react-router-dom";

import homePic from "../assets/img_home.jpg";

import("../styles/home.css");

function Home() {

  return (
    <div
      className="home-content"
      style={{
        backgroundImage: `url(${homePic})`,
        backgroundSize: "110vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="home-second-part">
      <div className="home-slogan">
        <h1>Echangez Avec Les <span className="bookipotes">Bookipotes</span> Vos<br /> Livres Déjà Lus</h1>
      </div>
      <div className="home-search">
        <input type="text" placeholder="Rechercher un livre ou un auteur..." />
        <button type="button">Chercher</button>
     </div>
     </div>
    </div>
  );
}

export default Home;
