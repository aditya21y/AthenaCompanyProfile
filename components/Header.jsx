import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ovo from "@/components/utils"; // Importing the Ovo font

const Header = () => {
    return (
        <>
            <div className=" gap-10 py-50 md:flex md:gap-20 md:py-50 md:items-center md:px-[12%]">
                {/* <div className="fixed top-0 right-0 -z-10 w-11/12 bg-white">
                    <Image src={assets.header_bg_color} alt="" className="w-full" />
                </div> */}
                <div className="animate-floating -z-50">
                    <Image src={assets.profile_img} className="hidden lg:block" alt="" />
                </div>
                <div>
                    <h3 className={`text-gray-500 text-2xl text-center md:text-2xl md:font-semibold md:text-left ${ovo.className}`}>
                        ERPNext Software House Specialist
                    </h3>
                    <h1 className="text-gray-800 text-4xl font-bold leading-tight antialiased text-center md:antialiased md:leading-tight md:text-5xl">
                        Build Smarter ERP Systems with Athena <span className="text-orange-600 -ml-2">.</span>
                    </h1>
                    <p className={`text-gray-600 text-center text-lg max-w-3xl mt-2 ${ovo.className} antialiased leading-8 md:text-left`}>
                        We specialize in ERPNext development — from custom module creation, workflow automation, to full system implementation.
                        Athena helps companies streamline operations and scale efficiently with open-source ERP technology.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                        <button className="flex gap-2 rounded-full px-6 py-2.5 
                        bg-black text-white transition duration-300 cursor-pointer">
                            <a href="">Start Your ERP Project</a>
                            <Image src={assets.right_arrow_white} alt="" className="w-6" />
                        </button>
                        <button className="flex gap-2 rounded-full px-6 py-2.5 border border-gray-500 
                        bg-white/50 text-black transition duration-300 cursor-pointer">
                            <a href="">Contact Us For More information</a>
                            {/* <Image src={assets.download_icon} alt="" className="w-6" /> */}
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;
