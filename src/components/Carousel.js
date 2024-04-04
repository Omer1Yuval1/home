import { React, useState } from "react";

import '../styles/carousel.css';

const Carousel = () => {
    
    const [play, setPlay] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [0,1,2,3,4];
    
    return (
        <div className="carousel_wrapper">
            <div className="carousel_main_wrapper">
                <div className="carousel_main_content_wrapper">
                    
                    <span className="material-icons carousel_buttons">arrow_back_ios</span>
                    <div>image</div>
                    <span className="material-icons carousel_buttons">arrow_forward_ios</span>
                </div>
                
                <div className="carousel_caption_wrapper">
                    <div>caption</div>
                </div>
            </div>
            
            <div className="carousel_controllers_wrapper">
                {pages.map((page, i) => (
                    (currentPage === i)
                    ?
                        <span className="material-icons carousel_buttons">fiber_manual_record</span>
                    :
                        <span onClick={() => setCurrentPage(i)} className="material-symbols-outlined carousel_buttons">fiber_manual_record</span>

                ))}

                {!play && <span onClick={() => setPlay(true)} className="material-symbols-outlined carousel_buttons">play_circle</span>}
                {play && <span onClick={() => setPlay(false)} className="material-symbols-outlined carousel_buttons">pause_circle</span>}
            </div>
        </div>
    )
}

export default Carousel