"use client";

import { year } from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/navBar.css";
import { useState } from 'react';

export default function NavBarMobile() {
    const years = Array.from({ length: year - 2024 + 1 }, (_, i) => 2024 + i).reverse();
    const currentYear = usePathname().split('/')[1];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative mr-1">
            <nav className={`relative transition-all w-10 h-10 duration-300 ease-in-out`}>
                <button
                    className={`absolute z-20 ring-1 ring-black/10 shadow-lg right-0 rounded-xl w-10 h-10 p-2 justify-center items-center hover:scale-105 active:scale-90 cursor-pointer transition-all duration-500 ease-in-out bg-white dark:bg-gray-800`}
                    aria-label="Toggle navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`absolute w-6 h-[2px] bg-gray-400 transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"}`} />
                    <div className={`absolute w-6 h-[2px] bg-gray-400 ${isOpen ? "hidden" : ""}`} />
                    <div className={`absolute w-6 h-[2px] bg-gray-400 transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0 "}`} />
                </button>
            </nav>
            
            {/* Menu container - positioned absolutely to prevent layout shifts */}
            <div className={`absolute top-0 -left-30 z-10 pt-12 transition-all duration-300 ease-in-out w-40 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="border border-gray-400/50 rounded-xl bg-white dark:bg-gray-800 py-2 shadow-lg">
                    <div className="flex flex-col gap-2 max-h-[50vh] overflow-y-auto">
                        {years.map((year) => (
                            <Link
                                key={year}
                                href={`/${year}`}
                                className={`text-left px-4 py-2 mx-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 ${currentYear === String(year) ? "bg-gray-300 dark:bg-gray-500" : ""}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {year}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}