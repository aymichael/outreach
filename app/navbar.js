"use client";

import { useState } from 'react';
import { year } from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/navbar.css";

export default function NavBar() {
  const years = Array.from({ length: year - 2024 + 1 }, (_, i) => 2024 + i).reverse();
  const currentYear = usePathname().split('/')[1];
  const [scroll, setScroll] = useState(0);
  return (
    <nav className="flex flex-row items-center justify-between gap-2">
      {/* Left Arrow */}
      <button
        onClick={() => {
          if (scroll > 0) {
            setScroll(scroll - 1);
          }
        }}
        className={`bg-white rounded-full w-6 h-6 ring-2 ring-black/10 flex items-center justify-center shadow-md ${scroll === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Year Links Container */}
      <div
        className="overflow-x-auto scrollbar-hide py-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg mx-auto w-full justify-center lg:flex hidden"
      >
        {years.slice(scroll * 13, (scroll + 1) * 13).map((year) => (
          <Link
            key={year}
            href={`/${year}`}
            className={`hover:text-blue-200 transition-colors duration-300 px-3 rounded-full whitespace-nowrap mx-1 ${currentYear === String(year)
              ? "font-bold bg-white text-black shadow-inner"
              : "text-white"
              }`}
          >
            {year}
          </Link>
        ))}
      </div>
      <div
        className="lg:hidden flex overflow-x-auto scrollbar-hide py-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg mx-auto w-full justify-center"
      >
        {years.slice(scroll * 9, (scroll + 1) * 9).map((year) => (
          <Link
            key={year}
            href={`/${year}`}
            className={`hover:text-blue-200 transition-colors duration-300 px-3 rounded-full whitespace-nowrap mx-1 ${currentYear === String(year)
              ? "font-bold bg-white text-black shadow-inner"
              : "text-white"
              }`}
          >
            {year}
          </Link>
        ))}
      </div>
      {/* Right Arrow */}
      <button
        onClick={() => {
          if ((scroll + 1) * 13 < years.length) {
            setScroll(scroll + 1);
          }
        }}
        className={`bg-white rounded-full w-6 h-6 ring-2 ring-black/10 lg:flex hidden items-center justify-center shadow-lg ${(scroll + 1) * 13 >= years.length ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        onClick={() => {
          if ((scroll + 1) * 9 < years.length) {
            setScroll(scroll + 1);
          }
        }}
        className={`bg-white rounded-full w-6 h-6 ring-2 ring-black/10 lg:hidden flex items-center justify-center shadow-lg ${(scroll + 1) * 9 >= years.length ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}