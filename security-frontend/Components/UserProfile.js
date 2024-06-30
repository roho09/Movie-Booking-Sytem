// security-frontend/src/components/UserProfile.js
import React, { useState } from 'react';

const UserProfile = () => {
  // Example user data (replace with actual data or fetch from backend)
  const [user, setUser] = useState({
    username: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatarUrl: 'https://example.com/avatar.jpg', // Replace with actual avatar URL
  });

  const handleEditProfile = () => {
    // Implement edit profile functionality
    console.log('Edit profile');
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-details">
        <div className="user-avatar">
          <img src={user.avatarUrl} alt={`Avatar of ${user.username}`} />
          <p>{user.username}</p>
        </div>
        <div className="user-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>
      </div>
      <button onClick={handleEditProfile}>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
