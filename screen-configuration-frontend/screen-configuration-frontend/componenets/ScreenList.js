import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScreenList = () => {
  const [screens, setScreens] = useState([]);

  useEffect(() => {
    axios.get('/api/screens')
      .then(response => setScreens(response.data))
      .catch(error => console.error('Error fetching screens:', error));
  }, []);

  return (
    <div>
      <h2>Screen List</h2>
      <ul>
        {screens.map(screen => (
          <li key={screen.id}>{screen.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScreenList;
