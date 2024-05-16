import React from 'react';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <header>
        <Link to={"/"}>
        <h1>XIX ROMANO</h1>
        </Link>
        <nav>
          <Link to={"/Menu"}>Menu</Link>
          <Link to={"/Contact"}>Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;

