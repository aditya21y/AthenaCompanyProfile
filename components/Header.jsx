"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";
import ovo from "@/components/utils";
import { useRouter } from "next/navigation";
import goToLogin from "@/router/routerHandler";

/* ================= SLIDES ================= */
const slides = [
    {
        tag: "ATHENA SOLUTION",
        title: (
            <>
                Build Smarter ERP Systems with Athena
                <span className="text-orange-500">.</span>
            </>
        ),
        desc: `We specialize in ERP development — from custom module creation,
workflow creation, to full system implementation.
Athena helps companies streamline operations and scale efficiently.`,
        cta: "Request Free Consultation & Demo",
    },
    {
        tag: "ATHENA SOLUTION",
        title: (
            <>
                Clarity Through Systems
                <span className="text-orange-500">.</span>
            </>
        ),
        desc: `One System, Streamlined Processes, Clear Data, 
Better Business Decisions.
We design and implement ERPNext systems that unify operations
and deliver data you can trust.`,
        cta: "Request Free Consultation & Demo",
    },
];

const Header = () => {
    const router = useRouter();

    /* ================= SLIDER STATE ================= */
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const current = slides[index];

    return (
        <div className="relative min-h-screen overflow-hidden z-0">
            {/* ================= BACKGROUND VIDEO ================= */}
            <video
                className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* ================= OVERLAY ================= */}
            <div className="absolute inset-0 bg-black/50 -z-10 pointer-events-none" />

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 min-h-screen flex items-center md:px-[12%] gap-10 md:gap-20">
                {/* ===== IMAGE ===== */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="
                    hidden md:flex
                    flex-shrink-0
                    w-[180px]
                    lg:w-[530px]
                    xl:w-[530px]
                "
                >
                    <Image
                        src={assets.profile_img_light}
                        alt="Athena"
                        width={260}
                        height={400}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </motion.div>


                {/* ===== TEXT SLIDER ===== */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="ml-10"
                    >
                        <h3 className={`text-gray-200 text-3xl font-semibold`}>
                            {current.tag}
                        </h3>

                        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mt-2">
                            {current.title}
                        </h1>

                        <p
                            className={`text-gray-200 text-2xl max-w-4xl mt-4 leading-8`}
                        >
                            {current.desc}
                        </p>

                        {/* ===== BUTTONS (2 BUTTON TETEP ADA) ===== */}
                        <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
                            {/* Button 1 - Social */}
                            {/* <button
                                className="
                  rounded-full px-6 py-2.5
                  border border-white/60
                  text-white
                  bg-white/10
                  backdrop-blur
                  hover:bg-white/20
                  transition
                "
                            >
                                Follow Our Social Media
                            </button> */}

                            {/* Button 2 - Main CTA */}
                            <button
                                onClick={() => goToLogin(router)}
                                className="
                  flex items-center gap-2
                  rounded-full px-6 py-2.5
                  bg-orange-600 text-white
                  hover:bg-orange-700 transition
                "
                            >
                                {current.cta}
                                <Image
                                    src={assets.right_arrow_white}
                                    alt=""
                                    className="w-5"
                                />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Header;
