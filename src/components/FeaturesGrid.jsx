"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaFire,
  FaGlobe,
  FaRocket,
  FaShieldAlt,
  FaStopwatch,
  FaTools,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={24} />,
    title: "Inflation Protection",
    desc: "TAN ensures sustainability and long-term value.",
  },
  {
    icon: <FaStopwatch size={24} />,
    title: "Fast",
    desc: "Transact in seconds. Get confirmed in minutes.",
  },
  {
    icon: <FaLock size={24} />,
    title: "Secure",
    desc: "World's most robust blockchain technology.",
  },
  {
    icon: <FaFire size={24} />,
    title: "Low Gas Fee",
    desc: "Deflationary model that protects purchasing power.",
  },
  {
    icon: <FaTools size={24} />,
    title: "EVM Compatible",
    desc: "Ensures seamless Ethereum EVM compatibility.",
  },
  {
    icon: <FaGlobe size={24} />,
    title: "Decentralized",
    desc: "Uses BPoS for secure decentralization.",
  },
  {
    icon: <FaRocket size={24} />,
    title: "Scalable",
    desc: "Scales seamlessly, handling millions instantly.",
  },
  {
    icon: <FaBolt size={24} />,
    title: "60% Fault Tolerance",
    desc: "Ensures security and scalability with BPoS.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl gradient-text text-white font-bold text-center mb-16 "
      >
        Features
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureBox key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

const FeatureBox = ({ feature, index }) => {
  const isLeft = index === 0 || index === 4;
  const isTop = index < 4;

  return (
    <div
      className={`flex flex-col relative group/feature py-10 lg:border-r dark:border-neutral-800 ${
        isLeft ? "lg:border-l dark:border-neutral-800" : ""
      } ${isTop ? "lg:border-b dark:border-neutral-800" : ""}`}
    >
      {/* Hover overlay */}
      <div
        className={`opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 w-full h-full bg-gradient-to-${
          isTop ? "t" : "b"
        } from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none`}
      />

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-cyan-400 dark:text-cyan-300">
        {feature.icon}
      </div>

      {/* Title with animated left bar */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-cyan-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-white">
          {feature.title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {feature.desc}
      </p>
    </div>
  );
};

export default FeaturesGrid;
