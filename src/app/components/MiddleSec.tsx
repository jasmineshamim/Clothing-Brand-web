import React from "react";
import { BsTelephoneForward } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin,  } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";

const MiddleSec = () => {
    return (
        <>
        <div className="flex flex-col md:flex-row justify-evenly p-6 space-y-10 md:space-y-0 md:space-x-10 bg-gray-200 w-auto ">
            {/* Contact Section */}
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center">
                        <HiLocationMarker className="w-6 h-6 text-black" />
                        <span className="ml-2 text-black">Orangi Town Sector 12L</span>
                    </div>
                    <div className="flex items-center">
                        <MdMarkEmailRead className="w-6 h-6 text-black" />
                        <span className="ml-2 text-black">jasminesheikh349@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <BsTelephoneForward className="w-6 h-6 text-black" />
                        <span className="ml-2 text-black">03491839458</span>
                    </div>
                </div>
            </div>

            {/* Information Section */}
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-semibold mb-4">Information</h2>
                <ul className="list-none space-y-2">
                    <li><a href="#" className="text-black hover:underline">About Us</a></li>
                    <li><a href="#" className="text-black hover:underline">Blogs</a></li>
                    <li><a href="#" className="text-black hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="text-black hover:underline">Terms & Conditions</a></li>
                </ul>
            </div>

            {/* Customer Services Section */}
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-semibold mb-4">Customer Services</h2>
                <ul className="list-none space-y-2">
                    <li><a href="#" className="text-black hover:underline">FAQs</a></li>
                    <li><a href="#" className="text-black hover:underline">Order Tracking</a></li>
                    <li><a href="#" className="text-black hover:underline">Contact Us</a></li>
                    <li><a href="#" className="text-black hover:underline">Return & Exchange Policy</a></li>
                </ul>
            </div>

            <div className=" flex space-x-4 text-black lg:hidden">
                    <div className="header_top__icon_wrapper  bg-gray-400">
                    <a href="https://www.facebook.com/profile.php?id=61556128057734" target="_blank" rel="noopener noreferrer">
                        < BsFacebook className="text-xl" />
                    </a>
                    </div>
                    <div className="header_top__icon_wrapper  bg-gray-400">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <BsTwitter className="text-xl" />
                    </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:bg-pink-500  bg-gray-400">
                    <a href="https://www.instagram.com/jasmineshamim4/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className="text-xl" />
                    </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:text-white  bg-gray-400">
                    <a href="https://www.linkedin.com/in/jasmine-sheikh-8116b62ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVPlPU2QbTE2AdcMEJbyqoA%3D%3D" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="text-xl " />
                    </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:text-white hover:bg-black   bg-gray-400">
                    <a href="https://vercel.com/jasmine-sheikhs-projects" target="_blank" rel="noopener noreferrer">
                        <IoLogoVercel className="text-xl " />
                    </a>
                    </div>
                </div>
            

        </div>
        
        </>
    );
};

export default MiddleSec;