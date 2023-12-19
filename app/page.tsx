"use client"

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopServices from "@/components/TopServices";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <TopServices />
      <Footer/>
    </>
  )
}
