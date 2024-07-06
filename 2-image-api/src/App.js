import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchImages from './Api';
import ImageList from './components/ImageList';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // console.log("Search with term: " + term);
    const result = await SearchImages(term);
    // console.log(result);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
