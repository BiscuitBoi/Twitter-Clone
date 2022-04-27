import React from 'react';
import { Link } from "react-router-dom";
import './index.css';


function SidebarL() {
  const navStyle = {
    color: 'white',
    textDecoration:'none'
  };
  return(
    <nav className="left">
    <h3>Logo</h3>
    <ul className="nav-links">
    <Link style={navStyle} to='/index'>
    <li>Home</li>
    </Link>
    <Link style={navStyle} to='/'>
    <li>Explore</li></Link>
    <Link style={navStyle} to='/'>
    <li>Notifications</li>
    </Link>
    <Link style={navStyle} to='/'>
    <li>Messages</li>
    </Link>
    <Link style={navStyle} to='/'>
    <li>Bookmarks</li>
    </Link>
    <Link style={navStyle} to='/'>
    <li>Lists</li>
    </Link>
    <Link style={navStyle} to='/'>
    <li>Profile</li>
    </Link>
    <Link style={navStyle} to='/'>
    <li>More</li>
    </Link>
    </ul>
    </nav>
);

}
  export default SidebarL;
