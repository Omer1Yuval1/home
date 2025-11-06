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
                        <h1 style={{margin: "0 0 10px 0", font: "inherit"}}>Dr. Omer Yuval</h1>
                        <p style={{margin: "0", font: "inherit"}}>Computational Neuroscientist</p>
                        <p style={{margin: "0", font: "inherit"}}>Postdoctoral Researcher</p>
                        <p style={{margin: "0 0 10px 0", font: "inherit"}}>Software Engineer</p>
                        <span>omeryu@tauex.tau.ac.il</span>
                    </div>
                </div>

                <Carousel />
            </div>

            <div className="info_wrapper">

                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                    <span className="info_panel_title">Research interests</span>
                    <ul className="info_panel_content">
                        <li>Neuromechanical control of animal locomotion</li>
                        <li>Biologically-grounded physical modelling</li>
                        <li>Adaptive behavior and collective motion</li>
                        <li>Mechanically-grounded language models</li>
                    </ul>
                    <span className="material-symbols-outlined">psychology</span>
                </div>
                
                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                    <span className="info_panel_title">Skills</span>
                    <ul className="info_panel_content">
                        <li>3D Imaging and Computer vision</li>
                        <li>Model-free reinforcement learning</li>
                        <li>Multi-objective optimisation</li>
                        <li>Fullstack web development</li>
                    </ul>
                    <span className="material-symbols-outlined">engineering</span>
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
                    <span className="material-symbols-outlined">terminal</span>
                </div>

                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`} style={{"width": "100%"}}>
                    <span className="info_panel_title">More about me and my research</span>
                    <br/>
                    <span className="info_panel_content">
                        I am a computational neuroscientist studying how biological nervous systems generate smooth and robust behavior.<br/><br/>
                        
                        My primary objective is to contribute to breaking the generalization and grounding bounds of current AI systems by using mechanistic insights from biological systems, and by harnessing the power of physical simulation and reinforcement learning (RL).<br/><br/>
                        {/* I mainly focus on locomotion behaviors, although I am also highly interested in natural language processing.<br/><br/> */}
                        
                        {/* Developing biologically-grounded models allows me to ask questions and make predictions at multiple structural levels and across time scales.<br/><br/>
                        This includes single neuron activity and network dynamics, muscles, body morphology and mechanics, and interactions with the environment.<br/><br/> */}
                        
                        {/* My ultimate goal is to distill fundamental principles of nervous system across species, and apply them to artificial systems. */}
                        {/* TODO: but why - what do I want to learn from it or achieve? */}
                        
                        {/* My main focus is the control of locomotion, with an emphasis on neural dynamics and form-function relations. */}
                        {/* I have recently finished my PhD at the university of Leeds, UK, and I am now a postdoctoral researcher in Tel Aviv university. */}
                        {/* I am keen to uncover fundamental principles that allow biological neural networks to give rise to complex behaviours. */}

                        In my free time I enjoy hiking, gardening, and DIY projects.

                        {/* I value open-source and free knowledge sharing */}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Home