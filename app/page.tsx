"use client"

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopServices from "@/components/TopServices";
import { motion, useScroll } from "framer-motion"


export default function HomePage() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <Hero />
      </motion.div>
      <Features />
      <TopServices />
      <Footer />

    </>
  )
}
