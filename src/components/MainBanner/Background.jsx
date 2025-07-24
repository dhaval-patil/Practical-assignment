"use client";
import React, { useEffect, useState } from "react";
import LightRays from "./LightRays";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export function WavyBackground() {
  const labels = ["Powered", "By", "BPos consensus"];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hovered, setHovered] = useState(null);

  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
    `;
  const logos = [
    "https://www.tan.live/HomePage/featured/LBN_LOGO.svg",
    "https://www.tan.live/HomePage/featured/cointurk.svg",
    "https://www.tan.live/HomePage/featured/bscdaily.svg",
    "https://www.tan.live/HomePage/featured/cryptoreporter.svg",
    "https://www.tan.live/HomePage/featured/cmc.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % labels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-between items-center min-h-screen px-4">
        {/* Main Content - Centered */}
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          {/* Subheading */}
          <motion.p
            className="uppercase text-xs sm:text-sm tracking-widest text-white"
            initial={{ filter: "blur(8px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            Together, Towards, Tomorrow
          </motion.p>

          {/* Main Heading */}
          <p className="text-3xl font-[Geist] sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold inter-var mt-4">
            An <span className="gradient-text">EVM</span> Compatible{" "}
            <p className="gradient-text text-4xl font-bold">L-1 Chain</p>
          </p>

          {/* Rotating Words */}
          <div className="mt-4 h-10 font-[Bebas Neue] sm:h-12 md:h-14 flex items-center justify-center relative w-full">
            {labels.map((label, i) => (
              <motion.div
                key={label}
                className="absolute text-lg sm:text-xl md:text-2xl font-semibold text-violet-50"
                style={{
                  opacity: currentIndex === i ? 1 : 0,
                  transform: currentIndex === i ? "scale(1)" : "scale(0.8)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                {label}
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center flex-wrap gap-6 mt-6">
            {["White Paper", "Buy Now"].map((label, index) => (
              <motion.button
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative cursor-pointer overflow-hidden px-13 py-3 rounded-xl text-sm font-bold border border-zinc-600 text-cyan-800 bg-black/50 backdrop-blur-sm shadow-lg shadow-cyan-500/10 transition-all duration-300 group"
              >
                {hovered === index && (
                  <motion.div
                    layoutId="buttonBackground"
                    className="absolute inset-0 bg-cyan-400 rounded-xl z-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    style={{ originX: 0 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    hovered === index ? "text-black" : "text-white"
                  }`}
                >
                  {label}
                </span>
                <motion.span
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-[#1f1f1f] group-hover:bg-black text-white p-2 rounded-full transition-colors"
                  initial={{ x: 0, rotate: 0 }}
                  animate={
                    hovered === index
                      ? { x: 10, rotate: 15 }
                      : { x: 0, rotate: 0 }
                  }
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                >
                  <BsArrowRight />
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-xl border border-cyan-500 blur-sm opacity-20"
                  animate={{ opacity: hovered === index ? 0.5 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Marquee at Bottom */}
        <div className="w-full overflow-hidden py-6 bg-transparent">
          <style>
            {`
            @keyframes scroll-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
          </style>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex gap-12 w-max animate-[scroll-marquee_20s_linear_infinite]"
              style={{ minWidth: "50%" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-13 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
