"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoIosInformationCircle } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

const steps = [
  { icon: <IoIosInformationCircle size={28} />, label: "Inform Yourself" },
  { icon: <FaWallet size={28} />, label: "Choose Your Wallet" },
  { icon: <MdDownload size={28} />, label: "Get TAN" },
  { icon: <BsSearch size={28} />, label: "Spend TAN" },
];

const ScrollStepDiagram = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const stepProgress = steps.map((_, i) =>
    useTransform(
      scrollYProgress,
      [i / steps.length, (i + 0.5) / steps.length],
      [0, 1]
    )
  );

  return (
    <section
      ref={containerRef}
      className="h-[300vh] bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white"
    >
      {/* Sticky Centered Content */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl gradient-text sm:text-6xl font-bold mb-16 text-center tracking-tight"
        >
          How to Use TAN
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative group"
            >
              {/* Icon */}
              <motion.div
                className="bg-white text-black p-4 rounded-full shadow-2xl z-10"
                style={{
                  scale: stepProgress[index],
                  opacity: stepProgress[index],
                  rotate: useTransform(stepProgress[index], [0, 1], [90, 0]),
                }}
              >
                {step.icon}
              </motion.div>

              {/* Label */}
              <motion.span
                className="mt-4 text-center font-medium sm:text-lg text-sm w-28 sm:w-32"
                style={{
                  opacity: stepProgress[index],
                  scale: stepProgress[index],
                }}
              >
                {step.label}
              </motion.span>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden sm:block absolute top-1/2 left-full h-1 bg-gradient-to-r from-white/70 to-white/20"
                  style={{
                    width: "80px",
                    scaleX: stepProgress[index],
                    transformOrigin: "left",
                    opacity: stepProgress[index],
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollStepDiagram;
