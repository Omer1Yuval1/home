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

            <div className="info_wrapper">

                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                    <span className="info_panel_title">Research interests</span>
                    <ul className="info_panel_content">
                        <li>Neural control of animal locomotion</li>
                        <li>Biologically-grounded mechanical modelling</li>
                        <li>Natural language processing</li>
                    </ul>
                </div>
                
                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                    <span className="info_panel_title">Skills</span>
                    <ul className="info_panel_content">
                        <li>3D Imaging and Computer vision</li>
                        <li>Optimisation</li>
                        <li>Model-free reinforcement learning</li>
                        <li>Fullstack development</li>
                    </ul>
                </div>
                
                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                    <span className="info_panel_title">Programming languages</span>
                    <ul className="info_panel_content">
                        <li>Python</li>
                        <li>Javascript (React.js + Node.js)</li>
                        <li>Matlab</li>
                        <li>SQL and mongoDB</li>
                        <li>C</li>
                    </ul>
                </div>

                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`} style={{"width": "100%"}}>
                    <span className="info_panel_title">More about me and my research</span>
                    <br/>
                    <span className="info_panel_content">
                        I am a computational neuroscientist studying how biological nervous systems generate smooth and robust behavior.<br/><br/>
                        I mainly focus on locomotion behaviors, although I am also highly interested in natural language processing.<br/><br/>

                        Developing biologically-grounded models allows me to ask questions and make predictions at multiple levels and across time scales.<br/><br/>
                        This includes single neuron activity and network dynamics, muscles, body morphology and mechanics, and interactions with the environment.<br/><br/>
                        
                        My ultimate goal is to distill fundemental principles of nervous system across species, and apply them to artificial systems.
                        {/* TODO: but why - what do I want to learn from it or achieve? */}
                        
                        {/* My main focus is the control of locomotion, with an emphasis on neural dynamics and form-function relations. */}
                        {/* I have recently finished my PhD at the university of Leeds, UK, and I am now a postdoctoral researcher in Tel Aviv university. */}
                        {/* I am keen to uncover fundemental principles that allow biological neural networks to give rise to complex behaviours. */}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Home