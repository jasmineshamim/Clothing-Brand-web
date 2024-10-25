import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin,  } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="bg-gray-400 text-black py-4">
            <div className="container mx-auto flex justify-between items-center ">
            <div className="text-sm text-center md:text-left p-4 lg:pt-0 pb-8 lg:pb-1 ">
               &copy; {new Date().getFullYear()} JS Clothing Brand. All rights reserved.
            </div>
                <br />
                <br />
                <div className=" flex space-x-4 text-black">
                    <div className="header_top__icon_wrapper   hidden sm:block ">
                    <a href="https://www.facebook.com/profile.php?id=61556128057734" target="_blank" rel="noopener noreferrer">
                        < BsFacebook className="text-xl hover:text-gray-400" />
                    </a>
                    </div>
                    <div className="header_top__icon_wrapper  hidden sm:block">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <BsTwitter className="text-xl" />
                    </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:bg-pink-500  hidden sm:block">
                    <a href="https://www.instagram.com/jasmineshamim4/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className="text-xl" />
                    </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:text-white  hidden sm:block">
                    <a href="https://www.linkedin.com/in/jasmine-sheikh-8116b62ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVPlPU2QbTE2AdcMEJbyqoA%3D%3D" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="text-xl " />
                    </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:text-white hover:bg-black  hidden sm:block">
                    <a href="https://vercel.com/jasmine-sheikhs-projects" target="_blank" rel="noopener noreferrer">
                        <IoLogoVercel className="text-xl " />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;