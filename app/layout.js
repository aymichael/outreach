import "./globals.css";
import Image from "next/image";
import { Nunito_Sans, Raleway } from "next/font/google";
import Link from "next/link";
import NavBar from "./navbar";
import NavBarMobile from "./navbarmobile";
import { IoHome } from "react-icons/io5";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["700"] });
export const metadata = {
  title: "TUYF",
  description: "CUHK-TUYF Partnership Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* THIS is the line that was missing the background gradient classes! */}
        <div className={`${nunito.className} min-h-screen w-full flex flex-col items-center leading-8 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-gray-900 dark:to-slate-800`}>
          
        <header className="md:w-[48rem] lg:w-[64rem] w-full flex flex-row md:flex-col justify-between md:justify-center shadow-md px-2 md:px-4 md:pb-4 md:ring-2 ring-black/5 md:rounded-b-2xl z-10 md:mx-0 dark:bg-gray-800 bg-white">
          <div className="flex justify-center md:justify-between items-center py-4 gap-16">
            <Link href="/" className="items-center hidden md:flex">
              <Image
                src="/department.png"
                alt="Department of Mathematics, CUHK"
                width={303}
                height={78}
              />
            </Link>
          <div className="flex flex-col items-start md:items-center justify-center ml-2 md:ml-6 select-none mr-4">
            <div className="flex items-center gap-2">
              <span className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1e3a8a] dark:text-blue-300 ${raleway.className}`}>
                CUHK
              </span>
              {/* A stylized divider to link the two entities */}
              <span className="text-[#3b82f6] dark:text-blue-500 text-2xl md:text-3xl font-light">|</span>
              <span className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1e3a8a] dark:text-blue-300 ${raleway.className}`}>
                TUYF
              </span>
            </div>
            {/* The subtitle, spaced out elegantly like academic branding */}
            <span className="text-[0.65rem] md:text-xs lg:text-sm font-bold tracking-[0.25em] text-gray-500 dark:text-gray-400 uppercase mt-1">
               Partnership Project
            </span>
          </div>
          </div>
          <div className="hidden md:block">
            <NavBar />
          </div>
          <div className="flex justify-center items-center md:hidden gap-2">
            <Link href="/" className="flex items-center">
              <IoHome size={30} className="text-gray-500 dark:text-gray-400"/>
            </Link>
            <NavBarMobile />
          </div>
        </header>
        <main className="sm:p-8 p-4 w-full md:w-[48rem] lg:w-[64rem] bg-white dark:bg-gray-800 text-lg/8 md:text-xl/8 my-6 md:my-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5 min-h-[75vh]">
          {children}
        </main>        
        </div>
      </body>
    </html>
  );
}