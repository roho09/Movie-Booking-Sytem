import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodMenuList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/food-menu')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching food menu:', error));
  }, []);

  return (
    <div>
      <h2>Food Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodMenuList;
