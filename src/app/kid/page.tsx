import React from "react";
import Image from "next/image";
import MiddleSec from "../components/MiddleSec";

const Kid = [
    {
        img: "/images/kid1.webp",
        title: "KID DRESS 1",
        desc: "Exquisite embroidered party dress with delicate details for a glamorous evening.",
        rating: "4.8",
        price: "$89.99",
    },
    {
        img: "/images/kid2.webp",
        title: "KID DRESS 2",
        desc: "Charming floral dress that adds a touch of elegance to any occasion.",
        rating: "4.7",
        price: "$79.99",
    },
    {
        img: "/images/kid3.webp",
        title: "KID DRESS 3",
        desc: "Stylish and comfortable dress perfect for birthday parties.",
        rating: "4.6",
        price: "$69.99",
    },
    {
        img: "/images/kid4.webp",
        title: "KID DRESS 4",
        desc: "Fun and playful outfit for your little princess.",
        rating: "4.9",
        price: "$59.99",
    },
    {
        img: "/images/kid5.webp",
        title: "KID DRESS 5",
        desc: "Elegant dress featuring intricate lace and a bow detail.",
        rating: "4.8",
        price: "$89.99",
    },
    {
        img: "/images/kid6.webp",
        title: "KID DRESS 6",
        desc: "A stunning dress that will make any occasion special.",
        rating: "4.7",
        price: "$75.99",
    },
    {
        img: "/images/kid7.webp",
        title: "KID DRESS 7",
        desc: "Beautifully designed dress with soft fabric for comfort.",
        rating: "4.6",
        price: "$68.99",
    },
    {
        img: "/images/kid8.webp",
        title: "KID DRESS 8",
        desc: "Perfect for a day out, combining style and ease.",
        rating: "4.5",
        price: "$55.99",
    },
];

const KidCollection = () => {
    return (
        <>
        <div className="container mx-auto py-8">
        <div className="relative">
    <Image
        className="w-full min-h-[250px] h-[300px] sm:min-h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-xl object-right-top" // Ensured min-height and height are set properly for all screens
        src="/images/banner.webp"
        alt="banner"
        layout="responsive"
        width={2000}
        height={900}
    />
</div>

            <br />
            <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-pink-500">KIDS COLLECTION</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Kid.map((item, index) => (
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

export default KidCollection;