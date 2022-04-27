import React from 'react';
import './index.css';
import SidebarL from './sidebarL.js';
import SidebarR from './sidebarR.js';
import Home from './home.js';
import Explore from './Explore.js';
import Notif from './Notif.js';
import Mess from './Mess.js';
import Book from './Book.js';
import Profile from './Profile.js';
import More from './More.js';






import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>{
    return (
        <BrowserRouter>
        <div className="wrapper">
            <div><SidebarL /></div>
            <div className="mid">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route  path="./Explore" element={<Explore/>}/>
              <Route  path="/Notif" element={<Notif/>}/>
              <Route  path="/Mess" element={<Mess/>}/>
              <Route  path="/Book" element={<Book/>}/>
              <Route  path="/Profile" element={<Profile/>}/>
              <Route  path="/More" element={<More/>}/>
            </Routes>
            </div>
            <div><SidebarR /></div>
            </div>
        </BrowserRouter>
  );
};




export default App;
