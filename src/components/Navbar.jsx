import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/beer">All Beers</Link>
      <Link to="/beer/random">Random Beer</Link>
      <Link to="/beer/new">New Beer</Link>
      <Link to="/beer/search?q=1">Search</Link>
    </nav>
  );
};

export default Navbar;
