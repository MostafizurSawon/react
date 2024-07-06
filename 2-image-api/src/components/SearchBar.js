import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    // console.log("tell parent");
    onSubmit(term);
  };

  const handleChange = (event) =>{
    // console.log(event.target.value);
    setTerm(event.target.value);
  };
  
  return (
  <div className="search">
    <form onSubmit={handleFormSubmit}>
      <label>Type something to search</label>
      <br /> <br/>
      <input value={term} onChange={handleChange} className="input-class" type="search" />
    </form>
    
    </div>
  );

}

export default SearchBar;
