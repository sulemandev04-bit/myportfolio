"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skill" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile scroll lock jab sidebar open ho
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="text-slate-900 font-bold text-lg">
          Suleman Khan
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-950 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-950 transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* --- Mobile Sidebar System --- */}
      <div className={`fixed inset-0 z-50 md:hidden ${isOpen ? "visible" : "invisible"}`}>
        
        {/* Dark Backdrop (Pure black background) */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel */}
        <aside 
          className={`absolute left-0 top-0 h-full w-[80%] max-w-sm bg-white transform transition-transform duration-300 ease-in-out flex flex-col ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header (Sirf X icon ekdum right side mein) */}
          <div className="px-6 py-5 flex items-center justify-end border-b border-slate-100">
            <button 
              type="button" 
              onClick={() => setIsOpen(false)} 
              className="text-slate-500 hover:text-slate-800 transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:text-slate-950 text-lg font-medium transition-colors tracking-wide block"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}