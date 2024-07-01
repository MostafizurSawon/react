import React from 'react';
import BookShow from './BookShow.js';

function BookList({books, onDelete, onEdit}) {
  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
  });
  
  return (
    <div className="book-parent">
      {renderedBooks}
    </div>
  )
}

export default BookList