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
                        <li>Model-free reinforcement learning</li>
                        <li>Physical modeling and simulation</li>
                        <li>3D Imaging and Computer vision</li>
                        <li>Multi-objective optimisation</li>
                        <li>Fullstack web development</li>
                    </ul>
                    <span className="material-symbols-outlined">engineering</span>
                </div>
                
                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`}>
                    <span className="info_panel_title">Programming</span>
                    <ul className="info_panel_content">
                        <li>Python</li>
                        {/* <li>Javascript (React.js + Node.js)</li> */}
                        <li>Full stack development: React, CSS, Node, Express, MongoDB, Docker, Cache (Redis)</li>
                        <li>Matlab</li>
                        <li>C</li>
                    </ul>
                    <span className="material-symbols-outlined">terminal</span>
                </div>

                <div className={`info_panel_wrapper ${!darkMode ? "info_panel_wrapper_light" : ""}`} style={{"width": "100%"}}>
                    <span className="info_panel_title">More about me...</span>
                    <br/>
                    <span className="info_panel_content">
                        I am a Computational Neuroscientist and Software Engineer (PhD) specializing in reinforcement learning, physical simulations, and full-stack development.<br/><br/>

                        I architect and lead end-to-end computational pipelines—from computer vision and automated object tracking to dynamic modeling and RL-driven simulations.<br/><br/>
                        
                        My primary objective is to advance mechanical intelligence and break the generalization bounds of current AI systems by translating mechanistic insights from biology into robust physical simulations using reinforcement learning (RL).<br/><br/>
                        
                        My experience initiating and leading complex projects has honed my ability to make clear, confident decisions at critical moments—balancing risk and progress through strategic questioning, sound software architecture, experimental design, and data management.<br/><br/>
                        This problem-solving approach was shaped through driving cross-disciplinary research, where rigorous logic and agile iteration are essential to avoid wasted effort and deliver robust, scalable solutions.<br/><br/>
                        
                        In my free time I enjoy DIY projects, gardening, and hiking.
                    </span>
                </div>
            </div>
            <footer>
                <p>© 2025 Dr. Omer Yuval | <span lang="he">ד"ר עומר יובל</span></p>
            </footer>
        </div>
    )
}

export default Home