// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import SeatSelection from './SeatSelection';
import BookingForm from './BookingForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/seats">
            <SeatSelection />
          </Route>
          <Route path="/booking">
            <BookingForm />
          </Route>
          <Route path="/">
            <MovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
