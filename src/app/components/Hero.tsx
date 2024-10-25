'use client'
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS

const Hero = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/images/slide1.webp",
            title: "",
            mainTitle: "",
            price: "",
        },
        {
            id: 1,
            img: "/images/slide2.webp",
            title: "",
            mainTitle: "",
            price: "",
        },
        {
            id: 2,
            img: "/images/slide3.webp",
            title: "",
            mainTitle: "",
            price: "",
        },
        {
            id: 3,
            img: "/images/slide4.webp",
            title: "",
            mainTitle: "",
            price: "",
        },
        {
            id: 4,
            img: "/images/slide5.webp",
            title: "",
            mainTitle: "",
            price: "",
        },
    ];

    return (
        <div>
            <div className="container pt-6 lg:-pt-0">
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            mainTitle={item.mainTitle}
                            price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;