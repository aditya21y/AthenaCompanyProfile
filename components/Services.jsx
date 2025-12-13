import React from "react";
import { FaCogs, FaProjectDiagram, FaCloud, FaRedo, FaRocket } from "react-icons/fa";
import ovo from "@/components/utils"; // pakai Ovo font biar konsisten

const Services = () => {
    return (
        <div id="services" className="w-full px-[10%] py-24 scroll-mt-20 bg-white rounded-2xl">
            <h4 className={`text-2xl text-center text-gray-500 mb-2`}>Our Services</h4>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">What We Offer</h2>

            <div className="max-w-5xl mx-auto text-center mb-16">
                <p className={`text-lg text-gray-600 leading-relaxed`}>
                    At Athena, we specialize in providing comprehensive ERPNext solutions tailored to your business needs. Our services include:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <ServiceCard
                    icon={<FaCogs className="text-4xl text-blue-600 mb-4" />}
                    title="Custom Module Development"
                    desc="We develop ERPNext modules tailored to your exact business workflows and logic."
                />
                <ServiceCard
                    icon={<FaProjectDiagram className="text-4xl text-purple-600 mb-4" />}
                    title="Workflow Automation"
                    desc="Optimize your operations with custom scripts and automation rules."
                />
                <ServiceCard
                    icon={<FaRocket className="text-4xl text-pink-500 mb-4" />}
                    title="System Implementation"
                    desc="From setup to go-live, we handle end-to-end ERPNext deployments."
                />
                <ServiceCard
                    icon={<FaCloud className="text-4xl text-cyan-600 mb-4" />}
                    title="Cloud Deployment"
                    desc="Deploy ERPNext securely on cloud infrastructure with scaling in mind."
                />
                <ServiceCard
                    icon={<FaRedo className="text-4xl text-green-600 mb-4" />}
                    title="Support & Maintenance"
                    desc="Keep your system up-to-date with our reliable support & upgrade services."
                />
                <ServiceCard
                    icon={<FaCogs className="text-4xl text-yellow-600 mb-4" />}
                    title="Affordable ERPNext Packages"
                    desc="Ideal for startups and small businesses. We offer streamlined ERP setups at budget-friendly pricing without compromising quality."
                />
            </div>
        </div>
    );
};

const ServiceCard = (props) => {
    const { icon, title, desc } = props;
    return (
        <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
            <div className="flex flex-col items-center">
                {icon}
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className={`text-gray-600`}>{desc}</p>
            </div>
        </div>
    );
};

export default Services;
