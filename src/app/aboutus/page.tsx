import React from "react";
import MiddleSec from "../components/MiddleSec";

const AboutUs = () => {
    return (
        <>
            <div className="py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-pink-500">
                    ABOUT US
                </h1>

                <div className="bg-white px-6 py-4 mx-auto text-gray-500 sm:px-4 sm:py-2 lg:px-20 lg:py-6">
                    Welcome to <b>Jasmine Sheikh Clothing Brand</b>, where timeless elegance meets contemporary fashion. Established with a passion for empowering women, our brand is dedicated to creating high-quality, stylish, and versatile clothing that reflects the grace and confidence of the modern woman.
                    <br />
                    <br />
                    At <b>Jasmine Sheikh</b>, we believe that fashion is more than just clothing—it’s a form of self-expression. Our collections are thoughtfully curated, blending luxurious fabrics with exquisite craftsmanship to offer you unique, trend-setting designs. From everyday essentials to special occasion wear, our pieces are designed to celebrate femininity while keeping comfort at the forefront.
                    <br />
                    <br />
                    We are committed to sustainability and ethical practices, ensuring that each garment is crafted with care for both the wearer and the environment. Whether you're looking for bold, statement pieces or subtle, classic designs, <b>Jasmine Sheikh Clothing Brand</b> offers something for every woman who wants to embrace her personal style with confidence.
                    <br />
                    <br />
                    Join us on this journey of fashion, where beauty, quality, and integrity come together.
                </div>
            </div>
            <MiddleSec />
        </>
    );
};

export default AboutUs;