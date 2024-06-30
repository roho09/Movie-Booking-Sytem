// security-frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'; // Import your global styles
import Login from './components/Login'; // Import your Login component
import Register from './components/Register'; // Import your Register component
import UserProfile from './components/UserProfile'; // Import your UserProfile component
import Home from './pages/Home'; // Import your Home page component
import Dashboard from './pages/Dashboard'; // Import your Dashboard page component
import NotFound from './pages/NotFound'; // Import your NotFound page component

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <UserProfile />
            <Route path="/dashboard">
  < Dashboard />
</Route>
<Route path="*">
  <NotFound />
</Route>

          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
