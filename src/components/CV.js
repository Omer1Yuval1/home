import { React, useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

import '../styles/cv.css';
import cv from "../assets/cv.pdf";

const CV = () => {
    
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`cv_wrapper ${!darkMode ? "cv_light" : ""}`}>
            <iframe src={cv} width="100%" height="90%" />
        </div>
    )
}

export default CV