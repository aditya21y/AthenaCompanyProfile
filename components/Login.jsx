"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ovo from "@/components/utils";
import Link from "next/link";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("http://202.10.48.104/api/method/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    usr: username,
                    pwd: password,
                }),
            });

            let data;
            const contentType = res.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                data = await res.json();
            } else {
                const text = await res.text();
                console.error("Non-JSON response:", text);
                throw new Error("Internal server error");
            }

            if (res.ok && data.message === "Logged In") {
                window.location.href = "http://202.10.48.104/app/home";
            } else {
                setError(data.message || "Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">

            {/* ✅ Brand Title */}
            <div className="mb-6">
                <Link href="/">
                    <Image
                        src={assets.new_logo_dark}
                        alt="logo"
                        className="w-50 cursor-pointer shrink-0"
                        priority
                    />
                </Link>
            </div>

            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">

                <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                <p className={`text-gray-600 mb-6`}>
                    Log in to access your ERP App
                </p>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
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

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 bg-black text-white font-semibold rounded-md transition cursor-pointer 
                    ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-800"}`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Processing...
                            </div>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-600 text-center">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-orange-600 hover:underline font-medium">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );


};

export default LoginPage;
