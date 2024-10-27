"use client"; // Add this directive at the top to make this a client component

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import boubyanDigitalFactory from "@/app/assets/boubyanDigitalFactory.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md font-sans font-medium text-sm text-gray-700 w-full h-[96px]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={boubyanDigitalFactory}
              alt="Boubyan Digital Factory Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className={`hover:text-red-500 ${
              pathname === "/" ? "text-red-500 border-b-2 border-red-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/"
            className={`hover:text-red-500 ${
              pathname === "/about"
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="/"
            className={`hover:text-red-500 ${
              pathname === "/services"
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
          >
            What We Do
          </Link>
          <Link
            href="/"
            className={`hover:text-red-500 ${
              pathname === "/join-us"
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
          >
            Why Join Us
          </Link>
          <Link
            href="/"
            className={`hover:text-red-500 ${
              pathname === "/career"
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
          >
            Career
          </Link>

          {/* Divider and LinkedIn Link */}
          <div className="h-6 w-[1px] bg-gray-300 mx-4"></div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center hover:text-red-500"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
