import { React, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Carousel from "./Carousel";

import '../styles/home.css';

const Home = () => {
    // const [subject, setSubject] = useState(null);
    
    return (
        <div className="home_wrapper">
            
            <div className="profile_photo">
                <img src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=SaOvLxEAAAAJ&citpid=1" />
            </div>
            
            <Carousel />
            {/* <Carousel width="30%">
                <div>
                    <img src="https://www.gardeningknowhow.com/wp-content/uploads/2021/07/mole-cricket.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://lh3.googleusercontent.com/pw/AIL4fc_LtNZOnyOKLuW9p3lOIph-wN8rgGBGr3YUNeZnbUDpKR38MAZUA1rrwebDUW46rPLC__SMErdWEjC_MN8QrtVIsbMKokXxHvwHT4FgNB1jScZMculhao97PblbzZE8F7hMB0HPpUc6VJxC0UNbqeCN=w1589-h894-s-no?authuser=0" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://lh3.googleusercontent.com/pw/AIL4fc8yjNCW0qJxvYAd_OLgdXIfEkSWJtpDh5YBiJC2LcjwMjlIOxSSD5uZcpcv-r-aXdgzQOJjtnXMGosblR6sGS2EiAuo8F-s66CuwgUv4dLarIC-j0c_RzfCUWmBpfhSfH_fZ4Mdbrco0yRTUw6W1XCN=w1377-h774-s-no?authuser=0" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            
        </div>
    )
}

export default Home