import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li>
          <Link to="/books">My Books</Link>
        </li>
        <li>
          <Link to="/books/new">Add Book</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/trades">Find Trades</Link>
        </li>
        <li>
          <Link to="/trades_history">Trade History</Link>
        </li>
        <li>
          <Link to="/" >Log In</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
