import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header";
import Footer from "../Footer";
import background from '../../img/background.png';
import happyStories1 from '../../img/happy-stories-1.PNG';
import happyStories2 from '../../img/happy-stories-2.PNG';
import happyStories3 from '../../img/happy-stories-3.PNG';
import happyStories4 from '../../img/happy-stories-4.PNG';
import happyStories5 from '../../img/happy-stories-5.PNG';
import happyStories7 from '../../img/happy-stories-7.PNG';
import happyStories8 from '../../img/happy-stories-8.PNG';
import happyStories9 from '../../img/happy-stories-9.PNG';

const Stories = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrow: true,
      };
    
    return (
        <>
            <Header/>
                <main className="stories-container" style={{ backgroundImage: `url(${background})`, width: '100%', backgroundSize: 'cover'}}>
                    <h2 className="color-yellow">Our happy stories</h2>
                    
                    <div className="slick-container ">
                        <Slider {...settings}>
                            <div>
                                <img src={happyStories5} alt="happy dog in the family" />
                            </div>
                            <div>
                                <img src={happyStories2} alt="happy dog in the family" />
                            </div>
                            <div>
                                <img src={happyStories3} alt="happy dog in the family" />
                            </div>
                            <div>
                                <img src={happyStories4} alt="happy dog in the family" />
                            </div>
                            
                            <div>
                                <img src={happyStories7} alt="happy dog in the family" />
                            </div>
                            <div>
                                <img src={happyStories8} alt="happy dog in the family" />
                            </div>
                            <div>
                                <img src={happyStories9} alt="happy dog in the family" />
                            </div>
                            <div>
                                <img src={happyStories1} alt="happy dog in the family" />
                            </div>
                        </Slider>
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default Stories;