"use client";

import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import goToLogin from "@/router/routerHandler";
import { useRouter } from "next/navigation";


export default function ReadyToClaritySection() {
    const router = useRouter();
    return (
        <section className="w-full bg-slate-900 text-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-semibold mb-6"
                >
                    Ready to Bring Clarity to Your Business Systems?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10"
                >
                    If you are looking for one system with streamlined processes and clear
                    data to support better decisions, let’s talk.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={() => goToLogin(router)}
                        className="
                  flex items-center gap-2
                  rounded-full px-6 py-2.5
                  bg-orange-600 text-white
                  hover:bg-orange-700 transition
                "
                    >Request Free Consultation & Demo
                        <Image
                            src={assets.right_arrow_white}
                            alt=""
                            className="w-5"
                        />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
