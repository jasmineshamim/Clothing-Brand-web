import React from "react";
import MiddleSec from "../components/MiddleSec";
import Image from "next/image";

const products = [
    {
        img: "wed3.webp",
        title: "Embroidered Party Dress",
        desc: "Exquisite embroidered party dress with delicate details for a glamorous evening.",
        rating: "5.3",
        price: "$89.99",
    },{
        img: "wed4.webp",
        title: "Embroidered Party Dress",
        desc: "Exquisite embroidered party dress with delicate details for a glamorous evening.",
        rating: "5.5",
        price: "$89.99",
    },{
        img: "wed5.webp",
        title: "Embroidered Party Dress",
        desc: "Exquisite embroidered party dress with delicate details for a glamorous evening.",
        rating: "3.8",
        price: "$89.99",
    },{
        img: "wed6.webp",
        title: "Embroidered Party Dress",
        desc: "Exquisite embroidered party dress with delicate details for a glamorous evening.",
        rating: "4.4",
        price: "$89.99",
    },{
        img: "wed7.webp",
        title: "Embroidered Party Dress",
        desc: "Exquisite embroidered party dress with delicate details for a glamorous evening.",
        rating: "5.8",
        price: "$89.99",
    },{
        img: "wed8.webp",
        title: "Embroidered Party Dress",
        desc: "Exquisite embroidered party dress with delicate details for a glamorous evening.",
        rating: "3.8",
        price: "$89.99",
    },
    {
        img: "party1.jpg",
        title: "Embroidered Party Dress",
        desc: "Exquisite embroidered party dress with delicate details for a glamorous evening.",
        rating: "4.8",
        price: "$89.99",
    },
    {
        img: "party2.jpg",
        title: "Satin Gown",
        desc: "Luxurious satin gown perfect for formal occasions and high-end parties.",
        rating: "4.7",
        price: "$129.99",
    },
    {
        img: "party3.jpg",
        title: "Sequined Cocktail Dress",
        desc: "Shimmering sequined dress, designed for an unforgettable night out.",
        rating: "4.6",
        price: "$99.99",
    },
    {
        img: "party4.jpg",
        title: "Velvet Evening Gown",
        desc: "Elegant velvet gown with a refined silhouette for formal events.",
        rating: "4.9",
        price: "$139.99",
    },
    {
        img: "party5.jpg",
        title: "Lace Party Dress",
        desc: "A timeless lace party dress, featuring intricate floral designs.",
        rating: "4.7",
        price: "$79.99",
    },
    {
        img: "party6.jpg",
        title: "Chiffon Maxi Dress",
        desc: "Flowing chiffon maxi dress, ideal for garden parties and summer weddings.",
        rating: "4.5",
        price: "$89.99",
    },
    {
        img: "party8.jpg",
        title: "Beaded Party Gown",
        desc: "Stunning beaded gown with intricate detailing, perfect for high-end soirées.",
        rating: "4.8",
        price: "$149.99",
    },
    {
        img: "party9.jpg",
        title: "Sleek One-Shoulder Dress",
        desc: "Modern one-shoulder party dress, perfect for a chic and sophisticated look.",
        rating: "4.6",
        price: "$109.99",
    },
    {
        img: "party10.jpg",
        title: "Off-Shoulder Gown",
        desc: "Romantic off-shoulder gown with a soft, flowing design.",
        rating: "4.8",
        price: "$119.99",
    },
    {
        img: "party11.jpg",
        title: "Metallic Sheath Dress",
        desc: "Eye-catching metallic dress, designed for making bold statements.",
        rating: "4.7",
        price: "$89.99",
    },
    {
        img: "party13.jpg",
        title: "Pleated Satin Dress",
        desc: "Chic pleated satin dress, perfect for cocktail parties and evening events.",
        rating: "4.6",
        price: "$99.99",
    },
    {
        img: "party14.jpg",
        title: "Floral Organza Dress",
        desc: "Whimsical floral organza dress, ideal for garden parties and outdoor events.",
        rating: "4.7",
        price: "$89.99",
    },
    {
        img: "party15.jpg",
        title: "Classic Black Evening Gown",
        desc: "A classic black gown that exudes elegance and timeless beauty.",
        rating: "4.9",
        price: "$149.99",
    },
    {
        img: "party16.jpg",
        title: "Silk Wrap Dress",
        desc: "Elegant silk wrap dress, perfect for formal occasions and parties.",
        rating: "4.8",
        price: "$129.99",
    },
    {
        img: "party17.jpg",
        title: "Glittery Cocktail Dress",
        desc: "Dazzling glittery cocktail dress for a fun and festive evening.",
        rating: "4.5",
        price: "$79.99",
    },
    {
        img: "party18.jpg",
        title: "Asymmetric Party Dress",
        desc: "Stylish asymmetric dress for a bold and contemporary look.",
        rating: "4.7",
        price: "$109.99",
    },
    {
        img: "wed2.webp",
        title: "Asymmetric Party Dress",
        desc: "Stylish asymmetric dress for a bold and contemporary look.",
        rating: "4.7",
        price: "$109.99",
    },
    {
        img: "wed1.webp",
        title: "Asymmetric Party Dress",
        desc: "Stylish asymmetric dress for a bold and contemporary look.",
        rating: "4.7",
        price: "$109.99",
    },
]

const PartyWear = () => {
    return (
        <>
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold text-center mb-4 text-pink-500">PARTY WEAR COLLECTION</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <div
                  key={index}
                  className="border rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 p-4"
                >
                        <Image
                            src={`/images/${product.img}`} // Use the full path for images
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
        <MiddleSec />
        </>
    );
};

export default PartyWear;