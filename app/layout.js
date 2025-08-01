import "./globals.css";
import Image from "next/image";
import { Nunito_Sans, Raleway } from "next/font/google";
import Link from "next/link";
import NavBar from "./navbar";
import NavBarMobile from "./navBarMobile";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["700"] });
export const metadata = {
  title: "TUYF",
  description: "CUHK-TUYF Partnership Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} min-h-screen w-full dark:bg-gray-700 flex items-center leading-8 flex-col`}>
        <header className="md:w-[48rem] lg:w-[64rem] w-full flex flex-row md:flex-col justify-between md:justify-center shadow-md px-2 md:px-4 md:pb-4 md:ring-2 ring-black/5 md:rounded-b-2xl z-10 md:mx-0">
          <div className="flex justify-center md:justify-between items-center py-4 gap-16">
            <Link href="/" className="items-center hidden md:flex">
              <Image
                src="/department.png"
                alt="Department of Mathematics, CUHK"
                width={303}
                height={78}
              />
            </Link>
            <span className={`text-2xl md:text-3xl lg:text-4xl md:text-center select-none md:whitespace-nowrap ml-1 md:ml-4 mr-1 ${raleway.className}`}>
              CUHK - TUYF Partnership Project
            </span>
          </div>
          <div className="hidden md:block">
            <NavBar />
          </div>
           <div className="flex justify-center items-center md:hidden ">
            <NavBarMobile />
          </div>
        </header>
        <main className="sm:p-4 p-2 w-full md:w-[48rem] lg:w-[64rem] bg-white/90 dark:bg-gray-700/90 shadow-white dark:shadow-gray-700 shadow-2xl h-full text-lg/8 md:text-xl/8">
          {children}
        </main>
      </body>
    </html>
  );
}
