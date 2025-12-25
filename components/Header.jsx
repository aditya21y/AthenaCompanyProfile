"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaComments,
    FaWpforms,
    FaEnvelope,
    FaWhatsapp,
    FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";
import goToLogin from "@/router/routerHandler";

/* ================= MOTION VARIANTS ================= */
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const buttonPop = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const Header = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* ================= BACKGROUND VIDEO ================= */}
            <video
                className="absolute inset-0 w-full h-full object-cover -z-10"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* ================= OVERLAY ================= */}
            <div className="absolute inset-0 bg-black/60 -z-10" />

            {/* ================= HERO CONTENT ================= */}
            <div className="relative z-10 min-h-[85vh] lg:min-h-screen flex items-center px-6 md:px-[12%]">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-5xl"
                >
                    {/* ===== HERO TITLE ===== */}
                    <motion.h1
                        variants={itemUp}
                        className="
                text-white
                font-extrabold
                leading-tight
                text-[clamp(2.5rem,5vw,4.5rem)]
            "
                    >
                        <span className="text-orange-600">One System</span> <br />
                        Streamlined Processes <br />
                        Clear Data <br />
                        Better Business Decisions.
                    </motion.h1>

                    {/* ===== HERO SUBTITLE ===== */}
                    <motion.p
                        variants={itemUp}
                        className="
                mt-8
                max-w-4xl
                text-gray-200
                leading-relaxed
                text-[clamp(1.1rem,2vw,1.6rem)]
            "
                    >
                        We design and implement ERPNext systems that unify operations and
                        deliver data you can trust.
                    </motion.p>

                    {/* ===== CTA ===== */}
                    <motion.div variants={buttonPop} className="mt-10">
                        <button
                            onClick={() => goToLogin(router)}
                            className="
                    flex items-center gap-2
                    rounded-full
                    px-7 py-3
                    bg-orange-600
                    hover:bg-orange-700
                    transition
                    text-white
                    font-semibold
                "
                        >
                            Request Free Consultation & Demo
                            <Image
                                src={assets.right_arrow_white}
                                alt="arrow"
                                className="w-5"
                            />
                        </button>
                    </motion.div>
                </motion.div>
            </div>


            {/* ================= STICKY CONTACT BUTTON ================= */}
            <motion.button
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                onClick={() => setOpen(true)}
                className="
          fixed top-1/2 right-0 z-50
          bg-orange-600 text-white
          px-4 py-3
          rounded-l-xl
          shadow-lg
          hover:bg-orange-700
          transition
          -translate-y-1/2
        "
            >
                <div className="flex flex-col items-center text-sm font-semibold leading-tight">
                    <FaComments className="text-lg mb-1" />
                    <span>Hubungi</span>
                    <span>Kami</span>
                </div>
            </motion.button>

            {/* ================= SLIDEOUT PANEL ================= */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black z-40"
                        />

                        {/* PANEL */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 260, damping: 30 }}
                            className="
                fixed top-0 right-0 z-50
                h-full w-[360px]
                bg-white shadow-2xl
                p-6
              "
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-800">
                                    Hubungi Kami
                                </h3>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-gray-500 hover:text-black text-xl"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="space-y-4">
                                <ContactItem
                                    icon={<FaWpforms />}
                                    title="Demo Gratis"
                                    desc="Daftar demo sistem sekarang"
                                    action="Daftar"
                                    href="/login"
                                />

                                <ContactItem
                                    icon={<FaEnvelope />}
                                    title="Email"
                                    desc="adityayudhaperdana21@gmail.com"
                                    action="Email"
                                    href="mailto:adityayudhaperdana21@gmail.com"
                                />

                                <ContactItem
                                    icon={<FaWhatsapp />}
                                    title="WhatsApp"
                                    desc="Chat langsung dengan kami"
                                    action="WhatsApp"
                                    href="https://wa.me/6282334468710"
                                />

                                <ContactItem
                                    icon={<FaPhoneAlt />}
                                    title="Telepon"
                                    desc="+62 823-3446-8710"
                                    action="Telepon"
                                    href="tel:+6282334468710"
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;

/* ================= CONTACT ITEM ================= */
const ContactItem = ({ icon, title, desc, action, href }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-4 border rounded-xl p-4 hover:shadow transition"
        >
            <div className="text-orange-500 text-3xl shrink-0">{icon}</div>

            <div className="flex flex-col">
                <p className="font-semibold text-gray-800">{title}</p>
                <p className="text-sm text-gray-600 break-all">{desc}</p>
            </div>

            <a
                href={href}
                className="
          bg-orange-500 text-white
          px-4 py-2
          rounded-lg text-sm font-semibold
          hover:bg-orange-600
          transition
        "
            >
                {action}
            </a>
        </motion.div>
    );
};
