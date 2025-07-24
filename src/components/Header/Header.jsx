import React, { useState } from "react";
import logo from "./logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

const DURATION = 0.25;
const STAGGER = 0.025;

const Hamburger = ({ isOpen, toggle }) => (
  <button onClick={toggle} className="md:hidden relative w-8 h-6 z-50">
    <motion.span
      className="absolute top-0 left-0 h-0.5 w-8 bg-white"
      animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="absolute top-2.5 left-0 h-0.5 w-8 bg-white"
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="absolute bottom-0 left-0 h-0.5 w-8 bg-white"
      animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
      transition={{ duration: 0.3 }}
    />
  </button>
);

const NavLink = ({ label, href }) => (
  <motion.a
    href={href}
    className="relative overflow-hidden inline-block px-1"
    initial="rest"
    whileHover="hover"
    animate="rest"
  >
    <motion.span
      variants={{
        rest: { y: 0, opacity: 1 },
        hover: {
          y: [-2, -10, 0],
          opacity: [1, 0, 1],
          transition: { duration: 0.4 },
        },
      }}
      className="block"
    >
      {label}
    </motion.span>

    <motion.span
      variants={{
        rest: { width: "0%", opacity: 0, x: "-100%" },
        hover: {
          width: "100%",
          opacity: 1,
          x: "0%",
          transition: { duration: 0.4 },
        },
      }}
      className="absolute left-0 bottom-0 h-[2px] bg-[#a29bfe] block"
    />
  </motion.a>
);

const BuyNowButton = ({ href = "#" }) => (
  <a
    href={href}
    className="group ml-4 flex h-10 items-center gap-2 rounded-full bg-zinc-800 px-4 transition-all duration-300 ease-in-out hover:bg-black hover:text-white active:bg-neutral-700"
  >
    <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[0px] group-hover:text-lg group-hover:text-black group-hover:translate-x-0 transition-all duration-300 -translate-x-[200%]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </span>
    <span>Buy Now</span>
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Win $50k", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Explorer", href: "#" },
  ];

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-40 light-border-wrapper">
        <div className="light-border"></div>
      </div>

      {/* Navbar */}
      <motion.div
        className="fixed border-2 border-zinc-800 top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50 flex items-center justify-between px-6 h-16 bg-gray/50 backdrop-blur-md text-white rounded-full shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-8" />
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item, index) => (
            <NavLink key={index} {...item} />
          ))}
          <BuyNowButton />
        </div>

        <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 w-full h-full bg-black text-white z-40 flex flex-col justify-center items-center"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileHover="hovered"
                className="relative text-5xl font-black uppercase mb-6 overflow-hidden"
              >
                <div>
                  {item.label.split("").map((l, i) => (
                    <motion.span
                      key={`top-${index}-${i}`}
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" },
                      }}
                      transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i,
                      }}
                      className="inline-block"
                    >
                      {l}
                    </motion.span>
                  ))}
                </div>
                <div className="absolute inset-0">
                  {item.label.split("").map((l, i) => (
                    <motion.span
                      key={`bottom-${index}-${i}`}
                      variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                      }}
                      transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i,
                      }}
                      className="inline-block"
                    >
                      {l}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
            <BuyNowButton />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
