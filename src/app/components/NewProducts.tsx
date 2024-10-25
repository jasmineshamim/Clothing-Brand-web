import React from "react";
import Image from "next/image"; // Import Image from Next.js

// Sample product data
const products = [
    {
        img: "/images/1.webp",
        title: "Summer Floral Dress",
        desc: "Light and breezy floral dress, perfect for summer days.",
        rating: "4.5",
        price: "$29.99",
    },
    {
        img: "/images/2.webp",
        title: "Evening Gown",
        desc: "Elegant evening gown for formal occasions.",
        rating: "4.0",
        price: "$19.99",
    },
    {
        img: "/images/3.webp",
        title: "Maxi Dress",
        desc: "Flowy maxi dress for casual outings or beachwear.",
        rating: "4.8",
        price: "$39.99",
    },
    {
        img: "/images/4.webp",
        title: "Cocktail Dress",
        desc: "Stylish cocktail dress for parties and events.",
        rating: "5.0",
        price: "$49.99",
    },
    {
        img: "/images/5.webp",
        title: "Casual Wrap Dress",
        desc: "Comfortable wrap dress for everyday wear.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/31.webp",
        title: "Off-Shoulder Dress",
        desc: "Chic off-shoulder dress for a trendy look.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/32.webp",
        title: "Denim Dress",
        desc: "Casual denim dress for a laid-back style.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/33.webp",
        title: "Boho Dress",
        desc: "Bohemian style dress for a carefree look.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/34.webp",
        title: "Lace Dress",
        desc: "Elegant lace dress with intricate detailing.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/10.webp",
        title: "Tunic Dress",
        desc: "Relaxed tunic dress perfect for casual days.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/11.webp",
        title: "Slip Dress",
        desc: "Sleek and simple slip dress for a minimalist look.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/12.webp",
        title: "Bodycon Dress",
        desc: "Form-fitting bodycon dress for a night out.",
        rating: "4.3",
        price: "$22.99",
    },
    {
        img: "/images/13.webp",
        title: "Shirt Dress",
        desc: "Versatile shirt dress for casual or work settings.",
        rating: "4.3",
        price: "$50.99",
    },
    {
        img: "/images/15.webp",
        title: "A-Line Dress",
        desc: "Classic A-line dress that flatters all body types.",
        rating: "4.3",
        price: "$30.99",
    },
    {
        img: "/images/casual0.webp",
        title: "Midi Dress",
        desc: "Stylish midi dress, perfect for any occasion.",
        rating: "4.3",
        price: "$26.99",
    },
    {
        img: "/images/casual1.webp",
        title: "Peplum Dress",
        desc: "Trendy peplum dress for a chic and modern look.",
        rating: "4.3",
        price: "$20.99",
    },
    {
        img: "/images/casual2.webp",
        title: "Fit and Flare Dress",
        desc: "Fitted bodice with a flared skirt, ideal for parties.",
        rating: "4.3",
        price: "$28.99",
    },
    {
        img: "/images/casual3.webp",
        title: "Tulle Dress",
        desc: "Playful tulle dress for a fun and flirty style.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual4.webp",
        title: "Shift Dress",
        desc: "Simple shift dress for a timeless, effortless look.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual5.webp",
        title: "Skater Dress",
        desc: "Fun and flirty skater dress for day or night.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual6.webp",
        title: "Empire Waist Dress",
        desc: "Empire waist dress for a flattering silhouette.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual7.webp",
        title: "Tiered Dress",
        desc: "Tiered dress with a flowy and romantic feel.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual8.webp",
        title: "Wrap Midi Dress",
        desc: "Comfortable wrap midi dress for everyday elegance.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual9.webp",
        title: "Ruffle Dress",
        desc: "Playful ruffle dress for a cute and feminine look.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual10.webp",
        title: "Pencil Dress",
        desc: "Sophisticated pencil dress for a professional look.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual11.webp",
        title: "Babydoll Dress",
        desc: "Sweet and feminine babydoll dress with soft fabric.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual12.webp",
        title: "Kimono Dress",
        desc: "Stylish kimono dress with a relaxed fit.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/casual14.webp",
        title: "Floral Maxi Dress",
        desc: "Beautiful floral maxi dress with flowing fabric.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/winter1.webp",
        title: "Winter Sweater Dress",
        desc: "Cozy sweater dress for chilly days.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/winter2.webp",
        title: "Velvet Dress",
        desc: "Elegant velvet dress for special occasions.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/winter3.webp",
        title: "Turtleneck Dress",
        desc: "Comfortable turtleneck dress for a chic winter look.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/winter4.webp",
        title: "Cable Knit Dress",
        desc: "Chunky cable knit dress for warmth and style.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/winter5.webp",
        title: "Plaid Dress",
        desc: "Trendy plaid dress, perfect for the cooler seasons.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/winter6.webp",
        title: "Wool Dress",
        desc: "Classic wool dress for a sophisticated winter look.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/winter7.webp",
        title: "Knitted Dress",
        desc: "Soft knitted dress for casual winter style.",
        rating: "4.3",
        price: "$24.99",
    },
    {
        img: "/images/winter8.webp",
        title: "Fleece Dress",
        desc: "Warm fleece dress for maximum comfort.",
        rating: "4.3",
        price: "$30.99",
    },
    {
        img: "/images/Alana_1.webp",
        title: "Beach Cover-Up",
        desc: "Light beach cover-up dress for sunny days.",
        rating: "4.3",
        price: "$25.99",
    },
    {
        img: "/images/bech3.webp",
        title: "Sundress",
        desc: "Casual sundress perfect for warm weather.",
        rating: "4.3",
        price: "$44.99",
    },
    {
        img: "/images/bech2.webp",
        title: "Beach Cover-Up",
        desc: "Light beach cover-up dress for sunny days.",
        rating: "4.3",
        price: "$38.99",
    },
    {
        img: "/images/bech4.webp",
        title: "Tropical Print Dress",
        desc: "Bright tropical print dress for a vacation look.",
        rating: "4.3",
        price: "$55.99",
    },
    {
        img: "/images/bech5.webp",
        title: "Knitted Dress",
        desc: "Soft knitted dress for casual winter style.",
        rating: "4.3",
        price: "$34.99",
    },
    {
        img: "/images/bech6.webp",
        title: "Cable Knit Dress",
        desc: "Chunky cable knit dress for warmth and style.",
        rating: "4.3",
        price: "$34.99",
    },
    {
        img: "/images/bech8.webp",
        title: "Tropical Print Dress",
        desc: "Bright tropical print dress for a vacation look.",
        rating: "4.3",
        price: "$30.99",
    },
    {
        img: "/images/bech0.webp",
        title: "Velvet Dress",
        desc: "Elegant velvet dress for special occasions.",
        rating: "4.3",
        price: "$24.99",
    },
];

const NewProducts = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold text-center mb-4 text-pink-600 ">SUMMER COLLECTION</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <div
                  key={index}
                  className="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 p-4"
                >
                        <Image
                            src={product.img} // Use the Image component
                            alt={product.title}
                            width={300} // Set a fixed width
                            height={200} // Set a fixed height
                            className="w-full h-65 object-cover" // Ensure the image covers the container
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{product.title}</h3>
                            <p className="text-gray-600">{product.desc}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-bold text-pink-500">{product.price}</span>
                                <span className="text-yellow-500">{product.rating} ★</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewProducts;