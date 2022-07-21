import React, { useEffect, useRef, useState } from "react";
import  axios from "axios";
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

  const [registerValue, setRegisterValue] = useState({
    pseudo: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    //Ici je sauvegarde les states de mon formulaire d'inscription
    if (registerValue.password !== registerValue.checkPassword) {
      alert("Les mots de passe ne sont pas identiques");
    } else {
      axios
        .post("http://localhost:8080/api/register/", {
          pseudo: registerValue.pseudo,
          email: registerValue.email,
          password: registerValue.password,
        })
        .then(function (response) {
          console.log(response);
          alert("Votre compte a été crée avec succès.");
          window.location = "/";
        })
        .catch(function (error) {
          const mailAlreadyExist = error.response.data;
          if (
            mailAlreadyExist ===
            "Votre email est déjà liée à un compte existant."
          ) {
            alert(mailAlreadyExist);
            window.location = "/";
          } else {
            alert("Votre mot de passe doit contenir au moins 6 caractères.");
            window.location = "/";
          }
        });
    }
  };

  const handleChangeRegister = (event) => {
    setRegisterValue({
      ...registerValue,
      [event.target.name]: event.target.value,
    });
  };

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

        <form className="signin-form" onSubmit={handleSubmitRegister}>
          <input
            type="text"
            name="pseudo"
            onChange={handleChangeRegister}
            value={registerValue.pseudo}
            placeholder="Votre pseudo"
            ref={firstFormRef}
          />
          <br />

          <input
            type="email"
            name="email"
            onChange={handleChangeRegister}
            value={registerValue.email}
            placeholder="Votre email"
            ref={secondFormRef}
          />
          <br />

          <input
            type="password"
            name="password"
            onChange={handleChangeRegister}
            ref={thirdFormRef}
            value={registerValue.password}

            placeholder="Choisissez un mot de passe"
          />
          <br />
          <input
            type="password"
            name="checkPassword"
            onChange={handleChangeRegister}
            ref={fourthFormRef}
            value={registerValue.checkPassword}
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
