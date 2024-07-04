import { useState } from "react";
import useBooksContext from "../hooks/use-hook-context";

function BookCreate(){
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleChange = (event) =>{
    setTitle(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <div className="main-input">
        <div className="">
        <h1 className="title">Create a book</h1>
        <form onSubmit={handleSubmit}>
          <label className="title">Title: </label>
          <br />
          <input className="input" value={title} onChange={handleChange} />
          <br />
          <button className="button-create">Create</button>
        </form>
        </div>
      </div>
      

    </div>
  );
};

export default BookCreate;