import React from 'react';
import ScreenList from './components/ScreenManagement/ScreenList';
import ScreenForm from './components/ScreenManagement/ScreenForm';
import BookingList from './components/BookingManagement/BookingList';
import FoodMenuList from './components/FoodMenuManagement/FoodMenuList';

const App = () => {
  return (
    <div className="App">
      <h1>Admin Panel</h1>
      <ScreenForm refreshScreens={fetchScreens} />
      <ScreenList />
      <BookingList />
      <FoodMenuList />
    </div>
  );
};

export default App;
