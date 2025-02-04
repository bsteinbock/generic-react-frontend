// src/Login.js

/* Contents of User
        User => {
          fullName: profile.displayName,
          email: profile.emails[0].value,
          picture: profile.photos[0].value,
          googleId: profile.id,
        };
*/

import React, { useState, useEffect, useContext } from 'react';
import Host from './Host.jsx';
import UserContext from './UserContext';

const Login = () => {
  const { authUser, login, logout } = useContext(UserContext);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/v1/auth/user', {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const { user, token } = data;

        login(user, token);
      } catch (error) {
        logout();
      }
    };

    fetchUser();
  }, []);

  const handleLogin = () => {
    // Redirect to backend's Google OAuth route
    window.location.href = '/api/v1/auth/google'; //login route
  };

  const handleLogout = async () => {
    try {
      // Clear session (this would typically involve a logout endpoint on the server)

      const response = await fetch('/api/v1/auth/logout', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        logout();
      } else {
        throw new Error('Logout failed');
      }
    } catch (err) {
      console.error('Logout error', err);
    }
  };
  // TODO: decide on authUser.email or authUser.email
  return (
    <div className="page-container">
      {!authUser ? (
        <div className="page-header">
          <h1>ToDo Login</h1>
          <button className="button-login" onClick={handleLogin}>
            Login with Google
          </button>
        </div>
      ) : (
        <div>
          <div className="page-header">
            <h1>{authUser.email}</h1>
            <button className="button-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <Host />
        </div>
      )}
    </div>
  );
};

export default Login;
