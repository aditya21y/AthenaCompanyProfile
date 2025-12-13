"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = ["top", "about", "services", "contact"];
            let current = "top";

            for (let id of sections) {
                const el = document.getElementById(id);
                if (el && scrollY >= el.offsetTop - 120) {
                    current = id;
                }
            }

            document.querySelectorAll("nav a[data-link]").forEach((a) => {
                const href = a.getAttribute("href")?.replace("#", "");
                a.classList.toggle("text-black", href === current);
                a.classList.toggle("text-gray-500", href !== current);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed w-full z-50 bg-white/85 backdrop-blur px-6 xl:px-[8%] py-3 flex items-center">
            {/* LOGO */}
            <Image
                src={assets.logo}
                alt="logo"
                className="w-28 cursor-pointer shrink-0"
            />

            {/* SPACER */}
            <div className="flex-1" />

            {/* COLLAPSIBLE AREA */}
            <div
                className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${open ? "max-w-[900px] opacity-100" : "max-w-0 opacity-0"}
                `}
            >
                <div className="flex items-center gap-6 bg-white/60 rounded-full px-10 py-3 shadow-sm">
                    {/* MENU */}
                    <ul className="flex items-center gap-8">
                        <li><a data-link href="#top" className="text-gray-500 hover:text-black">Home</a></li>
                        <li><a data-link href="#about" className="text-gray-500 hover:text-black">About</a></li>
                        <li><a data-link href="#services" className="text-gray-500 hover:text-black">Services</a></li>
                        <li><a data-link href="#contact" className="text-gray-500 hover:text-black">Contact</a></li>
                    </ul>

                    {/* RIGHT ACTION (MASUK KE DALAM) */}
                    <div className="flex items-center gap-4 pl-6 border-l border-gray-300">
                        <button>
                            <Image src={assets.moon_icon} alt="" className="w-6" />
                        </button>

                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-5 py-2.5 border border-gray-400 rounded-full"
                        >
                            Contact
                            <Image src={assets.arrow_icon} alt="" className="w-3" />
                        </a>
                    </div>
                </div>
            </div>

            {/* HAMBURGER – UJUNG KANAN */}
            <button
                onClick={() => setOpen(!open)}
                className="ml-4 p-2 hover:bg-gray-100 rounded-md transition"
            >
                <Image
                    src={assets.menu_black}
                    alt="menu"
                    className="w-6"
                />
            </button>
        </nav>
    );
};

export default Navbar;
