import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-[10%]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo / Brand */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold">Athena</h3>
                    <p className="text-sm text-gray-400 mt-1">
                        Empowering businesses with ERPNext solutions.
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex gap-6 text-2xl">
                    <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://youtube.com/@yourchannel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition"
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center text-sm text-gray-500 mt-8">
                &copy; {new Date().getFullYear()} Athena. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
