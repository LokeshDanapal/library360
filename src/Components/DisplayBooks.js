import React from "react";

export default function DisplayBooks({ bookData }) {
  return (
    <div className="container">
      <div className="book-read">
        {bookData.map((book) => (
          <div className="book" key={book.id}>
           <a href = {book.volumeInfo.previewLink}>
            <div className="cover">
              {book.volumeInfo.imageLinks && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              )}
            </div>
            <div className="description">
              <p className="title">{book.volumeInfo.title}</p>
              <p className="author">{book.volumeInfo.authors}</p>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
