"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import ovo from "@/components/utils";
import { useRouter } from "next/navigation";
import goToLogin from "@/router/routerHandler";

const Header = () => {
    const router = useRouter();

    return (
        <div className="relative min-h-screen overflow-hidden z-0">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 -z-10 pointer-events-none"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                    min-h-screen
                    flex
                    items-center
                    md:px-[12%]
                    gap-10
                    md:gap-20
                    relative
                    z-10
                "
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden lg:block"
                >
                    <Image src={assets.profile_img_light} alt="Athena" />
                </motion.div>

                {/* Text */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className={`text-gray-200 text-2xl font-semibold ${ovo.className}`}
                    >
                        ERP Software House
                    </motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white text-4xl md:text-5xl font-bold leading-tight"
                    >
                        Build Smarter ERP Systems with Athena
                        <span className="text-orange-500">.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className={`text-gray-200 text-lg max-w-3xl mt-4 leading-8 ${ovo.className}`}
                    >
                        We specialize in ERP development — from custom module creation,
                        workflow creation, to full system implementation.
                        Athena helps companies streamline operations and scale efficiently
                        with open-source ERP technology.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col md:flex-row items-center gap-6 mt-8"
                    >
                        <button className="
                            rounded-full px-6 py-2.5
                            border border-white/60
                            text-white
                            bg-white/10
                            backdrop-blur
                            cursor-pointer
                        ">
                            Follow Our Social Media
                        </button>

                        <button
                            onClick={() => goToLogin(router)}
                            className="
                                flex items-center gap-2
                                rounded-full px-6 py-2.5
                                bg-orange-600 text-white
                                hover:bg-orange-700 transition
                                cursor-pointer
                            "
                        >
                            Start Your ERP Project
                            <Image src={assets.right_arrow_white} alt="" className="w-5" />
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Header;
