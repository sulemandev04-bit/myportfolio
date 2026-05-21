import { Mail, FileText, ArrowRight, Phone, ExternalLink, User } from "lucide-react";

export default function HeroPage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center bg-[#050505] overflow-hidden">
      {/* Background Glow Effect - Image se inspired */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Availability Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium mb-8 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-cyan-400" />
        Available for Hire
      </div>

      {/* Main Heading - Image format ke hisaab se */}
      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-cyan-400">
        Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-white uppercase">Suleman Khan</span>
      </h1>
      
      <p className="text-gray-300 font-medium text-lg sm:text-2xl mb-6">
        React.js Developer | 1.5 Years Experience
      </p>
      
      <p className="text-gray-400 max-w-2xl text-base sm:text-lg mb-10 leading-relaxed">
        Building modern, high-performance web applications using React, Next.js, Tailwind CSS, and Supabase. Focused on exceptional UI/UX and scalability.
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center mb-12">
        <a
          href="/ReactJS_Developer_Resume.pdf"
          download
          className="group px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md whitespace-nowrap"
        >
          <FileText size={18} className="transition-transform duration-200 ease-out group-hover:scale-110" />
          Download Resume
        </a>
        <a
          href="/ReactJS_Developer_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group px-8 py-4 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 font-bold rounded-full hover:bg-cyan-500 hover:text-black transition-all flex items-center justify-center gap-2 whitespace-nowrap"
        >
          Review Resume <ArrowRight size={18} className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </a>
      </div>

      {/* Updated Social Links with your data */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
        <a href="https://github.com/sulemandev04-bit" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
          <div className="p-3 bg-white text-black border border-white/20 rounded-xl group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all">
            <ExternalLink size={24} className="transition-transform duration-200 ease-out group-hover:scale-110" />
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">github.com/sulemandev04-bit</span>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
          <div className="p-3 bg-white text-black border border-white/20 rounded-xl group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all">
            <User size={24} className="transition-transform duration-200 ease-out group-hover:scale-110" />
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">linkedin.com</span>
        </a>
        <a href="mailto:sulemandev04@gmail.com" className="flex flex-col items-center gap-1 group">
          <div className="p-3 bg-white text-black border border-white/20 rounded-xl group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all">
            <Mail size={24} className="transition-transform duration-200 ease-out group-hover:scale-110" />
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">sulemandev04@gmail.com</span>
        </a>
        <a href="tel:+919372769176" className="flex flex-col items-center gap-1 group">
          <div className="p-3 bg-white text-black border border-white/20 rounded-xl group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all">
            <Phone size={24} className="transition-transform duration-200 ease-out group-hover:scale-110" />
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">+919372769176</span>
        </a>
      </div>
    </section>
  );
}