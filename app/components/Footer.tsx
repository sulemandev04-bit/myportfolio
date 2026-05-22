import { ExternalLink, Mail, Phone, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} Suleman Khan</div>

        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
          <a href="https://github.com/sulemandev04-bit" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-400 transition-all">
            <div className="p-2 rounded-md bg-white text-black">
              <ExternalLink size={16} />
            </div>
            <span className="hidden sm:inline text-[10px] text-gray-400 uppercase tracking-widest">github.com/sulemandev04-bit</span>
            <span className="sm:hidden text-sm text-gray-300">GitHub</span>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/3 border border-white/5 hover:border-blue-400 transition-all">
            <div className="p-2 rounded-md bg-white text-black">
              <User size={16} />
            </div>
            <span className="hidden sm:inline text-[10px] text-gray-400 uppercase tracking-widest">linkedin.com</span>
            <span className="sm:hidden text-sm text-gray-300">LinkedIn</span>
          </a>

          <a href="mailto:sulemandev04@gmail.com" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-400 transition-all">
            <div className="p-2 rounded-md bg-white text-black">
              <Mail size={16} />
            </div>
            <span className="hidden sm:inline text-[10px] text-gray-400 uppercase tracking-widest">sulemandev04@gmail.com</span>
            <span className="sm:hidden text-sm text-gray-300">Email</span>
          </a>

          <a href="tel:+919372769176" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-400 transition-all">
            <div className="p-2 rounded-md bg-white text-black">
              <Phone size={16} />
            </div>
            <span className="hidden sm:inline text-[10px] text-gray-400 uppercase tracking-widest">+91 93727 69176</span>
            <span className="sm:hidden text-sm text-gray-300">Call</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
