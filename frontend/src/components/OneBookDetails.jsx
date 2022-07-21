import("../styles/oneBookDetails.css");

function OneBookDetails({ book, errorImg }) {
  return (
    <div className="onebookdetails-content">
      <div className="onebookdetails-flex">
        <div className="onebookdetails-left-part">
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
            <h1>Catégorie : {book.categories === undefined ? "Non définie" : book.categories}</h1>
          </div>
             
            </div>
          </div>
          <div className="onebookdetails-desc"><h2>RÉSUMÉ</h2><p>{book.description}</p></div>

        </div>

        <div className="onebookdetails-right-part">
          <div className="onebookdetails-book-status">
            <h1>Oups...<br /> Ce livre n'est pas encore disponible pour un échange.</h1>
          </div>
          <div className="onebookdetails-btn-add"><button type="button">AJOUTER A MA LISTE</button></div>
         
        </div>
      </div>
    </div>
  );
}

export default OneBookDetails;
