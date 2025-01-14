import React, { useState } from 'react';
import './Navbar.css';
import menuBtn from '../../assets/menuBtn.png';
import {motion} from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <motion.a 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      transition={{duration:0.5}}
       className="title" href="/">Portfolio</motion.a>

      <div className="menu">
        <img
          className="menuBtn"
          src={menuBtn}
          alt="Menu Button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`menuItems ${menuOpen ? 'menuOpen' : ''}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Tools&Technologies">Tools & Technologies</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
