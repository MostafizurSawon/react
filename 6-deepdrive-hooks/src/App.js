import './App.css';
import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const { fetchBooks,books } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
      <div className="App">
        <BookCreate />
        <h1 className="book-length">Total Books: {books.length}</h1>
        <BookList />
      </div>
  );
}

export default App;
