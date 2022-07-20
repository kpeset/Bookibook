import React, { useEffect, useRef} from "react";
import { gsap } from "gsap";

import homePic from "../assets/img_home.jpg";

import("../styles/home.css");

function Home() {


const sloganRef = useRef(null)
const searchRef = useRef(null)

const tl = gsap.timeline();

useEffect(() => {
  tl.from(sloganRef.current, {duration:2, x:1500, opacity: 0})
  tl.to(sloganRef.current, {duration:0, x:1, opacity:1})
  tl.from(searchRef.current, {duration:1, y:100, opacity: 0})
  tl.to(searchRef.current, {duration:1, y:1, opacity: 1})


}, [])


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
    <div className="home-slogan" ref={sloganRef}>
      <h1>Echangez Avec Les <span className="bookipotes">Bookipotes</span> Vos<br /> Livres Déjà Lus</h1>
    </div>
    <div className="home-search" ref={searchRef}>
      <input type="text" placeholder="Rechercher un livre ou un auteur..." />
      <button type="button">Chercher</button>
   </div>
   </div>
  </div>
  );
}

export default Home;
