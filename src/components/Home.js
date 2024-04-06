import { React, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Carousel from "./Carousel";

import '../styles/home.css';

const Home = () => {
    // const [subject, setSubject] = useState(null);
    
    return (
        <div className="home_wrapper">
            
            <div className="main_panel_wrapper">
            
                <div className="profile_wrapper">
                    <img src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=SaOvLxEAAAAJ&citpid=1" />
                    <div className="profile_content">
                        <span>Dr. Omer Yuval</span>
                        <span>Postdoctoral researcher</span>
                    </div>
                </div>
            
                <Carousel />
            </div>

            <div className="info_panel_wrapper">
                <span>
                    I am a computational neuroscientist studying the neural control of locomotion.
                    I develop biologically-grounded models that allow me to ask questions and make predictions at multiple levels and across time scales.
                    This includes single neuron activity and network dynamics, muscles, body morphology and mechanics, and interaction with the environment.
                    My main focus is the control of locomotion, with an emphasis on neural dynamics and form-function relations.
                    I have recently finished my PhD at the university of Leeds, UK, and I am now a postdoctoral researcher in Tel Aviv university.
                    I am keen to uncover fundemental principles that allow biological neural networks to give rise to complex behaviours.
                </span>
            </div>

            <div className="info_panel_wrapper">
                <span>Research interests: Neural control of animal locomotion, Mechanical modelling, Natural language processing</span>
            </div>
            
            <div className="info_panel_wrapper">
                <span>Skills: 3D Imaging Computer vision, Model-free reinforcement learning</span>
            </div>
            
            <div className="info_panel_wrapper">
                <span>Programming languages: Python, Matlab, C, React, Javascript, Node.js</span>
            </div>

            
        </div>
    )
}

export default Home