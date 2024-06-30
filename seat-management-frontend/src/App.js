// seat-management-frontend/src/App.js

import React from 'react';
import SeatList from './components/SeatList';
// import SeatManagement from './components/SeatManagement'; // Uncomment if needed

const App = () => {
  return (
    <div className="App">
      <h1>Seat Management Frontend</h1>
      <SeatList />
      {/* Example for SeatManagement */}
      {/* <SeatManagement seat={{ _id: '1', number: 'A1', available: true }} /> */}
    </div>
  );
};

export default App;
