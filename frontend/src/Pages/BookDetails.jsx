import React, { useEffect, useState } from "react";
import OneBookDetails from "../components/OneBookDetails";
import axios from "axios";
import("../styles/bookdetails.css");

function BookDetails() {
  const [dataBook, setDataBook] = useState([]);
  const [errorImg, setErrorImg] = useState(
    "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
  );

  useEffect(() => {
    axios
      .get(
          `https://www.googleapis.com/books/v1/volumes?q=isbn:${localStorage.getItem("isbn")}`
      )
      .then((res) => setDataBook(res.data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bookdetails-content">
      {dataBook.map((livre) => {
              return <OneBookDetails book={livre.volumeInfo} errorImg={errorImg} />;
            })}
    </div>
  );
}

export default BookDetails;
