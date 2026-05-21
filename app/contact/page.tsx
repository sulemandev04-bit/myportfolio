import { ExternalLink, Mail, Send, MessageSquare, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#050505] text-white py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-16 right-0 sm:right-0 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquare size={14} /> Let's Talk
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter">
            Ready to <span className="text-cyan-400">Collaborate?</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            I am currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side: Contact Info Cards (Bento Style) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="mailto:sulemandev04@gmail.com" className="group block p-6 rounded-3xl bg-white/2 border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                  <p className="text-lg font-medium">sulemandev04@gmail.com</p>
                </div>
              </div>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://linkedin.com" className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col gap-4">
                <ExternalLink className="text-blue-500" />
                <span className="font-bold">LinkedIn</span>
              </a>
              <a href="https://github.com/sulemandev04-bit" className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:border-gray-400/30 transition-all flex flex-col gap-4">
                <ExternalLink className="text-gray-200" />
                <span className="font-bold">GitHub</span>
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white/2 border border-white/5 flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Location</p>
                <p className="text-lg font-medium">Mumbai, India</p>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-[2.5rem] bg-white/2 border border-white/5 backdrop-blur-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-cyan-500 outline-none transition-all placeholder:text-gray-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-cyan-500 outline-none transition-all placeholder:text-gray-700" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea rows={5} placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-cyan-500 outline-none transition-all placeholder:text-gray-700 resize-none" />
              </div>

              <button className="w-full py-5 bg-cyan-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}