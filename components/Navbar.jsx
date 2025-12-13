import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ovo from "@/components/utils";

const Navbar = () => {

    const sideMenu = useRef();
    const openMenu = () => {
        sideMenu.current.style.transform = "translateX(-16rem)";
    }
    const closeMenu = () => {
        sideMenu.current.style.transform = "translateX(16rem)";
    }

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

            // Update active class
            document.querySelectorAll("nav a").forEach((a) => {
                const href = a.getAttribute("href")?.replace("#", "");
                if (href === current) {
                    a.classList.add("text-black");
                    a.classList.remove("text-gray-500");
                } else {
                    a.classList.remove("text-black");
                    a.classList.add("text-gray-500");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="w-full fixed flex justify-between px-5 py-3 lg:px-8 xl:px-[8%] items-center bg-white/85 z-50">
                <a href="">
                    <Image src={assets.logo} alt=""
                        className="w-28 cursor-pointer mr-14"
                    />
                </a>
                <ul className="hidden lg:flex items-center gap-8 lg:gap-8
                rounded-full px-12 py-3 bg-white/50 shadow-sm my-2">
                    <li><a className="text-bold hover:text-black" href="#top">Home</a></li>
                    <li><a className="text-bold hover:text-black" href="#about">About Me</a></li>
                    <li><a className="text-bold hover:text-black" href="#services">Services</a></li>
                    <li><a className="text-bold hover:text-black" href="#contact">Contact</a></li>
                </ul>
                <div className="flex items-center gap-4">
                    <button>
                        <Image src={assets.moon_icon} alt="" className="w-6 cursor-pointer"></Image>
                    </button>

                    <a href="#contact" className={`hidden lg:flex items-center gap-2 px-5
                    py-2.5 border border-gray-500 rounded-full ml-4 text-black `}>Contact
                        <Image src={assets.arrow_icon} className="w-3" alt="" />
                    </a>
                    <button className="block lg:hidden cursor-pointer " onClick={openMenu}>
                        <Image src={assets.menu_black} alt="" className="w-6"></Image>
                    </button>
                </div>

                {/* {mobile menu} */}
                <ul ref={sideMenu} className="flex flex-col md:flex-col gap-4 py-20 px-10 fixed -right-64 
                top-0 bottom-0 w-64 z-50 bg-white shadow-md transition duration-500">
                    <button className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
                        <Image src={assets.close_black} alt="" className="w-6"></Image>
                    </button>
                    <li><a onClick={closeMenu} className="text-gray-500 hover:text-black" href="#top">Home</a></li>
                    <li><a onClick={closeMenu} className="text-gray-500 hover:text-black" href="#about">About Me</a></li>
                    <li><a onClick={closeMenu} className="text-gray-500 hover:text-black" href="#services">Services</a></li>
                    <li><a onClick={closeMenu} className="text-gray-500 hover:text-black" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;