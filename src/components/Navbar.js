import { React, useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';

import github from "../assets/github.png";
import scholar from "../assets/scholar.png";
import linkedin from "../assets/linkedin.png";
import academic from "../assets/academic.png";
import orcid from "../assets/orcid.png";

import '../styles/navbar.css';
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext);
    
    return (
        <div className="navbarContainer">
            
            <Link to="/"><button className="navbar_link_text">Home</button></Link>

            <div className="user_links_wrapper">
                <Link to="/cv">CV</Link>
            </div>

            <div className="navbar_icons">
                <a className="navbar_icon" href="https://github.com/Omer1Yuval1/" target="_blank"><img className="navbar_img" src={github} alt="GitHub" /></a>
                <a className="navbar_icon" href="https://scholar.google.com/citations?hl=en&user=SaOvLxEAAAAJ&view_op=list_works&sortby=pubdate" target="_blank"><img className="navbar_img" src={scholar} alt="Google Scholar" /></a>
                <a className="navbar_icon" href="https://www.linkedin.com/in/omeryuval/" target="_blank"><img className="navbar_img" src={linkedin} alt="Linkedin" /></a>
                <a className="navbar_icon" href="https://eps.leeds.ac.uk/staff/8789/dr-omer-yuval" target="_blank"><img className="navbar_img" src={academic} alt="Academic Profile" /></a>
                <a className="navbar_icon" href="https://orcid.org/0000-0002-4994-9677" target="_blank"><img className="navbar_img" src={orcid} alt="Orcid" /></a>
            </div>

            <span onClick={() => setDarkMode(!darkMode)} className="material-symbols-outlined toggle_dark_mode">{ darkMode ? "dark_mode" : "light_mode" }</span>
        </div>
    )
}

export default Navbar