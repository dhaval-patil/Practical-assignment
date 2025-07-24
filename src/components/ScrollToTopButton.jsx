import React, { useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const maxOffset = 12;
    const dampen = 4;

    setOffset({
      x: Math.max(-maxOffset, Math.min(x / dampen, maxOffset)),
      y: Math.max(-maxOffset, Math.min(y / dampen, maxOffset)),
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-6 right-6 z-50 h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      <button
        onClick={handleScrollTop}
        className="group relative grid h-full w-full place-content-center rounded-full border-2 border-zinc-300 transition-all duration-300 ease-out overflow-hidden cursor-pointer  hover:scale-110"
      >
        {/* Arrow Icon */}
        <FaArrowUp className="pointer-events-none relative z-10 text-xl sm:text-2xl text-zinc-300 transition-transform duration-500 ease-out group-hover:rotate-0" />

        {/* Circular Text */}
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute z-0 w-full h-full"
        >
          <path
            id="circlePath"
            d="M50,50 m-45,0 a45,45 0 1,0 90,0 a45,45 0 1,0 -90,0"
            fill="none"
          />
          <text>
            <textPath
              href="#circlePath"
              className="fill-white text-[9px] sm:text-[10px] font-medium uppercase opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              startOffset="0%"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="5s"
                repeatCount="indefinite"
              />
              Scroll to top • Scroll to top • Scroll to top •
            </textPath>
          </text>
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
