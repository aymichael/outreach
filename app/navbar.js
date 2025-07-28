"use client";

import { useState, useRef, useEffect } from 'react';
import { year } from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/navbar.css";

export default function Navbar() {
  const years = Array.from({ length: year - 2000 + 1 }, (_, i) => 2000 + i).reverse();
  const currentYear = usePathname().split('/')[1];
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check if arrows should be visible
  const checkArrows = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Handle scroll events and initial render
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkArrows();
      container.addEventListener('scroll', checkArrows);
      window.addEventListener('resize', checkArrows);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkArrows);
      }
      window.removeEventListener('resize', checkArrows);
    };
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="flex flex-row items-center justify-between gap-2">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button 
          onClick={() => scroll('left')}
          className="bg-white rounded-full w-6 h-6 ring-2 ring-black/10 flex items-center justify-center shadow-md"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Year Links Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide py-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg mx-auto "
      >
          {years.map((year) => (
            <Link
              key={year}
              href={`/${year}`}
              className={`hover:text-blue-200 transition-colors duration-300 px-3 rounded-full whitespace-nowrap mx-1 ${
                currentYear === String(year) 
                  ? "font-bold bg-white text-black shadow-inner" 
                  : "text-white"
              }`}
            >
              {year}
            </Link>
          ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button 
          onClick={() => scroll('right')}
          className="bg-white rounded-full w-6 h-6 ring-2 ring-black/10 flex items-center justify-center shadow-lg"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </nav>
  );
}