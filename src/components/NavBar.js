/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <div className="navBar">
      <div className="Logo">
        My Book Store 
      </div>
      <ul className="links">
        <Link className="link" to="/">Book List</Link>
        <Link className="link" to="/category">Category</Link>
      </ul>
    </div>
    )
  }

export default Navbar;