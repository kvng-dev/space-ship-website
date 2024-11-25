"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/app/assets/shared/logo.svg";
import openIcon from "@/app/assets/shared/icon-hamburger.svg";
import closeIcon from "@/app/assets/shared/icon-close.svg";
import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Destination",
    href: "/destination",
  },
  {
    title: "Crew",
    href: "/crew",
  },
  {
    title: "Technology",
    href: "/technology",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

  const isActive = useCallback((href: string) => path == href, [path]);

  return (
    <header className="relative z-30 flex justify-between items-center px-6 md:px-0 md:pl-10 lg:pt-10">
      <Image src={logo} alt="logo" className="my-6 w-10 h-10 md:w-12 md:h-12" />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-20 w-6 h-6 md:hidden"
      >
        <Image
          src={openIcon}
          alt="open"
          className={`transition
          ${
            isOpen && " opacity-0"
          } absolute top-1/2 right-0 -translate-x-1/2  w-full h-full
          `}
        />

        <Image
          src={closeIcon}
          alt="close"
          className={`transition
          ${
            isOpen && " opacity-100"
          } opacity-0 absolute top-1/2 right-0 -translate-x-1/2 w-full h-full
          `}
        />
      </button>

      <div className="bar grow hidden lg:block h-0.5 bg-white/70 translate-x-8 relative z-20"></div>

      <ul
        className={`list-none bg-[#97979729] transition rounded-md backdrop-blur-xl fixed top-0 right-0 h-screen w-64 z-0 pt-28 pl-8 md:relative md:h-24 md:w-fit md:px-12 md:pt-0 md:translate-x-0 md:flex md:justify-center md:items-center md:gap-x-12
        lg:min-w-[50vw] ${
          !isOpen
            ? "translate-x-80"
            : isOpen
            ? "translate-x-0"
            : "translate-x-0"
        }
        `}
      >
        {pages.map((page, index) => (
          <Link
            className="nav-text uppercase relative text-white md:h-full"
            href={page.href}
            key={index}
          >
            <li
              className={`flex items-center mb-12 w-full transition border-r-2 border-transparent gap-x-3 [&:not(.active)]:hover:border-white/50 [&.active]:hover:border-white md:mb-0 md:w-fit md:border-r-0 md:border-b-4 md:h-full ${
                isActive(page.href) && "active"
              }`}
            >
              <span className="block font-bold min-w-[20px]">{page.title}</span>
              {isActive(page.href) && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 right-0 h-full w-1 md:w-full md:h-1 bg-white"
                />
              )}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
};
export default Navbar;
