import Image from "next/image";
import { FileText, ArrowRight, User, Code2, Cpu, Layout, Lightbulb, ExternalLink, Mail, Send, MessageSquare, MapPin, Phone, ShoppingBag, Activity, Box } from "lucide-react";

export default function Home() {
  const aboutStats = [
    { icon: <Layout size={20} />, title: "Frontend Development", desc: "Crafting responsive and interactive user interfaces." },
    { icon: <Cpu size={20} />, title: "API Integration", desc: "Connecting seamless backend services and APIs." },
    { icon: <Code2 size={20} />, title: "UI/UX Design", desc: "Designing intuitive digital experiences." },
    { icon: <Lightbulb size={20} />, title: "Problem Solving", desc: "Turning complex logic into efficient code." }
  ];

  const skillCategories = [
    { title: "Frontend", icon: <Layout />, skills: ["HTML", "Tailwind CSS","JavaScript", "React.js", "Next.js", "TypeScript"] },
    { title: "Backend", icon: <Layout />, skills: ["Supabase", "Firebase", "PostgreSQL", "REST API"] },
    { title: "Tools", icon: <Layout />, skills: ["Git", "GitHub", "VS Code", "Jest" , "Postman"] }
  ];

  const projects = [
    {
      title: "E-Commerce System",
      icon: <ShoppingBag />,
      image: "/organicza.png",
      stack: ["Next.js", "Supabase"],
      demo: "https://organicza.com",
      code: "https://github.com/sulemandev04-bit/organicza.git",
    },
    { 
      title: "HMS",
      icon: <Activity />, 
      stack: ["Next.js", "React.js", "Tailwind"] ,
      demo: "https://careplus-hms.vercel.app",
      code: "https://github.com/sulemandev04-bit/next-dental-web.git"
    },
    {
      title: "First Option Agency",
      icon: <Box />,
      image: "/agency.png",
      stack: ["TypeScript", "Firebase"],
      demo: "https://firstoptionagency.com",
      code: "https://github.com/sulemandev04-bit/first-option-agency.git",
    },
  ];

  return (
    <>
      {/* ============ HERO / HOME SECTION ============ */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 text-center bg-[#050505] overflow-hidden scroll-mt-16">
        {/* Background Glow Effect */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          Available for Hire
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white uppercase">Suleman Khan</span>
        </h1>
        
        <p className="text-gray-300 font-medium text-lg sm:text-2xl mb-6">
          React.js Developer | 0.6 Years Experience
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
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section id="about" className="min-h-screen bg-[#050505] text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden relative scroll-mt-16">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="z-10">
            <div className="flex items-center gap-3 text-cyan-400 mb-6">
              <User size={20} />
              <span className="text-sm font-bold uppercase tracking-[0.2em]">About Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 uppercase">
              Suleman Khan | <span className="text-cyan-400">React.js Developer</span>
            </h2>
            
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Passionate and driven developer dedicated to crafting modern, scalable, and user-friendly web applications using React, Next.js, and Supabase.
            </p>

            <div className="inline-block px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-12 uppercase tracking-widest">
              Experience: 0.6 Years
            </div>

            {/* Feature Grid - Bento Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutStats.map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/3 border border-white/5 hover:border-cyan-500/30 transition-all group">
                  <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <h4 className="font-bold text-sm mb-1">{stat.title}</h4>
                  <p className="text-xs text-gray-500 leading-tight">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="relative flex justify-center items-center">
            <div className="w-full aspect-square rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Suleman Khan"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKILLS SECTION ============ */}
      <section id="skills" className="min-h-screen bg-[#0d0d0d] py-16 sm:py-24 px-4 sm:px-6 overflow-hidden relative scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 text-cyan-400 mb-6">
              <Code2 size={24} />
              <span className="text-sm font-bold uppercase tracking-[0.2em]">Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Technologies I Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((cat, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/3 hover:border-cyan-500/30 transition-all group">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/5 hover:border-cyan-500/30 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS SECTION ============ */}
      <section id="projects" className="min-h-screen bg-[#050505] py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden scroll-mt-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 text-cyan-400 mb-6">
              <ShoppingBag size={24} />
              <span className="text-sm font-bold uppercase tracking-[0.2em]">Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              My Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-[#0d0d0d] border border-white/5 hover:border-cyan-500/20 transition-all">
                <div className="aspect-video mb-6 rounded-2xl bg-white/5 overflow-hidden">
                  {proj.image ? (
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center text-gray-500 h-full">
                      <div className="text-3xl">{proj.icon}</div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{proj.title}</h3>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {proj.stack.map(s => <span key={s} className="text-xs text-cyan-400 px-2 py-1 bg-cyan-400/5 rounded-md hover:bg-cyan-400/10 transition-colors">{s}</span>)}
                </div>
                <div className="flex gap-4 flex-wrap">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={16}/> Live Demo
                    </a>
                  )}
                  {proj.code && (
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                    >
                      <FileText size={16}/> Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section id="contact" className="min-h-screen bg-[#0d0d0d] text-white py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden scroll-mt-16">
        {/* Background Decorative Glow */}
        <div className="absolute -top-16 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
              <MessageSquare size={14} /> Let's Talk
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 uppercase italic tracking-tighter">
              Ready to <span className="text-cyan-400">Collaborate?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-base sm:text-lg mx-auto">
              I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="https://www.linkedin.com/in/suleman-khan-66071b398" target="_blank" rel="noreferrer" className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col items-center gap-4">
                  <div className="p-4 rounded-2xl bg-white text-black">
                    <ExternalLink className="text-blue-500" size={20} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">LinkedIn</p>
                  </div>
                </a>

                <a href="https://github.com/sulemandev04-bit" target="_blank" rel="noreferrer" className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:border-gray-400/30 transition-all flex flex-col items-center gap-4">
                  <div className="p-4 rounded-2xl bg-white text-black">
                    <ExternalLink className="text-gray-200" size={20} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">GitHub</p>
                  </div>
                </a>

                <a href="mailto:sulemandev04@gmail.com" className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col items-center gap-4">
                  <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Mail size={20} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</p>
                  </div>
                </a>
              </div>

              <a href="tel:+919372769176" className="w-full p-6 rounded-3xl bg-white/2 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-cyan-500/10">
                    <Phone size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Phone</p>
                    <p className="text-lg font-bold">+91 93727 69176</p>
                  </div>
                </div>
                <ArrowRight className="text-gray-500" size={20} />
              </a>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-7">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/2 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/2 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/30 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/2 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/30 transition-colors"
                    placeholder="How can I help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/2 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/30 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}