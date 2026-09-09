import { useContext } from "react";
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
                    <img src={profile_photo} alt='Profile picture of Dr. Omer Yuval (ד"ר עומר יובל)' />
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
                    <span className="info_panel_title">Domains of Expertise</span>
                    <ul className="info_panel_content">
                        <li>Mechanical intelligence & autonomous control</li>
                        <li>Adaptive behavior in dynamic environments</li>
                        <li>Real-to-Sim physical modeling</li>
                        <li>Full-cycle software & simulation pipelines</li> {/* Full-cycle software architecture (from raw sensor data to RL simulation) */}
                    </ul>
                    <span className="material-symbols-outlined">psychology</span>
                </div>
                
                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                    <span className="info_panel_title">Core Competencies</span> {/* Skills */}
                    <ul className="info_panel_content">
                        <li>Deep reinforcement learning (RL)</li>
                        <li>Physics-based modeling & simulation</li>
                        <li>Markerless 3D computer vision & tracking</li>
                        <li>Multi-objective optimization algorithms</li>
                        <li>Full-stack web application architecture</li>
                    </ul>
                    <span className="material-symbols-outlined">engineering</span>
                </div>
                
                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                    <span className="info_panel_title">Technical Stack</span>
                    <ul className="info_panel_content">
                        <li><u>Languages</u>: Python, MATLAB, JavaScript, C</li>
                        <li><u>ML & Simulation</u>: MuJoCo, Gymnasium, Stable-Baselines3 (SB3), OpenCV, deep learning-based image segmentation</li>
                        <li><u>Web Frameworks</u>: React, Vite, Node.js, Express, MongoDB</li>
                        <li><u>Infrastructure</u>: Docker, Redis, Linux, Git</li>
                    </ul>
                    <span className="material-symbols-outlined">terminal</span>
                </div>

                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`} style={{"width": "100%"}}>
                    <span className="info_panel_title">More about me...</span>
                    <br/>
                    <span className="info_panel_content">
                        I am a Computational Neuroscientist and Software Engineer (PhD) specializing in reinforcement learning, physical simulations, and full-stack development.<br/><br/>

                        I architect and lead end-to-end computational pipelines—from computer vision and automated object tracking to dynamic modeling and RL-driven simulations.<br/><br/>
                        
                        My primary objective is to advance mechanical intelligence and break the generalization bounds of current AI systems by translating mechanistic insights from biology into robust physical simulations and data-driven control policies.<br/><br/>
                        
                        My experience initiating and leading complex projects has honed my ability to make clear, confident decisions at critical moments—balancing risk and progress through strategic planning, sound software architecture, and real-to-sim experimental design.<br/><br/>
                        This problem-solving approach is fueled by curiosity and shaped through highly collaborative, cross-disciplinary research, where effective teamwork, rigorous logic, and rapid iteration are essential to avoid wasted effort and deliver robust, scalable solutions.<br/><br/>
                        
                        In my free time I enjoy DIY projects, gardening, and hiking.
                    </span>
                </div>
            </div>
            <footer>
                <p>&copy; {new Date().getFullYear()} Dr. Omer Yuval | <span lang="he">ד"ר עומר יובל</span></p>
            </footer>
        </div>
    )
}

export default Home