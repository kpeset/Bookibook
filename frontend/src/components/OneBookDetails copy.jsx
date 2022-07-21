import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import("../styles/oneBookDetails.css");

function OneBookDetails({ book, errorImg }) {
  const [userList, setUserList] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.add("start")
      .fromTo(leftRef.current, { y: -800 }, { y: 1, duration: 1 }, "start")
      .fromTo(rightRef.current, { y: 800 }, { y: 1, duration: 1 }, "start");
  }, []);

  const addBook = () => {
    localStorage.setItem("isbn", book.industryIdentifiers[0].identifier);

    axios.put(
      "http://localhost:8080/api/addBook/",
      {
        email: localStorage.getItem("utilisateur"),
        bookiwant: localStorage.getItem("isbn"),
      },
      {
        withCredentials: true,
      }
    );
  };

  const gotBook = () => {
    localStorage.setItem("isbn", book.industryIdentifiers[0].identifier);

    axios.put(
      "http://localhost:8080/api/gotBook/",
      {
        email: localStorage.getItem("utilisateur"),
        bookigot: localStorage.getItem("isbn"),
      },
      {
        withCredentials: true,
      }
    );
  };

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/usersBook/", {
        finduserbook: localStorage.getItem("isbn"),
      })
      .then((res) => setUserList(res.data), setIsLoading(false), )
      .catch((err) => console.log(err));
  }, []);


const test = () => {
  console.log(userList.length)
}



  const myComponent = () => {


    
    return (
    <div className="onebookdetails-flex">
        <div className="onebookdetails-left-part" ref={leftRef}>
          <div className="onebookdetails-border-picture">
            <div className="onebookdetails-picture">
              <img
                alt={book.title}
                src={
                  book.imageLinks === undefined
                    ? errorImg
                    : book.imageLinks && book.imageLinks.smallThumbnail
                }
              />
            </div>
            <div className="onebookdetails-about-book">
              <div className="onebookdetails-title">
                <h1>{book.title}</h1>
              </div>
              <div className="onebookdetails-auteur">
                <h1>Auteur : {book.authors}</h1>
              </div>
              <div className="onebookdetails-editeur">
                <h1>Publié par {book.publisher}</h1>
              </div>
              <div className="onebookdetails-date">
                <h1>Date de publication : {book.publishedDate}</h1>
              </div>
              <div className="onebookdetails-categorie">
                <h1>
                  Catégorie :{" "}
                  {book.categories === undefined
                    ? "Non définie"
                    : book.categories}
                </h1>
              </div>
            </div>
          </div>
          <div className="onebookdetails-desc">
            <h2>RÉSUMÉ</h2>
            <p></p>
          </div>
        </div>

        <div className="onebookdetails-right-part" ref={rightRef}>
          <div className="onebookdetails-book-status">
            { userList.length === undefined || userList === undefined || userList.length === 0 ? <div>Oups</div> : <div>Pas oups</div>}
          </div>
          <div className="onebookdetails-btn-add">
            <button type="button" onClick={addBook}>
              AJOUTER A MES ENVIES
            </button>
          </div>
          <div className="onebookdetails-btn-got">
            <button type="button" onClick={gotBook}>
              JE POSSEDE CE LIVRE
            </button>
            <button type="button" onClick={test}>
              test
            </button>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className="onebookdetails-content">
        {isLoading ? <div>Loading...</div> : myComponent()}

    </div>
  );
}

export default OneBookDetails;
