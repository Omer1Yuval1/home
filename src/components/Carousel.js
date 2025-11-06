import { React, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import '../styles/carousel.css';

import pvd from "../assets/pvd.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import latexs from "../assets/latexs.png";
import mole_cricket_forward from "../assets/mole_cricket_forward_cropped.mp4";
// import locust_model_mujoco from "../assets/locust_model_mujoco.png";
import locust_model_mujoco from "../assets/anatomy_paper_summary.png";
import insects_video from "../assets/insects_video.mp4";

const Carousel = () => {
    
    const { darkMode } = useContext(ThemeContext);

    const [play, setPlay] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        {
            src: locust_model_mujoco, type: "image",
            caption: "Under review: In this work we developed accurate, anatomically-grounded 3D models of two insects with distinct habitats and specializations. We focused on the effect of passive joint dynamics on locomotion, which cotributes to energy storage and release and rapid recovery from perturbations, and is crucial for designinig robust and energy-efficient robots.",
            // looked into convergent and divergent gait properties in two anatomically distinct insects. We used ",
            // Using mechanical modling + reinfocement learning to compare their simulate, we looked We measured, quatified, and compared their body morphlogy and locomotion , and examined which aspects of their biomechanics and locomotion conver of We use biomechanical modelling and deep reinforcement learning to capture the gaits that we observed in-vivo in simulations. This allows us to make predictions regarding form-function relations in insects. We are currently focusing on stepping gaits in the desert locust (A) and mole cricket (B) (manuscript in preparation)",
            refs: []
        },
        {
            src: pvd, type: "image",
            caption: "In this work we analyzed the morphology of the PVD neuron in wild-type and mutant C. elegans worms. This work included imaging the neurons using confocal microscopy and the development of a custom deep-learning tool for image segmentation and analysis of neuron morphology",
            refs: [
                {text: "Yuval et al., 2021", url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009185"},
                {text: "Iosilevskii et al., 2024", url: "https://www.sciencedirect.com/science/article/pii/S2666166724002284"},
            ],
        },
        {
            src: a2, type: "image",
            caption: "3D imaging, calibration and reconstruction of the 1mm-long C. elegans nematode",
            refs: [
                {text: "Yuval et al., 2022", url: "https://etheses.whiterose.ac.uk/30113/1/PhD_Thesis_Resubmission_20220123.pdf"},
                {text: "Ilett et al., 2023", url: "https://openaccess.thecvf.com/content/CVPR2023/papers/Ilett_3D_Shape_Reconstruction_of_Semi-Transparent_Worms_CVPR_2023_paper.pdf"}
            ]
        },
        {
            src: a3, type: "image",
            caption: "3D shape reconstruction of semi-transparent worms from multiple perspectives",
            refs: [
                {text: "Ilett et al., 2023", url: "https://openaccess.thecvf.com/content/CVPR2023/papers/Ilett_3D_Shape_Reconstruction_of_Semi-Transparent_Worms_CVPR_2023_paper.pdf"}
            ]
        },
        {
            src: latexs, type: "image",
            caption: "LaTeXs: a tool for capturing LaTeX semantics to improve online search and text-to-speech of mathematical expressions",
            refs: [
                {text: "interactive demo", url: "https://omer1yuval1.github.io/LaTeXs/"}
            ]
        },
        {
            src: mole_cricket_forward, type: "video",
            caption: "In this project we are studying the mole cricket, a unique insect with extreme morphological adaptation that lives underground and specialises in tunnel formation (manuscript in preparation).",
            refs: [

            ]
        },
        {
            src: insects_video, type: "video",
            caption: "",
            refs: [
    
            ]
        },
        /* {
        src: locust_model_mujoco, type: "image",
        caption: "We use biomechanical modelling and deep reinforcement learning to capture the gaits that we observed in-vivo in simulations. This allows us to make predictions regarding form-function relations in insects. We are currently focusing on stepping gaits in the desert locust (A) and mole cricket (B) (manuscript in preparation)",
        refs: []
        }, */
    ];

    useEffect(() => {
        if(play) {
            if(pages[currentPage].type === "image") {
                var delay = 3000;
            } else if(pages[currentPage].type === "video") {
                var delay = 6000;
            }

            const timeout = setTimeout(() => {
                setCurrentPage((currentPage+1) % pages.length);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentPage, play]);

    return (
        <div className="carousel_wrapper">
            <span style={{"borderRadius": "15px 0 0 15px"}} onClick={() => setCurrentPage(Math.max(0, currentPage-1))} className={`material-icons carousel_next_previous ${!darkMode ? "carousel_next_previous_light" : ""}`}>arrow_back_ios_new</span> {/* style={{"borderRight": "1px solid gray"}} */}
            
            <div className={`carousel_main_wrapper ${!darkMode ? "carousel_main_wrapper_light" : ""}`}>
                <div className="carousel_main_content_wrapper">
                    <div className="figure_wrapper">
                        {pages[currentPage].type === "image"
                        ?
                            <img src={pages[currentPage].src} />
                        :
                            <video key={pages[currentPage].src} autoPlay={true} loop={false} muted controls="controls">
                                <source src={pages[currentPage].src} type="video/mp4" />
                            </video>
                        }
                    </div>
                </div>
                
                <div className="carousel_caption_wrapper">
                    <div>
                        {pages[currentPage].caption}
                        {pages[currentPage].refs.length > 0 && " ("}
                        {pages[currentPage].refs.map((x, i) => (
                            <span key={i}>
                                {i > 0 && ", "} 
                                <a href={x.url} target="_blank">{x.text}</a>
                            </span>
                        ))}
                        {pages[currentPage].refs.length > 0 && ")."}
                    </div>
                </div>
            </div>
            
            <span style={{"borderRadius": "0 15px 15px 0"}} onClick={() => setCurrentPage(Math.min(pages.length-1, currentPage+1))} className={`material-icons carousel_next_previous ${!darkMode ? "carousel_next_previous_light" : ""}`}>arrow_forward_ios</span>
            
            <div className={`carousel_controllers_wrapper ${!darkMode ? "carousel_controllers_wrapper_light" : ""}`}>
            
                {pages.map((page, i) => (
                    (currentPage === i)
                    ?
                        <span key={i} className="material-icons carousel_buttons">fiber_manual_record</span>
                    :
                        <span key={i} onClick={() => setCurrentPage(i)} className="material-symbols-outlined carousel_buttons">fiber_manual_record</span>

                ))}

                {!play && <span onClick={() => setPlay(true)} className="material-symbols-outlined carousel_buttons">play_circle</span>}
                {play && <span onClick={() => setPlay(false)} className="material-symbols-outlined carousel_buttons">pause_circle</span>}
            </div>
        </div>
    )
}

export default Carousel