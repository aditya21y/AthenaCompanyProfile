'use client';
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Order from "@/components/Order";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";
import { assets } from "@/assets/assets";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href={assets.sun_icon} />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Order />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
