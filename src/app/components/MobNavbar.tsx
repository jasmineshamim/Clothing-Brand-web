import React from "react";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMenuOutline } from "react-icons/io5";

const MobNavbar = () => {
    return (
        <div className="lg:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-white 
        shadow-lg z-50 px-3 py-1.5"> {/* Reduced padding for a sleeker design */}
            <div className="flex justify-between text-[24px]"> {/* Slightly smaller icon size */}
                <div className="flex-1 text-center">
                    <IoMenuOutline className="cursor-pointer hover:text-pink-500 transition-colors duration-300" />
                </div>
                
                <div className="relative flex-1 text-center">
                    <HiOutlineShoppingBag className="cursor-pointer hover:text-pink-500 transition-colors duration-300" />
                    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[16px] h-[16px] text-[10px] 
                    text-white grid place-items-center translate-x-1 -translate-y-1">
                        0
                    </div>
                </div>

                <div className="flex-1 text-center">
                    <AiOutlineHome className="cursor-pointer hover:text-pink-500 transition-colors duration-300"
                     />
                </div>

                <div className="relative flex-1 text-center">
                    <FiHeart className="cursor-pointer hover:text-pink-500  transition-colors duration-300" />
                    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[16px] h-[16px] text-[10px] 
                    text-white grid place-items-center translate-x-1 -translate-y-1">
                        0
                    </div>
                </div>

                <div className="flex-1 text-center">
                    <AiOutlineAppstore className="cursor-pointer hover:text-pink-500 transition-colors duration-300" />
                </div>
            </div>
        </div>
    );
};

export default MobNavbar;