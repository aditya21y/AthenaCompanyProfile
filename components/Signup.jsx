"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ovo from "@/components/utils";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const res = await fetch("http://localhost:8000/api/method/athena.athena.addon.signup.signup", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    full_name: fullName,
                    password,
                }),
            });

            const data = await res.json();

            // ❌ Handle Error dari Python (ValidationError, Already Exists, dll)
            if (!res.ok || data.exc) {
                let msg = "Signup failed";

                if (data._server_messages) {
                    const decoded = JSON.parse(JSON.parse(data._server_messages)[0]).message;
                    msg = decoded || msg;
                }

                if (data.exc) {
                    try {
                        const errObj = JSON.parse(data.exc);
                        msg = errObj.message || msg;
                    } catch (e) { }
                }

                setError(msg);
                setLoading(false);
                return;
            }

            if (data.message?.status === "success") {
                setSuccess("Account created! Redirecting...");

                // ✅ Auto login
                await fetch("http://localhost:8000/api/method/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                        usr: email,
                        pwd: password,
                    }),
                });

                window.location.href = "http://localhost:8000/app/home";
            } else {
                setError(data.message?.message || "Signup failed");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
            {/* ✅ Brand Title */}
            <div className="text-6xl font-bold mb-6">

                <a href="/">
                    Athena<span className="text-orange-600">.</span>
                </a>
            </div>

            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">

                <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                <p className={`text-gray-600 mb-6`}>
                    Sign up to start using the ERP App
                </p>

                <form onSubmit={handleSignup} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    {error && (
                        <p className="text-red-600 text-sm font-medium bg-red-50 p-2 rounded">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="text-green-600 text-sm font-medium bg-green-50 p-2 rounded">
                            {success}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 font-semibold rounded-md transition cursor-pointer
                        ${loading
                                ? "bg-gray-400 text-white"
                                : "bg-black text-white hover:bg-gray-800"
                            }`}
                    >
                        {loading ? "Processing..." : "Sign Up"}
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-orange-600 hover:underline font-medium">
                        Sign In
                    </a>

                </p>
            </div>
        </div>
    );

}
