import React from "react";
import ovo from "@/components/utils"; // Importing the Ovo font
const Contact = () => {
    return (
        <div id="contact" className="w-full px-[10%] py-24 bg-gray-50 scroll-mt-20 rounded-2xl">
            <h4 className={`text-2xl text-center text-gray-500 mb-2`}>Get in Touch</h4>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h2>

            <div className="max-w-5xl mx-auto text-center mb-16">
                <p className={`text-lg text-gray-600 leading-relaxed`}>
                    We would love to hear from you! Whether you have a question about our services, need assistance, or just want to say hello, feel free to reach out.
                </p>
            </div>

            {/* Form */}
            <form
                action="mailto:youremail@example.com" // <- Ganti ke email kamu
                method="POST"
                encType="text/plain"
                className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
                <button
                    type="submit"
                    className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300 w-fit mx-auto"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
