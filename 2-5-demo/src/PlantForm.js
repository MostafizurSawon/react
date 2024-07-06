// src/PlantForm.js
import React, { useState } from 'react';

function PlantForm() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [user, setUser] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title,
      price,
      category,
      user,
      image,
      description,
      quantity,
    };

    fetch('http://127.0.0.1:8000/plants/plant-list/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Reset form fields
        setTitle('');
        setPrice('');
        setCategory('');
        setUser('');
        setImage('');
        setDescription('');
        setQuantity('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="number" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>User:</label>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PlantForm;
