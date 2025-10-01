"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo centré sur mobile */}
        <div className="flex items-center justify-center md:justify-start flex-1">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg transition-transform group-hover:scale-105 ring-2 ring-purple-400/60">
              <Image
                src="/logorapverse.png"
                alt="Logo RapVerse"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-title tracking-wide relative text-white">
              <span>RAP</span>
              <span className="relative inline-block font-extrabold">
                VERSE
                <span className="absolute -top-4 left-2 text-2xl text-purple-200 animate-pulse">
                  &apos; &apos; &apos;
                </span>
              </span>
            </h1>
          </Link>
        </div>

        {/* Menu burger sur mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-6 text-sm md:text-base font-semibold p-4 md:p-0">
            <Link
              href="/"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              Accueil
            </Link>
            <Link
              href="/posts"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              Posts
            </Link>
            <Link
              href="/about"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              À propos
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
