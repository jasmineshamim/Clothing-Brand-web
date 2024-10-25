import React from 'react';
import MiddleSec from '@/app/components/MiddleSec';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { IoHome } from "react-icons/io5";


const ContactUs = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-pink-500">CONTACT US</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4 ">GET TO TOUCH</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 " htmlFor="name">Your Name (required)</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Your Email (required)</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 " htmlFor="number">Your Phone Number</label>
            <input
              type="text"
              id="number"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter You Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded"
            //   rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">CONTACT INFORMATION</h2>
          <p className='text-gray-600'>At [J.S Clothing Brand], we value your feedback and are committed to providing you with the best possible experience. Whether you have a question, suggestion, or concern, we’re here to listen!</p>
          <br />

              <div className="flex items-center">
                <IoHome className="w-5 h-5 text-gray-600 " />
                <span className="ml-2  text-gray-600">Orangi Town Sector 12L</span>
              </div>
              <br />

              <div className="flex items-center">
                <FaPhoneVolume  className="w-5 h-5 text-gray-600" />
                <span className="ml-2  text-gray-600">03491839458</span>
              </div>
              <br />

              <div className="flex items-center">
                  <MdMarkEmailUnread className="w-5 h-5 text-gray-600" />
                  <span className="ml-2  text-gray-600">jasminesheikh349@gmail.com</span>
              </div>
              <br />

              <div className="flex items-center">
                <FaClock className="w-5 h-5 text-gray-600" />
                <span className="ml-2  text-gray-600">Everyday 9:00 AM to 10:00 PM</span>
              
              </div>
        </div>
      </div>
    </div>
    <MiddleSec />
    </>
    
  );
};

export default ContactUs;