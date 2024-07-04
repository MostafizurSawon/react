import { useState } from 'react';
import useBooksContext from '../hooks/use-hook-context';

function BookEdit({book, onSubmit }) {
  const [title, setTitle ] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) =>{
    setTitle(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    // console.log('New title: ', title);
    onSubmit();
    editBookById(book.id, title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <br></br>
      <input className="input" value={title} onChange={handleChange} />
      <br/>
      <button className="button save">Save</button>
      <br/>
    </form>
  )
}

export default BookEdit