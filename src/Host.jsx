import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Todo from './Todo';
import Home from './Home';
import Contact from './Contact';
import Users from './Users';

const VerticalMenu = () => {
  return (
    <div>
      {/* Vertical Menu */}
      <nav className="vertical-menu">
        <ul>
          <li title="Home">
            <Link to="/">
              {' '}
              <svg height="24px" width="24px">
                <use href="#home" />
              </svg>
            </Link>
          </li>
          <li title="Users">
            <Link to="/users">
              {' '}
              <svg height="24px" width="24px">
                <use href="#users" />
              </svg>
            </Link>
          </li>
          <li title="Todos">
            <Link to="/todo">
              {' '}
              <svg height="24px" width="24px">
                <use href="#todo-list" />
              </svg>
            </Link>
          </li>
          <li title="Contact Info">
            <Link to="/contact">
              {' '}
              <svg height="24px" width="24px">
                <use href="#contact" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default function Host() {
  return (
    <Router>
      <VerticalMenu />
    </Router>
  );
}
