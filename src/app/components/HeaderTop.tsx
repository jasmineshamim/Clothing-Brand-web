import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


const HeaderTop = () => {
    return(
        <div className="border-b border-gray-200 sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                           <a href="https://www.facebook.com/profile.php?id=61556128057734" target="_blank"    rel="noopener  noreferrer">
                            < BsFacebook />
                          </a>
                            
                        </div>
                        <div className="header_top__icon_wrapper">
                            < BsTwitter />
                        </div>
                        <div className="header_top__icon_wrapper  hover:bg-pink-500">
                           <a href="https://www.instagram.com/jasmineshamim4/" target="_blank" rel="noopener noreferrer">
                          <BsInstagram  />
                          </a>
                            
                        </div>
                        <div className="header_top__icon_wrapper">
                           <a href="https://www.linkedin.com/in/jasmine-sheikh-8116b62ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVPlPU2QbTE2AdcMEJbyqoA%3D%3D" target="_blank" rel="noopener noreferrer">
                          <BsLinkedin />
                          </a>

                        </div>
                        <div className="header_top__icon_wrapper hover:bg-black hover:text-white">
                            <a href="https://vercel.com/jasmine-sheikhs-projects" target="_blank" rel="noopener noreferrer">
                           <IoLogoVercel />
                           </a>
                        </div>
                    </div>

                    <div className="text-gray-500 text-[12px] hidden sm:block">
                        <b className="text-pink-500">FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
                    </div>

                    <div className="flex gap-4">

                    
                        <select

                         className="text-gray-500 text-[12px] w-[70px]"
                         name="currency"
                         id="currency"
                        > 
                           <option value="USD $">USD $</option>
                           <option value="EUR €">EUR €</option>
                           <option value="INR ₹">INR ₹</option>
                           <option value="GBP £">GBP £</option> 
                           <option value="JPY ¥">JPY ¥</option>  
                           <option value="AUD $">AUD $</option> 
                           <option value="CAD $">CAD $</option>  
                           <option value="CNY ¥">CNY ¥</option>  
    
                        </select>

                        <select
                         className="text-gray-500 text-[12px] w-[80px]"
                         name="language"
                         id="language"
                        > 
                           <option value="English">English</option>
                           <option value="French">French</option>
                           <option value="Russian">Russian</option>
                           <option value="German">German</option>
                           <option value="Korean">Korean</option>
                           <option value="Arabic">Arabic</option>
                           <option value="Italian">Italian</option>
                           <option value="Bengali ">Bengali </option>
                        </select>
                        <div className=" justify-items-end ">
                        <a href="contactus">
                          <FaTruckArrowRight className="text-[23px] hover:text-pink-500 sm:text-[28px] md:text-[30px] text-right sm:text-left" />
                         </a>
                       </div>
                       <br />
                       <div className=" justify-items-end ">
                        <a href="contactus">
                          <FaShoppingCart className="text-[23px] hover:text-pink-500 sm:text-[28px] md:text-[30px] text-right sm:text-left" />
                         </a>
                       </div>
                        
                    </div>
                    
                </div>
                
            </div>
    
        </div>
    )
}
export default HeaderTop;