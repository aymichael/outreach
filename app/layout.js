import "./globals.css";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import Link from "next/link";
import Navbar from "./navbar";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "TUYF",
  description: "CUHK-TUYF Partnership Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} min-h-screen w-full dark:bg-gray-700 flex items-center leading-8 flex-col`}>
        <header className="md:w-[48rem] lg:w-[64rem] w-full">
          <div className="flex justify-between items-center py-4 gap-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/department.png"
                alt="Department of Mathematics, CUHK"
                width={303}
                height={78}
              />
            </Link>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-center select-none whitespace-nowrap mx-4">
              CUHK - TUYF Partnership Project
            </span>
          </div>

          <Navbar />
        </header>
        <main className="sm:p-10 p-6 w-full md:w-[48rem] lg:w-[64rem] bg-white/90 dark:bg-gray-700/90 shadow-white dark:shadow-gray-700 shadow-2xl h-full text-lg/8 md:text-xl/8">
          {children}
        </main>
      </body>
    </html>
  );
}
