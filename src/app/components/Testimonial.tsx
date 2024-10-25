import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <div className="container pt-16 pb-16">
        <h2 className="text-2xl pb-4 text-center lg:text-left text-pink-600 font-bold">
          Testimonial
        </h2>

        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          {/* Testimonial Box */}
          <div className="border border-gray-300 rounded-2xl flex flex-col items-center justify-start p-6 lg:h-[500px]">
            {/* Profile Image at the Top */}
            <div className="flex-shrink-0 mb-4">
              <Image
                className="rounded-[50%]"
                src="/images/profile.jpg"
                width={90}
                height={80}
                alt="dp"
              />
            </div>

            {/* Text below the image */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-center gap-1 max-w-[300px]">
              <h2 className="text-pink-500 font-black text-[20px]">
                JASMINE SHEIKH
              </h2>
              <p className="text-pink-400 font-black text-[15px]">CLOTHING BRAND</p>
              <p>CEO & Founder Invision</p>
              <p className="text-gray-500 text-sm">
                "Absolutely in love with the maxi dress! It fits perfectly and
                is super comfortable. I got so many compliments at the beach!"
                – JS.Clothing Brand
              </p>
            </div>
          </div>

          {/* Promo Section */}
          <div className="bg-red-600 bg-[url(/images/logos3.webp)] bg-cover bg-center lg:bg-right h-[500px] rounded-2xl flex items-center justify-center">
            <div
              className="bg-[#ffffffab] w-full sm:w-auto max-w-[90%] sm:max-w-[270px] md:max-w-[500px] lg:max-w-[700px]
              rounded-xl py-8 px-4 sm:px-8 flex flex-col items-center text-center gap-3"
            >
              <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-pink-500">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-xl sm:text-2xl text-[#272727]">
                SUMMER COLLECTION
              </h2>
              <p className="text-gray-500 text-sm sm:text-lg">
                Starting @ $20 <b>SHOP NOW</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
