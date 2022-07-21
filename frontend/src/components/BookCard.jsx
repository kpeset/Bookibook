import { useNavigate } from "react-router-dom";
import("../styles/bookCard.css");


function BookCard({ book, errorImg }) {

const navigate = useNavigate()


const saveIdBook = () => {
localStorage.setItem("isbn", book.industryIdentifiers[0].identifier)
navigate("/details")
}

  return (
    <div className="book-card-content">
      <div className="book-card-picture">
        <img
          alt={book.title}
          src={
            book.imageLinks === undefined ? errorImg : book.imageLinks&&book.imageLinks.smallThumbnail
        }
        />
      </div>
      <div className="book-card-title">
        <h1>{book.title}</h1>
      </div>
      <div className="book-card-auteur">
        <h1>{book.authors}</h1>
      </div>
      <div className="book-card-info">
        <button onClick={saveIdBook}>DETAILS</button>
      </div>
    </div>
  );
}

export default BookCard;
