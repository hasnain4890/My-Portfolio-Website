"use client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { useState } from "react";
import Contact from "./components/Contact";

export default function Home() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <main className="">
      <Navbar
        setIsContentVisible={setIsContentVisible}
        isContentVisible={isContentVisible}
      />
      <HeroSection />
      <About />
      <MySkills />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
