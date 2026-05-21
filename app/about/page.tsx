import { User, Code2, Cpu, Layout, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: <Layout size={20} />, title: "Frontend Development", desc: "Crafting responsive and interactive user interfaces." },
    { icon: <Cpu size={20} />, title: "API Integration", desc: "Connecting seamless backend services and APIs." },
    { icon: <Code2 size={20} />, title: "UI/UX Design", desc: "Designing intuitive digital experiences." },
    { icon: <Lightbulb size={20} />, title: "Problem Solving", desc: "Turning complex logic into efficient code." }
  ];

  return (
    <section className="min-h-screen bg-[#050505] text-white py-20 px-6 overflow-hidden relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="z-10">
          <div className="flex items-center gap-3 text-cyan-400 mb-6">
            <User size={20} />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">About Me</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 uppercase">
            Suleman Khan | <span className="text-cyan-400">React.js Developer</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Passionate and driven developer dedicated to crafting modern, scalable, and user-friendly web applications using React, Next.js, and Supabase.
          </p>

          <div className="inline-block px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-12 uppercase tracking-widest">
            Experience: 1.5+ Years[cite: 2]
          </div>

          {/* Feature Grid - Bento Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/3 border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <h4 className="font-bold text-sm mb-1">{stat.title}</h4>
                <p className="text-xs text-gray-500 leading-tight">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Profile Image with Glow Ring */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* The Neon Glow Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.3)] animate-pulse" />
            
            {/* Profile Image Wrapper */}
            <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/10 bg-[#111]">
              <img 
                src="/profile.jpeg" // Aapni photo yahan add karein
                alt="Suleman Khan"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Text Overlay for "Who I Am" */}
          <div className="absolute -bottom-10 right-0 lg:-right-10 max-w-70 p-6 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 hidden sm:block">
            <h3 className="text-cyan-400 font-bold mb-2 uppercase tracking-tighter">Who I Am</h3>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Based in Mumbai, I'm a frontend specialist with over 1.5 years of experience. I enjoy transforming complex problems into elegant, intuitive digital experiences[cite: 2].
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}