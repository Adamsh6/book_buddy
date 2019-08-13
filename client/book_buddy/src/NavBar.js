import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <div className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link to="/books" className="nav-item">My Books</Link>
        </li>
        <li>
          <Link to="/books/new" className="nav-item">Add Book</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/trades">Find Trades</Link>
        </li>
        <li>
          <Link to="/" className="nav-item">Log In</Link>
        </li>

      </ul>

      </div>
    </header>
  )
}

export default NavBar;
