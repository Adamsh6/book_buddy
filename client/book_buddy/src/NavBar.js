import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <div className="nav-bar">
      <ul className="nav-links">
      <div className="nav-links-left">
          <li>
            <Link to="/books" className="nav-item">My Books</Link>
          </li>
          <li>
            <Link to="/books/new" className="nav-item">Add Book</Link>
          </li>
          <li>
            <Link to="/trades" className="nav-item">Find Trades</Link>
          </li>
          <li>
            <Link to="/trades_history" className="nav-item">Trade History</Link>
          </li>
        </div>
        <div className="nav-links-login">
          <li>
            <Link to="/" className="nav-item">Log In</Link>
          </li>
        </div>

      </ul>

      </div>
    </header>
  )
}

export default NavBar;
