import React from "react";
import ovo from "@/components/utils"; // Importing the Ovo font
import { FaTools, FaRocket, FaUsers } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="w-full px-[10%] py-24 bg-gray-50 scroll-mt-20 rounded-2xl">
            <h4 className={`${ovo.className} text-2xl text-center text-gray-500 mb-2`}>introduction</h4>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">About Us</h2>

            <div className="max-w-5xl mx-auto text-center mb-16">
                <p className={`${ovo.className} text-lg text-gray-600 leading-relaxed`}>
                    Athena is a dedicated software house focused on ERPNext. Our mission is to empower businesses with tailored ERP solutions
                    that streamline operations, increase visibility, and drive digital transformation. With years of experience and a deep
                    understanding of business processes, we provide full-cycle implementation and custom development — helping clients scale with confidence.
                </p>
            </div>

            {/* Feature Highlights / Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="flex flex-col items-center">
                    <FaTools className="text-4xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Custom ERPNext</h3>
                    <p className={`${ovo.className} text-gray-600`}>
                        We build modules, workflows, and reports tailored to your unique business needs.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <FaRocket className="text-4xl text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
                    <p className={`${ovo.className} text-gray-600`}>
                        Backend solutions that scale — from startups to enterprise, with cloud-native deployments.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <FaUsers className="text-4xl text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Collaborative Team</h3>
                    <p className={`${ovo.className} text-gray-600`}>
                        We work closely with clients, ensuring transparency and long-term partnership.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
