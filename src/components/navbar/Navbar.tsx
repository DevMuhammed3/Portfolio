"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 z-50
        w-full
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto md:px-6
        "
      >
        <nav
          className="
            flex items-center justify-between
            md:mt-6 mb-6 px-6 md:py-4
            bg-black/30
            rounded-2xl border-white/10
            backdrop-blur-sm
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="
              flex
              tracking-wide
              hover:opacity-80 transition
            "
          >
            <div
              className="
                flex items-center
                min-w-[50px] max-w-[120px] md:max-w-[150px]
                pointer-events-none
                gap-0
              "
            >
              <Image
                src="/signatureV1 (1) (1).png"
                width={30}
                height={60}
                alt="signature"
              />
              <Image
                src="/signatureV2 (1) (1).png"
                width={130}
                height={60}
                alt="signature"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <ul
            className="
              hidden md:flex items-center
              px-6
              text-sm text-slate-300
              gap-8
            "
          >
            <li>
              <Link
                href="#projects"
                className="
                  hover:text-white
                  transition-colors duration-200
                "
              >
                <span
                  className="
                    text-purple-600 text-xl font-mono
                  "
                >
                  #
                </span>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="
                  hover:text-white
                  transition-colors duration-200
                "
              >
                <span
                  className="
                    text-purple-600 text-xl font-mono
                  "
                >
                  #
                </span>
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="
                  hover:text-white
                  transition-colors duration-200
                "
              >
                <span
                  className="
                    text-purple-600 text-xl font-mono
                  "
                >
                  #
                </span>
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 my-4 hover:opacity-70 transition"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="
              mt-2 p-6
              bg-dark-bg-2/70
              rounded-2xl border border-white/10
              backdrop-blur-md
            "
          >
            <ul
              className="
                flex flex-col
                text-slate-300
                gap-4
              "
            >
              <li>
                <Link
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-white transition-colors duration-200 text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-white transition-colors duration-200 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex items-center justify-center rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 transition-colors duration-200 shadow-lg shadow-purple-500/20"
            >
              Let's talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
