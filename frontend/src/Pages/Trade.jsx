import "../styles/trade.css";

function Trade() {
  return (
    <div className="trade-content">
      <div className="trade-header">
        <div className="trade-header-title">
          <h1>Les Livres</h1>
        </div>
      </div>
      <div className="trade-list">liste</div>
      <div className="trade-filter">
        <div className="trade-filter-title">
          <h2>Catégories</h2>
        </div>

        <div className="trade-filter-list">
          <ul>
            <li>Art</li>
            <li>Biographies / Autobiographies</li>
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
