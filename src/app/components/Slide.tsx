import React from "react";
import Image from "next/image";

interface SlideProps {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide: React.FC<SlideProps> = ({ img, title, mainTitle, price }) => {
    return (
        <div className="relative">
            <Image 
                className="min-h-[250px] h-[300px] sm:min-h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-xl object-right-top"
                src={img}
                alt="banner"
                layout="responsive"
                width={2000}
                height={900}
            />

            {/* <div className="absolute left-4 bottom-4 bg-white bg-opacity-75 p-4 rounded-lg"> */}
                <h3 className="text-pink-500 text-[24px] lg:text-[28px]">{title}</h3>
                <h2 className="text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
                    {mainTitle}
                </h2>
                <h3 className="text-[24px] text-gray-500">
                    <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
                </h3>
            </div>
        // </div>
    );
};

export default Slide;