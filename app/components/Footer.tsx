import { ExternalLink, Mail, Phone, Code, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Suleman Khan</h3>
            <p className="text-sm text-gray-400">React.js Developer | 0.6 Years Experience</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:sulemandev04@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a></li>
              <li><a href="tel:+919372769176" className="hover:text-cyan-400 transition-colors">Phone</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow</h4>
            <div className="flex gap-3">
              <a href="https://github.com/sulemandev04-bit" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
                <Code size={18} className="text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="https://www.linkedin.com/in/suleman-khan-66071b398" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
                <Briefcase size={18} className="text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="mailto:sulemandev04@gmail.com" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
                <Mail size={18} className="text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Suleman Khan. All rights reserved.</div>
          <div className="text-xs text-gray-600">Built with React, Next.js & Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}
