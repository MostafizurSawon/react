import { useState } from 'react';

function BookEdit({book, onSubmit }) {
  const [title, setTitle ] = useState(book.title);

  const handleChange = (event) =>{
    setTitle(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    // console.log('New title: ', title);
    onSubmit(book.id, title);
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