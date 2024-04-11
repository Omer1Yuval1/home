import { React, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import '../styles/carousel.css';

import pvd from "../assets/pvd.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import latexs from "../assets/latexs.png";
import mole_cricket_forward from "../assets/mole_cricket_forward_cropped.mp4";
// import locust_model_mujoco from "../assets/locust_model_mujoco.png";
import locust_model_mujoco from "../assets/locust_and_mole_cricket_models.png";

const Carousel = () => {
    
    const { darkMode } = useContext(ThemeContext);

    const [play, setPlay] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [{src: pvd, caption: "Neuron tracing and quantitative analyses of dendritic architecture reveal symmetrical three-way-junctions and phenotypes of git-1 in C. elegans", url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009185", type: "image"},
                     {src: a2, caption: "3D shape reconstruction of semi-transparent worms", url: "https://openaccess.thecvf.com/content/CVPR2023/papers/Ilett_3D_Shape_Reconstruction_of_Semi-Transparent_Worms_CVPR_2023_paper.pdf", type: "image"},
                     {src: a3, caption: "3D shape reconstruction of semi-transparent worms", url: "https://openaccess.thecvf.com/content/CVPR2023/papers/Ilett_3D_Shape_Reconstruction_of_Semi-Transparent_Worms_CVPR_2023_paper.pdf", type: "image"},
                     {src: latexs, caption: "LaTeXs", url: "https://omer1yuval1.github.io/LaTeXs/", type: "image"},
                     {src: mole_cricket_forward, caption: "Mole cricket control of locomotion", url: "", type: "video"},
                     {src: locust_model_mujoco, caption: "Mechanical models of the desert locust (A) and mole cricket (B)", url: "", type: "image"},
    ];

    useEffect(() => {
        if(play) {
            if(pages[currentPage].type === "image") {
                var delay = 2000;
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
                            <video AutoPlay="true" loop={true} muted controls="controls">
                                <source src={pages[currentPage].src} type="video/mp4" />
                            </video>
                        }
                    </div>
                </div>
                
                <div className="carousel_caption_wrapper">
                    <a href={pages[currentPage].url} target="_blank"><div>{pages[currentPage].caption}</div></a>
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