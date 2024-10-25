import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";

const HeaderMain = () => {
    return (
        <div className="border-b border-gray-200 py-6 pt-0 pb-0">
            <div className="container mx-auto sm:flex justify-between items-center">
                <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-pink">
                    <Image 
                        src="/images/logo1.png" 
                        alt="Logo" 
                        width={90}
                        height={80}
                        className="h-[150px] w-[180px] sm:h-21 sm:w-21 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto block" 
                    />
                </div>

                <div className="w-full sm:w-[500px] md:w-[70%] relative">
                    <input
                        className="border-gray-200 border p-3 pl-10 pr-10 rounded-lg w-full" 
                        type="text"
                        placeholder="What Are You Looking For"
                    />
     
                    <BsSearch 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                        size={20}
                    />
                </div>

                <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                    <BiUser/>
                    <div className="relative">
                        <FiHeart />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
                        text-white grid place-items-center translate-x-1 -translate-y-1">
                            0
                        </div>
                    </div>

                    <div className="relative">
                        <HiOutlineShoppingBag />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
                        text-white grid place-items-center translate-x-1 -translate-y-1">
                            0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMain;