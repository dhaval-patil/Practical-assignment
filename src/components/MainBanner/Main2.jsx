"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TextHoverEffect } from "../ui/text-hover-effect";

const features = [
  {
    title: "Block Per Reward",
    description:
      "Block Per Reward Proof of Stake (BPoS) powers TAN, combining PoS benefits with unique reward distribution for unparalleled scalability and efficient validation.",
  },
  {
    title: "Validator Incentive",
    description:
      "Validators in BPoS earn rewards through a share of block rewards, not just transaction fees, receiving a portion of each block's TAN rewards.",
  },
  {
    title: "Subsidy and Incentives",
    description:
      "At BPoS, block rewards are distributed for subsidy against burning of TAN and incentives for stakers, validators, and hodlers.",
  },
  {
    title: "Transaction Fee Burning",
    description:
      "Transaction fees in TAN are fully burned, reducing supply over time, creating deflationary pressure, and enhancing the value of tokens for holders.",
  },
  {
    title: "Halving",
    description:
      "Every four years, block rewards halve, creating a deflationary model that steadily reduces new token supply, ensuring controlled and predictable inflation rates.",
  },
];

const Main2 = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothedProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });

  const backgroundY = useTransform(smoothedProgress, [0, 1], [0, -100]);

  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative z-20 py-32 px-4 text-white overflow-hidden border-t-2 border-[#9d9d9d] rounded-tr-4xl rounded-tl-4xl"
      style={{
        background: "linear-gradient(120deg, #000000, #111111, #000000)",
        backgroundSize: "200% 200%",
      }}
    >
      <motion.img
        src="/download1.jpg"
        alt="pattern"
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-20 opacity-10 w-full h-full object-cover"
      />

      {/* Floating BPOS text */}

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-6xl font-medium mb-13 text-center"
      >
        <div className="">
          The{" "}
          <span className="relative inline-block mx-1">
            <motion.span
              className="absolute inset-0 rounded-md -z-10 bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-800 animate-gradient bg-[length:300%_300%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <span className="px-2 py-1 text-[#0D060C]">Smarter</span>
          </span>{" "}
          Consensus{" "}
        </div>
        <div className=" relative">
          <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-1/3 ">
            <div
              data-scroll
              data-scroll-speed=".2"
              className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#947194]"
            >
              <div className="relative w-2/3 h-2/3  rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute line top-2/2 left-2/2 -translate-x-1/2 -translate-y-[68px] w-full h-10"
                >
                  <div className="w-10 h-10 rounded-full bg-[#947194] blur-[1px]"></div>
                </div>
              </div>
            </div>
            <div
              data-scroll
              data-scroll-speed=".2"
              className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#947194]"
            >
              <div className="relative w-2/3 h-2/3  rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute line top-2/2 left-2/2 -translate-x-[50%] -translate-y-[68px] w-full h-10"
                >
                  <div className="w-10 h-10 rounded-full bg-[#947194] blur-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
          <span>
            <TextHoverEffect text="EYES" />
          </span>
        </div>
      </motion.h2>

      {/* Scroll-driven Cards */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-10">
        {features.map((item, index) => {
          const progressStart = index * 0.15;
          const progressEnd = progressStart + 0.2;

          const x = useTransform(
            smoothedProgress,
            [progressStart, progressEnd],
            [index % 2 === 0 ? -150 : 150, 0]
          );

          const rotate = useTransform(
            smoothedProgress,
            [progressStart, progressEnd],
            [index % 2 === 0 ? -3 : 3, 0]
          );

          const opacity = useTransform(
            smoothedProgress,
            [progressStart, progressEnd],
            [0, 1]
          );

          const scale = useTransform(
            smoothedProgress,
            [progressStart, progressEnd],
            [0.95, 1]
          );

          return (
            <motion.div
              key={index}
              style={{
                x,
                rotateZ: rotate,
                opacity,
                scale,
                zIndex: features.length - index,
              }}
              className={`bg-black border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 relative overflow-hidden ${
                index % 2 === 0 ? "self-start" : "self-end"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-6 text-sm">{item.description}</p>

              {/* View More Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-5 right-5 px-5 py-2 border border-white text-white rounded-full text-sm overflow-hidden group backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center">
                  View More
                  <motion.span
                    initial={{ x: -5, opacity: 0 }}
                    whileHover={{ x: 5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="ml-1"
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  initial={{ opacity: 0, scale: 1.5 }}
                  whileHover={{
                    opacity: 0.15,
                    scale: 1,
                    transition: { duration: 0.5 },
                  }}
                  className="absolute inset-0 z-0 bg-[url('/download1.jpg')] bg-cover bg-center rounded-full"
                />
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Main2;
