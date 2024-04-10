import { React, useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

import Carousel from "./Carousel";
import profile_photo from "../assets/profile_photo.jpg";

import '../styles/home.css';

const Home = () => {
    
    const { darkMode } = useContext(ThemeContext);
    
    return (
        <div className={`home_wrapper ${!darkMode ? "home_wrapper_light" : ""}`}>
            <div className="main_panel_wrapper">

                <div className={`profile_wrapper ${!darkMode ? "profile_wrapper_light" : ""}`}>
                    <img src={profile_photo} />
                    <div className="profile_content">
                        <span>Dr. Omer Yuval</span>
                        <span>Computational neuroscientist</span>
                        <span>Postdoctoral researcher</span>
                        <span>omeryu@tauex.tau.ac.il</span>
                    </div>
                </div>
            
                <Carousel />
            </div>
           
            <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                <span>
                    I am a computational neuroscientist studying how biological nervous systems generate smooth and robust behavior.<br/>
                    I mainly focus on locomotion behaviors, although I am also highly interested in natural language processing.<br/>

                    Developing biologically-grounded models allows me to ask questions and make predictions at multiple levels and across time scales.
                    This includes single neuron activity and network dynamics, muscles, body morphology and mechanics, and interactions with the environment.
                    <br/>
                    My ultimate goal is to distill fundemental principles of nervous system across species, and apply them to artificial systems.
                    {/* My main focus is the control of locomotion, with an emphasis on neural dynamics and form-function relations. */}
                    {/* I have recently finished my PhD at the university of Leeds, UK, and I am now a postdoctoral researcher in Tel Aviv university. */}
                    {/* I am keen to uncover fundemental principles that allow biological neural networks to give rise to complex behaviours. */}
                </span>
            </div>

            <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                <span>Research interests: Neural control of animal locomotion, Biomechanical modelling, Natural language processing</span>
            </div>
            
            <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                <span>Skills: 3D Imaging and Computer vision, Optimisation, Model-free reinforcement learning</span>
            </div>
            
            <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                <span>Programming languages: Python, Matlab, C, React, Javascript, Node.js</span>
            </div>
        </div>
    )
}

export default Home