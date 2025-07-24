import React, { useRef } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 px-4 py-8 md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <FooterLink
          heading="About"
          subheading="Learn what we do here"
          imgSrc="/icons/about.webp"
          href="#"
          items={[
            "BPos Consensus",
            "TAN Coin",
            "Explorer",
            "Launch App",
            "Super Seed Sale",
          ]}
        />
        <FooterLink
          heading="Explore"
          subheading="We work with great people"
          imgSrc="/icons/Explore.webp"
          href="#"
          items={[
            "Roadmap",
            "TAN Coin",
            "TAN Docs",
            "Vesting Schedule",
            "Our Team",
          ]}
        />
        <FooterLink
          heading="Social"
          subheading="Our work speaks for itself"
          imgSrc="/icons/Social.webp"
          href="#"
          items={["X (Twitter)", "Telegram", "Announcements"]}
        />
      </div>

      <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Tan. All rights reserved.
      </div>
    </footer>
  );
};

const FooterLink = ({ heading, imgSrc, subheading, href, items = [] }) => {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = React.useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial="initial"
      whileHover="whileHover"
      className="group relative block border-b border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-400 md:py-6"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-2xl font-semibold text-neutral-400 transition-colors duration-500 group-hover:text-neutral-100 md:text-3xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </motion.span>

        <span className="relative z-10 mt-2 block text-sm text-neutral-500 transition-colors duration-500 group-hover:text-neutral-300">
          {subheading}
        </span>

        {/* Reveal sub-links on hover */}
        <AnimatePresence>
          {isHovering && (
            <motion.ul
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                y: { duration: 0.3 },
                height: { duration: 0.35 },
              }}
              className="overflow-hidden mt-4 space-y-1 pl-1 text-sm text-neutral-400"
            >
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-white transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-14 w-20 rounded-md object-cover opacity-80 md:h-29 md:w-28"
        alt={`Image for ${heading}`}
      />

      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 mt-4 inline-block"
      >
        <FiArrowRight className="text-3xl text-neutral-300 group-hover:text-neutral-100" />
      </motion.div>
    </motion.a>
  );
};

export default Footer;
