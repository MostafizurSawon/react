import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [ books, setBooks ] = useState([]);

  const editBookById = (id, newTitle) =>{
    const updatedBooks = books.map((book) => {
      if(book.id === id){
        return {...book, title:newTitle};
      }

      return book;
    });
    setBooks(updatedBooks);;
  };

  const deleteBookById = (id) =>{
    const updatedBooks = books.filter((book)=>{
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    // console.log('Book title:', title);
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 5362), title}
    ];
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1 className="book-length">Books Found: {books.length}</h1>
      <div className="App">
        
        <BookCreate onCreate={createBook} />

        <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      </div>
      
    </div>
    
  );
}

export default App;
