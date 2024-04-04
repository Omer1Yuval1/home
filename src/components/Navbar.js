import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(true);   

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);
    
    return (
        <div className="navbarContainer">
            
            <Link to="/"><button className="navbar_link_text">Home</button></Link>

            <div className="user_links_wrapper">
                <Link to="/cv">CV</Link>
            </div>

            <span onClick={() => setDarkMode(!darkMode)} className="material-symbols-outlined toggle_dark_mode">{ darkMode ? "dark_mode" : "light_mode" }</span>
        </div>
    )
}

export default Navbar