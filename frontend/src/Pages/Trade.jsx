import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import "../styles/trade.css";

function Trade() {
  const [searchResult, setSearchResult] = useState([]);
  const [errorImg, setErrorImg] = useState(
    "https://image.shutterstock.com/image-vector/block-icon-unavailable-260nw-1336706924.jpg"
  );
  const [search, setSearch] = useState("");

  const uniqueIds = [];

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&maxResults=1"
        )
        .then((res) => setSearchResult(res.data.items), setSearch(""))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=99%20francs")
      .then(function (resp) {
        return resp.data;
      })
      .then((data) => {
        setSearchResult(data.items);
      });
  }, []);



  return (
    <div className="trade-content">
      {/* HEADER */}
      <div className="trade-header">
        <div className="trade-header-title">
          <h1>Les Livres</h1>
        </div>
        <div className="trade-list-search">
          <input
            type="text"
            placeholder="Rechercher un livre ou un auteur..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
          />
          <button type="button">Chercher</button>
        </div>
      </div>

      {/* LISTE DES LIVRES */}
      <div className="trade-list">
        <div className="trade-flex">
          <div className="trade-list-result">
            {searchResult.map((livre) => {
              return <BookCard book={livre.volumeInfo} errorImg={errorImg} />;
            })}
          </div>

          {/* LISTE DES FILTRES */}
          <div className="trade-filter">
            <div className="trade-filter-title">
              <h2>Disponibilités</h2>
              <div className="trade-filter-list">
                <p>Afficher les livres disponibles</p>
              </div>
            </div>
            <div className="trade-filter-title">
              <h2>Catégories</h2>
            </div>

            <div className="trade-filter-list">
              <ul>
                <li>Afficher tout</li>
                <li>Art</li>
                <li>Biographies</li>
                <li>Bandes dessinées</li>
                <li>Les classiques</li>
                <li>Cuisine</li>
                <li>Drames</li>
                <li>Fictions</li>
                <li>Historique</li>
                <li>Humour</li>
                <li>Philosophie</li>
                <li>Photographie</li>
                <li>Poésie</li>
                <li>Psychologie</li>
                <li>Sciences</li>
                <li>Technologie</li>
                <li>Voyages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trade;
