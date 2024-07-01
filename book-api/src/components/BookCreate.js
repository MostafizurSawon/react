import { useState } from "react";

function BookCreate({onCreate}){
  const [title, setTitle] = useState('');

  const handleChange = (event) =>{
    setTitle(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <div className="main-input">
        <h2>Create a book</h2>
        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <br />
          <input className="input" value={title} onChange={handleChange} />
          <br />
          <button className="button">Create</button>
        </form>
      </div>
      

    </div>
  );
};

export default BookCreate;