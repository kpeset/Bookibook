import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import registerPic from "../assets/img_register.jpg";
import("../styles/register.css");

function Register() {
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const firstFormRef = useRef(null);
  const secondFormRef = useRef(null);
  const thirdFormRef = useRef(null);
  const fourthFormRef = useRef(null);
  const btnFormRef = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(formRef.current, { x: -2000 }, { x: 1, duration: 2 });
    tl.fromTo(titleRef.current, { opacity: 0 }, { duration: 1, opacity: 1 });
    tl.fromTo(textRef.current, { opacity: 0 }, { duration: 1, opacity: 1 });
    tl.fromTo(firstFormRef.current, { x: -800 }, { x: 1, duration: 1 });
    tl.fromTo(secondFormRef.current, { x: -800 }, { x: 1, duration: 1 });
    tl.fromTo(thirdFormRef.current, { x: -800 }, { x: 1, duration: 1 });
    tl.fromTo(fourthFormRef.current, { x: -800 }, { x: 1, duration: 1 });
    tl.fromTo(btnFormRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div
      className="register-content"
      ref={formRef}
      style={{
        backgroundImage: `url(${registerPic})`,
        backgroundSize: "110vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="register-second-part">
        <div ref={titleRef}>
          <h1>Nous Rejoindre</h1>
        </div>
        <div ref={textRef}>
          <h2>
            Enregistrez-vous sur Bookibook et ayez accès à la plus grande
            communauté de partage de livres !
          </h2>
        </div>

        <form className="signin-form">
          <input
            type="text"
            name="pseudo"
            placeholder="Votre pseudo"
            ref={firstFormRef}
          />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            ref={secondFormRef}
          />
          <br />

          <input
            type="password"
            name="password"
            ref={thirdFormRef}
            placeholder="Choisissez un mot de passe"
          />
          <br />
          <input
            type="password"
            name="checkPassword"
            ref={fourthFormRef}
            placeholder="Vérifiez votre mot de passe"
          />
          <br />
          <button className="signin-btn" type="submit" ref={btnFormRef}>
            VALIDER{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
