"use client";

import { year } from "./data"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    // create year list from 2024 to year
    const years = Array.from({ length: year - 2024 + 1 }, (_, i) => 2024 + i).reverse();
    const currentYear = usePathname().split('/')[1];
    console.log("Current Year:", currentYear);
    return (
        <nav className="flex bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-1 rounded-full shadow-lg">
            {years.map((year) => (
                <Link
                    key={year}
                    href={`/${year}`}
                    className={` hover:text-blue-200 transition-colors duration-300 mx-2 px-2 rounded-full ${currentYear === String(year) ? "font-bold bg-white text-black" : "text-white"}`}
                >
                    {year}
                </Link>
            ))}

        </nav>
    )
}