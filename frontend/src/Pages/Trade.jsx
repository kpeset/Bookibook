import BookCard from "../components/BookCard";
import "../styles/trade.css";

function Trade() {
  return (
    <div className="trade-content">
      {/* HEADER */}
      <div className="trade-header">
        <div className="trade-header-title">
          <h1>Les Livres</h1>
        </div>
      </div>

      {/* LISTE DES LIVRES */}
      <div className="trade-list">
        <div className="trade-list-search">
          <input
            type="text"
            placeholder="Rechercher un livre ou un auteur..."
          />
          <button type="button">Chercher</button>
        </div>
        <div className="trade-list-result">
          <BookCard />
        </div>
      </div>

      {/* LISTE DES FILTRES */}
      <div className="trade-filter">
        <div className="trade-filter-title">
          <h2>Disponibilités</h2>
          <div className="trade-filter-list">
            <ul>
              <li>Afficher les livres disponibles</li>
            </ul>
          </div>
        </div>
        <div className="trade-filter-title">
          <h2>Catégories</h2>
        </div>

        <div className="trade-filter-list">
          <ul>
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
  );
}

export default Trade;
