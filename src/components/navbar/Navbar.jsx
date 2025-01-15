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
      whileHover={{scale:1.1}} whileTap={{scale:0.95}}
       className="title" href="/">Portfolio</motion.a>

      <div className="menu">
        <motion.img   whileHover={{scale:1.1}} whileTap={{scale:0.95}}
          className="menuBtn"
          src={menuBtn}
          alt="Menu Button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`menuItems ${menuOpen ? 'menuOpen' : ''}`} onClick={() => setMenuOpen(false)}>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
            <a href="#about">About</a>
          </motion.li>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
            <a href="#Tools&Technologies">Tools & Technologies</a>
          </motion.li>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
            <a href="#blogs">Blogs</a>
          </motion.li>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
