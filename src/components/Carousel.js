import { React, useState, useEffect } from "react";

import '../styles/carousel.css';

import pvd from "../assets/pvd.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import latexs from "../assets/latexs.png";

const Carousel = () => {
    
    const [play, setPlay] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [{src: pvd, caption: "Neuron tracing and quantitative analyses of dendritic architecture reveal symmetrical three-way-junctions and phenotypes of git-1 in C. elegans", url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009185"},
                     {src: a2, caption: "Ilett, T. P., Yuval, O., Ranner, T., Cohen, N., & Hogg, D. C. (2023). 3D shape reconstruction of semi-transparent worms. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (pp. 12565-12575).", url: ""},
                     {src: a3, caption: "a3", url: ""},
                     {src: latexs, caption: "LaTeXs", url: "https://omer1yuval1.github.io/LaTeXs/"},
    ];

    useEffect(() => {
        if(play) {
            const timeout = setTimeout(() => {
                setCurrentPage((currentPage+1) % pages.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
      }, [currentPage, play]);

    return (
        <div className="carousel_wrapper">
            <span onClick={() => setCurrentPage(Math.max(0, currentPage-1))} className="material-icons carousel_next_previous">arrow_back_ios</span> {/* style={{"borderRight": "1px solid gray"}} */}
            
            <div className="carousel_main_wrapper">
                <div className="carousel_main_content_wrapper">
                    <div className="figure_wrapper"><img src={pages[currentPage].src} /></div>
                </div>
                
                <div className="carousel_caption_wrapper">
                    <a href={pages[currentPage].url} target="_blank"><div>{pages[currentPage].caption}</div></a>
                </div>
            </div>
            <span onClick={() => setCurrentPage(Math.min(pages.length-1, currentPage+1))} className="material-icons carousel_next_previous">arrow_forward_ios</span>
            <div className="carousel_controllers_wrapper">
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