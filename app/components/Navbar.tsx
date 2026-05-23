"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile scroll lock jab sidebar open ho
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Smooth Scroll Function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Sidebar band karo
    
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80, // Navbar height adjust karne ke liye offset
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="text-slate-900 font-bold text-lg cursor-pointer">
          Suleman Khan
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
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
      <div className={`fixed inset-0 z-50 md:hidden transition-all ${isOpen ? "visible" : "invisible"}`}>
        
        {/* Backdrop with Blur */}
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel */}
        <aside 
          className={`absolute left-0 top-0 h-full w-[80%] max-w-sm bg-white transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
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
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-700 hover:text-slate-950 text-lg font-medium transition-colors tracking-wide block"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}