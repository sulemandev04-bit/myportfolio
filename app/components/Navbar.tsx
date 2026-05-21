"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skill" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-white font-extrabold text-lg">
          Suleman Khan
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen
            ? "visible opacity-100 pointer-events-auto"
            : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="absolute inset-0 bg-black/80 z-40"
          onClick={() => setIsOpen(false)}
        />
        <div className={`fixed right-0 top-0 h-full w-11/12 max-w-sm bg-[#050505] border-l border-white/10 p-6 shadow-2xl transform transition-transform duration-300 z-60 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-end mb-8">
            <button
              type="button"
              aria-label="Close menu"
              className="text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cyan-400 hover:text-cyan-200 transition-colors font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
