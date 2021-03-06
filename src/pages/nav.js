import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
   <nav>
    <h3>Logo</h3>
    <ul className="nav-links" >
      <Link style={navStyle} to="/pages/about">
         <li>About</li>
      </Link>
      <Link style={navStyle} to="/pages/customer">
        <li>Customer</li>
      </Link>
      <Link style={navStyle} to="/pages/shop">
        <li>Shop</li>
      </Link>
    </ul>
  </nav>
  );
}

export default Nav;
