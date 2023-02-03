import React from 'react';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';
import { Button } from './Button';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <img className="logo" src="././images/logo.png" alt="" />
      <ul className="">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#nintendo">NINTENDO</a>
        </li>
        <li>
          <a href="#sony">SONY</a>
        </li>
        <li>
          <a href="#microsoft">MICROSOFT</a>
        </li>
        <li>
          <a href="#sega">SEGA</a>
        </li>
        <li>
          <a href="#outros">OUTROS</a>
        </li>
      </ul>
      <div>
        <Button text="LOGIN" />
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
