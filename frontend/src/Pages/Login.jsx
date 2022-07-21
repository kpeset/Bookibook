import React, { useEffect, useRef, useState } from "react";
import axios from "axios"
import { gsap } from "gsap";
import loginPic from "../assets/img_login.jpg";
import("../styles/login.css");

function Login() {

  const formRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const firstFormRef = useRef(null);
  const secondFormRef = useRef(null);
  const btnFormRef = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(formRef.current, { x: 2000 }, { x: 1, duration: 2 });
    tl.fromTo(titleRef.current, { opacity: 0 }, { duration: 1, opacity: 1 });
    tl.fromTo(textRef.current, { opacity: 0 }, { duration: 1, opacity: 1 });
    tl.fromTo(firstFormRef.current, { x: 800 }, { x: 0, duration: 1 });
    tl.fromTo(secondFormRef.current, { x: 800 }, { x: 0, duration: 1 });
    tl.fromTo(btnFormRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = (e) => {
    //Ici je sauvegarde les states de mon formulaire d'inscription
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/api/login/",
        {
          email: loginValue.email,
          password: loginValue.password,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response);
        window.location = "/trade";
      })
      .catch(function (error) {
        const mailNotExist = error.response.data;
        if (mailNotExist === "Ce compte n'existe pas.") {
          alert(mailNotExist);
          window.location = "/";
        } else {
          alert("Email ou mot de passe incorrect.");
          window.location = "/";
        }
      });
  };

  const handleChangeLogin = (event) => {
    setLoginValue({
      ...loginValue,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <div
      className="login-content"
      ref={formRef}
      style={{
        backgroundImage: `url(${loginPic})`,
        backgroundSize: "125vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      <div className="login-second-part">
        <div ref={titleRef}>
          <h1>Vous Connecter</h1>
        </div>
        <div ref={textRef}>
          <h2>
            Connectez-vous et regardez les<br /> dernières nouveautés !
          </h2>
        </div>

        <form className="login-form" onSubmit={handleSubmitLogin}>


          <input type="email" name="email" placeholder="Votre email" ref={firstFormRef}     value={loginValue.email}
              onChange={handleChangeLogin}/>
          <br />

          <input
          ref={secondFormRef}
            type="password"
            name="password"
            placeholder="Entrez votre mot de passe"
            value={loginValue.password}
            onChange={handleChangeLogin}
          />
          <br />

          <br />
          <button className="login-btn" type="submit" ref={btnFormRef}>
            VALIDER{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
