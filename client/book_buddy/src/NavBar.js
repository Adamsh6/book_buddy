import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <div className="nav-bar">
      <ul className="nav-links">
<<<<<<< HEAD
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
=======
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
            <Link to="/wishlist" className="nav-item">Wish List</Link>
          </li>
        </div>
        <div className="nav-links-login">
          <li>
            <Link to="/" className="nav-item">Log In</Link>
          </li>
        </div>
>>>>>>> fda3fe9cbce6f9536cfa062416e47a45470d9ba8

      </ul>

      </div>
    </header>
  )
}

export default NavBar;
