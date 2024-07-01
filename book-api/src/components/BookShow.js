import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({book ,onDelete, onEdit}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () =>{
    setShowEdit(!showEdit);
  }

  const handleClick = () => {
    onDelete(book.id);
    // console.log(book.id);
  };

  const handleSubmit = (id, newTitle) =>{
    setShowEdit(false);
    onEdit(id, newTitle);
  }

  let content = <h3>{book.title}</h3>;
  if(showEdit){
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="show-books">
      <img src={`https://picsum.photos/seed/$(book.id}/300/200`} alt="random_image" />
      <div>{content}</div>
      <button className="button edit" onClick={handleEdit}>Edit</button>
      <button className="button" onClick={handleClick}>Delete</button>
    </div>
  )
}

export default BookShow