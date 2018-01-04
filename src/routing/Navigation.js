import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
const Header = () => (
  <header className="navigation">
    <nav className="nav">
      <ul>
        <li><Link className ="links" to='/'>Home</Link></li>
        <li><Link className ="links" to='/about'>About Helium.js</Link></li>
        <li><Link className ="links" to ='/contact'>Contact Us</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;