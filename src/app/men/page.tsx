import React from "react";
import Image from "next/image";
import MiddleSec from "../components/MiddleSec";

const Mens = [
    {
        img: "/images/boy1.webp",
        title: "MEN'S BLAZER",
        desc: "Classic tailored blazer made from premium fabrics for a sophisticated look.",
        rating: "4.9",
        price: "$120.00",
    },
    {
        img: "/images/boy2.webp",
        title: "MEN'S SUIT",
        desc: "Elegant suit with sharp cuts, ideal for formal events.",
        rating: "4.7",
        price: "$250.00",
    },
    {
        img: "/images/boy3.webp",
        title: "CASUAL JACKET",
        desc: "Lightweight and versatile jacket for a casual day out.",
        rating: "4.6",
        price: "$89.99",
    },
    {
        img: "/images/boy4.webp",
        title: "MEN'S SHIRT",
        desc: "Slim fit shirt that pairs well with both jeans and formal trousers.",
        rating: "4.8",
        price: "$45.99",
    },
    {
        img: "/images/boy5.webp",
        title: "MEN'S JEANS",
        desc: "Durable denim jeans with a relaxed fit for comfort.",
        rating: "4.8",
        price: "$65.00",
    },
    {
        img: "/images/boy6.webp",
        title: "MEN'S TUXEDO",
        desc: "Luxurious tuxedo with fine detailing for an upscale occasion.",
        rating: "4.9",
        price: "$299.99",
    },
    {
        img: "/images/boy7.webp",
        title: "FORMAL PANTS",
        desc: "Smart tailored trousers for office wear or formal events.",
        rating: "4.7",
        price: "$80.00",
    },
    {
        img: "/images/boy8.webp",
        title: "MEN'S COAT",
        desc: "Stylish and warm coat, perfect for winter outings.",
        rating: "4.9",
        price: "$150.00",
    },
    {
        img: "/images/boy9.webp",
        title: "MEN'S T-SHIRT",
        desc: "Comfortable cotton t-shirt with a sleek design.",
        rating: "4.5",
        price: "$29.99",
    },
    {
        img: "/images/boy10.webp",
        title: "MEN'S POLO SHIRT",
        desc: "Classic polo shirt, great for casual or semi-formal wear.",
        rating: "4.6",
        price: "$39.99",
    },
    {
        img: "/images/boy11.webp",
        title: "MEN'S LEATHER JACKET",
        desc: "High-quality leather jacket with a sleek design for an edgy look.",
        rating: "4.9",
        price: "$199.99",
    },
    {
        img: "/images/boy12.webp",
        title: "MEN'S CASUAL SHIRT",
        desc: "Lightweight casual shirt perfect for everyday wear.",
        rating: "4.7",
        price: "$49.99",
    },
    {
        img: "/images/boy13.webp",
        title: "MEN'S SPORTS COAT",
        desc: "Stylish sports coat designed for a modern, sharp appearance.",
        rating: "4.8",
        price: "$120.00",
    },
    {
        img: "/images/boy14.webp",
        title: "MEN'S SWEATER",
        desc: "Cozy wool sweater perfect for layering during colder months.",
        rating: "4.8",
        price: "$60.00",
    },
    {
        img: "/images/boy15.webp",
        title: "MEN'S WINTER COAT",
        desc: "Warm winter coat with a sophisticated design for outdoor activities.",
        rating: "4.9",
        price: "$180.00",
    },
    {
        img: "/images/boy16.webp",
        title: "MEN'S TRACKSUIT",
        desc: "Comfortable tracksuit designed for activewear and casual outings.",
        rating: "4.7",
        price: "$90.00",
    },
    {
        img: "/images/boy18.webp",
        title: "MEN'S FORMAL SUIT",
        desc: "A classic formal suit tailored to perfection for formal occasions.",
        rating: "4.9",
        price: "$300.00",
    },
    {
        img: "/images/boy19.webp",
        title: "MEN'S HOODIE",
        desc: "Soft and comfortable hoodie for casual and streetwear.",
        rating: "4.6",
        price: "$55.00",
    },
    {
        img: "/images/boy20.webp",
        title: "MEN'S BOMBER JACKET",
        desc: "Trendy bomber jacket for a modern casual look.",
        rating: "4.8",
        price: "$110.00",
    },
    {
        img: "/images/boy21.webp",
        title: "MEN'S SLIM-FIT JEANS",
        desc: "Slim-fit jeans offering both style and comfort for everyday wear.",
        rating: "4.7",
        price: "$70.00",
    },
];

const MenCollection = () => {
    return (
        <>
    <div className="container mx-auto py-8">
        <div className="relative">
            <Image
                className="w-full min-h-[250px] h-[300px] sm:min-h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-xl object-right-top" // Ensured min-height and height are set properly for all screens
                src="/images/bannarboy.webp"
                alt="banner"
                layout="responsive"
                width={2000}
                height={900}
            />
        </div>

            <br />
            <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-pink-500">MENS COLLECTION</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Mens.map((item, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg p-4">
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={300}
                            height={400}
                            className="w-full h-65 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-bold text-pink-500">{item.price}</span>
                                <span className="text-yellow-500">{item.rating} ★</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <MiddleSec />
        </>
    );
}

export default MenCollection;