import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navBar">
    <span className="Bookstore-CMS Text-Style-5">
      ICAN Bookstore CMS
    </span>
    <ul className="links">
      <Link className="link" to="/">Book List</Link>
      <Link className="link" to="/category">Category</Link>
    </ul>
    <div className="avatar">Avator</div>
  </div>
);

export default Navbar;
