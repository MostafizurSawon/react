import { useState } from 'react';
import useBooksContext from '../hooks/use-hook-context';
import BookEdit from './BookEdit';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleClick = () => {
    deleteBookById(book.id);
    // console.log(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () =>{
    setShowEdit(false);
  }

  let content = <h3>{book.title}</h3>;
  if(showEdit){
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="show-books">
      <img src={`https://picsum.photos/seed/$(book.id}/300/200`} alt="random_image" />
      <div>{content}</div>
      <button className="button edit" onClick={handleEditClick} >Edit</button>
      <button className="button" onClick={handleClick}>Delete</button>
    </div>
  )
}

export default BookShow