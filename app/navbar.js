"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  // Helper function to highlight the active tab
  const isActive = (path) => pathname === path;

  return (
    <nav className="flex items-center gap-4 lg:gap-8 bg-transparent">
      {/* Main Page Link */}
      <Link
        href="/"
        className={`text-lg font-semibold transition-colors duration-300 hover:text-blue-500 ${
          isActive('/') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
        }`}
      >
        Main Page
      </Link>

      {/* Mission Link */}
      <Link
        href="/mission"
        className={`text-lg font-semibold transition-colors duration-300 hover:text-blue-500 ${
          isActive('/') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
        }`}
      >
        Mission
      </Link>

      {/* Current Year Link (Update the href to your actual current year folder routing) */}
      <Link
        href="/2025" 
        className={`text-lg font-semibold transition-colors duration-300 hover:text-blue-500 ${
          isActive('/2025') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
        }`}
      >
        Current Year
      </Link>

      {/* Previous Years Dropdown */}
      <div className="relative group">
        <button className="text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300 flex items-center gap-1 cursor-pointer">
          Previous Years
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className="absolute right-0 lg:left-0 mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white dark:bg-gray-700 shadow-lg rounded-md ring-1 ring-black/5 z-50 overflow-hidden">
          <div className="flex flex-col">
            {/* Update hrefs to match your specific page routing */}
            <Link
              href="/2025"
              className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
            >
              2025-26
            </Link>
            <Link
              href="/2024"
              className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors border-t border-gray-100 dark:border-gray-600"
            >
              2024-25
            </Link>
          </div>
        </div>
      </div>

      {/* Macau Link */}
      <Link
        href="/macau"
        className={`text-lg font-semibold transition-colors duration-300 hover:text-blue-500 ${
          isActive('/macau') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
        }`}
      >
        Pilot Project in Macau
      </Link>
    </nav>
  );
}