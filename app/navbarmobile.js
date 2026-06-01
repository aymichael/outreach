"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

export default function NavBarMobile() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [showPrevious, setShowPrevious] = useState(false);

    return (
        <div className="relative mr-1">
            {/* Hamburger Menu Button */}
            <nav className={`relative transition-all w-10 h-10 duration-300 ease-in-out`}>
                <button
                    className={`absolute z-20 ring-1 ring-black/10 shadow-lg right-0 rounded-xl w-10 h-10 p-2 justify-center items-center hover:scale-105 active:scale-90 cursor-pointer transition-all duration-500 ease-in-out bg-white dark:bg-gray-700`}
                    aria-label="Toggle navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`absolute w-6 h-[2px] bg-gray-400 transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"}`} />
                    <div className={`absolute w-6 h-[2px] bg-gray-400 ${isOpen ? "hidden" : ""}`} />
                    <div className={`absolute w-6 h-[2px] bg-gray-400 transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0 "}`} />
                </button>
            </nav>
            
            {/* Dropdown Container */}
            <div className={`absolute top-0 -left-48 z-10 pt-14 transition-all duration-300 ease-in-out w-56 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 py-2 shadow-xl">
                    <div className="flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
                        
                        <Link 
                            href="/" 
                            className="text-left px-5 py-3 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Main Page
                        </Link>

                        {/* Update href to your current year route */}
                        <Link 
                            href="/2026" 
                            className="text-left px-5 py-3 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Current Year
                        </Link>
                        
                        <div className="mx-2">
                            <button 
                                onClick={() => setShowPrevious(!showPrevious)}
                                className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 flex justify-between items-center"
                            >
                                Previous Years
                                <span className={`transition-transform duration-300 text-xs ${showPrevious ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            
                            {/* Nested Submenu */}
                            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${showPrevious ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                <Link 
                                    href="/2025" 
                                    className="pl-8 pr-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-sm" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    2025-26
                                </Link>
                                <Link 
                                    href="/2024" 
                                    className="pl-8 pr-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-sm" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    2024-25
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}