import React, {useEffect, useState} from "react";
import axios from "axios"
import ("../styles/bookdetails.css")

function BookDetails() {

const [dataBook, setDataBook] = useState()

    useEffect(() => {
        axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=" +
            ${localStorage.getItem("isbn")} +
            "&maxResults=1`
        )
        .then((res) => setDataBook(res.data.items), console.log(dataBook[0].volumeInfo.title))
        .catch((err) => console.log(err));
    }, [])
   



    
    return (
        <div className="bookdetails-content">
            <div></div>
            <button >clique</button>
        </div>
    )
}

export default BookDetails