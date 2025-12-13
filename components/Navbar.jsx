"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
    const [openDesktop, setOpenDesktop] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);

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
        <>
            {/* ================= NAVBAR ================= */}
            <nav className="fixed w-full z-50 bg-white/85 backdrop-blur px-6 xl:px-[8%] py-3 flex items-center">
                {/* LOGO */}
                <Image
                    src={assets.logo}
                    alt="logo"
                    className="w-28 cursor-pointer shrink-0"
                />

                {/* ================= DESKTOP MENU ================= */}
                <div className="hidden lg:flex flex-1 justify-end items-center">
                    {/* COLLAPSIBLE MENU */}
                    <div
                        className={`
                            overflow-hidden transition-all duration-500 ease-in-out
                            ${openDesktop ? "max-w-[900px] opacity-100" : "max-w-0 opacity-0"}
                        `}
                    >
                        <div className="flex items-center gap-6 bg-white/60 rounded-full px-10 py-3 shadow-sm">
                            <ul className="flex items-center gap-8">
                                <li><a data-link href="#top" className="text-gray-500 hover:text-black">Home</a></li>
                                <li><a data-link href="#about" className="text-gray-500 hover:text-black">About</a></li>
                                <li><a data-link href="#services" className="text-gray-500 hover:text-black">Services</a></li>
                                <li><a data-link href="#contact" className="text-gray-500 hover:text-black">Contact</a></li>
                            </ul>

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

                    {/* DESKTOP HAMBURGER */}
                    <button
                        onClick={() => setOpenDesktop(!openDesktop)}
                        className="ml-4 p-2 hover:bg-gray-100 rounded-md transition"
                    >
                        <Image src={assets.menu_black} alt="menu" className="w-6" />
                    </button>
                </div>

                {/* ================= MOBILE HAMBURGER ================= */}
                <button
                    onClick={() => setOpenMobile(true)}
                    className="lg:hidden ml-auto p-2"
                >
                    <Image src={assets.menu_black} alt="menu" className="w-6" />
                </button>
            </nav>

            {/* ================= MOBILE SIDEBAR ================= */}
            <div
                className={`
                    fixed inset-0 z-40 lg:hidden
                    ${openMobile ? "pointer-events-auto" : "pointer-events-none"}
                `}
            >
                {/* OVERLAY */}
                <div
                    onClick={() => setOpenMobile(false)}
                    className={`
                        absolute inset-0 bg-black/40 transition-opacity
                        ${openMobile ? "opacity-100" : "opacity-0"}
                    `}
                />

                {/* SIDEBAR */}
                <div
                    className={`
                        absolute right-0 top-0 h-full w-72 bg-white
                        transform transition-transform duration-500
                        ${openMobile ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    <button
                        onClick={() => setOpenMobile(false)}
                        className="absolute top-5 right-5"
                    >
                        ✕
                    </button>

                    <ul className="flex flex-col gap-6 px-8 py-24">
                        <li><a onClick={() => setOpenMobile(false)} href="#top">Home</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#about">About</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#services">Services</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
