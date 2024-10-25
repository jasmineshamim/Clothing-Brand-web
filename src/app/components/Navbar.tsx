"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = (): JSX.Element => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    return (
        <>
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            {/* Logo or Placeholder */}
                        </div>
                        {/* Center the navbar links */}
                        <div className="hidden md:flex w-full justify-center space-x-8 font-medium py-4 text-black">
                            <Link href="/" className="navbar__link">HOME</Link>
                            <Link href="/aboutus" className="navbar__link">ABOUT US</Link>
                            <Link href="/partywear" className="navbar__link">PARTY WEAR</Link>
                            <Link href="/kid" className="navbar__link">KIDS COLLECTION</Link>
                            <Link href="/men" className="navbar__link">MENS COLLECTION</Link>
                            <Link href="/contactus" className="navbar__link">CONTACT US</Link>
                        </div>
                        {/* Hamburger icon for mobile */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                                onClick={toggleNavbar}
                            >
                                {isClick ? (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden fixed top-0 left-0 h-full w-80 bg-white transform ${
                        isClick ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
                >
                    <div className="px-6 pt-4 pb-6 space-y-1 sm:px-3">
                        <div className="text-center pb-4">
                            <img
                                src="/images/logo1.png"
                                alt="Logo"
                                className="h-32 w-32 mx-auto"
                            />
                        </div>

                        <div className="flex flex-col items-center pt-4 space-y-4 font-bold">
                            <Link href="/" onClick={toggleNavbar} className="navbar__link">HOME</Link>
                            <Link href="/aboutus" onClick={toggleNavbar} className="navbar__link">ABOUT US</Link>
                            <Link href="/partywear" onClick={toggleNavbar} className="navbar__link">PARTY WEAR</Link>
                            <Link href="/kid" onClick={toggleNavbar} className="navbar__link">KIDS COLLECTION</Link>
                            <Link href="/men" onClick={toggleNavbar} className="navbar__link">MENS COLLECTION</Link>
                            <Link href="/contactus" onClick={toggleNavbar} className="navbar__link">CONTACT US</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;