import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserContext.jsx';

const Users = () => {
  const { authToken } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  // Fetch todos from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/v1/users', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('There was an error fetching todos!', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="todo-list-header">
        <h2>Users</h2>
        <div className="todo-header-image">
          <svg height="24px" width="24px" fill="#5f6368">
            <use href="#users" />
          </svg>
        </div>
      </div>

      <div className="todo-list-container">
        <ul className="list-items">
          {users.map((user) => (
            <li key={user.id}>
              <div className="user-name">{user.fullName}</div>
              <div className="user-email">{user.email}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
