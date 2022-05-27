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
    <Link style={navStyle} to='/'>
    <li>Home</li>
    </Link>
    <Link style={navStyle} to='/Explore'>
    <li>Explore</li></Link>
    <Link style={navStyle} to='/Notif'>
    <li>Notifications</li>
    </Link>
    <Link style={navStyle} to='/Mess'>
    <li>Messages</li>
    </Link>
    <Link style={navStyle} to='/Book'>
    <li>Bookmarks</li>
    </Link>
    <Link style={navStyle} to='/Lists'>
    <li>Lists</li>
    </Link>
    <Link style={navStyle} to='/Profile'>
    <li>Profile</li>
    </Link>
    <Link style={navStyle} to='/More'>
    <li>More</li>
    </Link>
    </ul>
    </nav>
);

}
  export default SidebarL;
