import React, { useEffect, useRef } from "react";
import axios from "axios"
import { gsap } from "gsap";
import("../styles/oneBookDetails.css");

function OneBookDetails({ book, errorImg }) {

  const leftRef = useRef(null);
  const rightRef = useRef(null);


  const tl = gsap.timeline();

  useEffect(() => {
    tl
	.add('start')
	.fromTo(leftRef.current, { y: -800 }, { y: 1, duration: 1 }, 'start')
	.fromTo(rightRef.current, { y: 800 }, { y: 1, duration: 1 }, 'start')
  }, [])


  const addBook = () => {

    localStorage.setItem("isbn", book.industryIdentifiers[0].identifier)

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
  }

  const gotBook = () => {

    localStorage.setItem("isbn", book.industryIdentifiers[0].identifier)

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
  }


  return (
    <div className="onebookdetails-content">
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
            <p>
              {book.description === undefined
                ? "Pas de résumé de disponible"
                : book.description}
            </p>
          </div>
        </div>

        <div className="onebookdetails-right-part" ref={rightRef}>
          <div className="onebookdetails-book-status">
            <h1>
              Oups...
              <br /> Ce livre n'est pas encore disponible pour un échange.
            </h1>
          </div>
          <div className="onebookdetails-btn-add">
            <button type="button" onClick={addBook}>AJOUTER A MES ENVIES</button>
          </div>
          <div className="onebookdetails-btn-got">
          <button type="button" onClick={gotBook}>JE POSSEDE CE LIVRE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneBookDetails;
