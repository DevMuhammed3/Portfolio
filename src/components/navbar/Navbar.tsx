"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import ScrollToTopOnRefresh from "../webSystem/ScrollToTopOnRefresh"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-0 z-50 w-full px-4 md:px-12">
      <nav
        className="
          flex items-center justify-between
          mx-auto
          px-4 md:px-6 py-3
          rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
        "
      >
        {/* Logo */}
        <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} href="/" className="flex items-center gap-1">
          <Image
            src="/signatureV1.png"
            width={28}
            height={40}
            alt="signature"
            priority
          />
          <Image
            src="/signatureV2.png"
            width={110}
            height={40}
            alt="signature"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          {["skills", "projects", "about", "contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className="
                  relative text-slate-300
                  transition-colors
                  hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:w-0 after:bg-purple-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-50 flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-5 bg-white transition-all ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-white transition-all ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-3 transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        <div className="rounded-2xl bg-dark-bg-2/80 backdrop-blur-xl border border-white/10 p-6">
          <ul className="flex flex-col gap-4 text-slate-300">
            {["skills", "projects", "about"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="
              mt-6 flex items-center justify-center
              rounded-xl bg-purple-500/90
              px-4 py-2 text-sm font-medium text-white
              hover:bg-purple-500 transition
            "
          >
            Let’s talk
          </Link>
        </div>
      </div>
    </header>
  )
}
