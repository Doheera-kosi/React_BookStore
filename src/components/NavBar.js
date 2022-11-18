import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => (
  <div className="navBar">
    <span className="main-span">
      <span className="Bookstore-CMS Text-Style-5">
        ICAN Bookstore CMS
      </span>
      <ul className="links">
        <Link className="link" to="/">BOOKS</Link>
        <Link className="link" to="/category">CATEGORY</Link>
      </ul>
    </span>
    <span className="Oval">
      <i className="fa fa-lg fa-user" />
    </span>
  </div>
);

export default Navbar;
