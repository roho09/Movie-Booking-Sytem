import React, { useState, usneEffect } from 'react';
import ScreenList from './components/ScreenList';
import ScreenForm from './components/ScreenForm';
import axios from 'axios';

const App = () => {
  const [screens, setScreens] = useState([]);

  const fetchScreens = () => {
    axios.get('/api/screens')
      .then(response => setScreens(response.data))
      .catch(error => console.error('Error fetching screens:', error));
  };

  useEffect(() => {
    fetchScreens();
  }, []);

  return (
    <div className="App">
      <h1>Screen Configuration</h1>
      <ScreenForm refreshScreens={fetchScreens} />
      <ScreenList screens={screens} />
    </div>
  );
};

export default App;
