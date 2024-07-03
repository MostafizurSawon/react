import {useContext} from 'react';
import BooksContext from '../context/books.js';
import BookShow from './BookShow.js';

function BookList({books, onDelete, onEdit}) {
  const value = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
  });
  
  return (
    <div className="book-parent">
      {renderedBooks}
      {/* value = {value} */}
    </div>
  )
}

export default BookList