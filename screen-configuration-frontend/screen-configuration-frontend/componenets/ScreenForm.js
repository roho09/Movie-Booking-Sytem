import React, { useState } from 'react';
import axios from 'axios';

const ScreenForm = ({ refreshScreens }) => {
  const [name, setName] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/screens', { name, capacity })
      .then(() => {
        refreshScreens();
        setName('');
        setCapacity('');
      })
      .catch(error => console.error('Error adding screen:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Capacity:</label>
        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Screen</button>
    </form>
  );
};

export default ScreenForm;
