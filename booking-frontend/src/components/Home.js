import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is where you can provide information about your application.</p>
      <div className="link-container">
        <Link to="/login" className="link">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Link>
        <Link to="/signup" className="link">
          <FontAwesomeIcon icon={faUserPlus} /> Signup
        </Link>
      </div>
    </div>
  );
}

export default Home;
