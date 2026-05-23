"use client";

import React from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80, // Navbar height offset
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo / Name */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, "#home")} 
          className="text-slate-900 font-bold text-lg cursor-pointer whitespace-nowrap"
        >
          Suleman Khan
        </a>

        {/* Navigation - Always visible on both Mobile & Desktop */}
        <nav className="flex items-center gap-5 md:gap-8 overflow-x-auto no-scrollbar pb-1 md:pb-0 w-full md:w-auto justify-center">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs md:text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
      </div>
    </header>
  );
}