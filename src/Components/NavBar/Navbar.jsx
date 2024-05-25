import React from 'react';
import './NavBar.css';
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import {useTheme} from '../../common/ThemeContext'

const NavBar = () => {
    const {theme,toggleTheme} = useTheme();
    const Themeicon = (theme === "light")?(sun):(moon);
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#hero" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="#skills" className="navbar-link">Skills</a></li>
        <li className="navbar-item"><a href="#project" className="navbar-link">Projects</a></li>
        <li className="navbar-item"><a href="#about" className="navbar-link">About Me</a></li>
        <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
        <li className="navbar-item">
        <img
            className="colorMode"
            src={Themeicon}
            alt="Color mode Icon"
            onClick={toggleTheme}
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
