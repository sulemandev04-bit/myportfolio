import { ShoppingBag, Activity, Box, ExternalLink, FileText } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce System",
      icon: <ShoppingBag />,
      stack: ["Next.js", "Supabase"],
      demo: "https://organicza.com",
      code: "https://github.com/sulemandev04-bit/organicza.git",
    },
    { title: "HMS",
      icon: <Activity />, 
      stack: ["Next.js", "React.js", "Tailwind"] ,
      demo: "https://careplus-hms.vercel.app",
      code: "https://github.com/sulemandev04-bit/next-dental-web.git"
    },
    {
      title: "First Option Agency",
      icon: <Box />,
      stack: ["TypeScript", "Firebase"],
      demo: "https://firstoptionagency.com",
      code: "https://github.com/sulemandev04-bit/first-option-agency.git",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050505] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="group p-6 rounded-3xl bg-[#0d0d0d] border border-white/5 hover:border-cyan-500/20 transition-all">
              <div className="aspect-video mb-6 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500">
                {proj.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{proj.title}</h3>
              <div className="flex gap-2 mb-6">
                {proj.stack.map(s => <span key={s} className="text-xs text-cyan-400 px-2 py-1 bg-cyan-400/5 rounded-md">{s}</span>)}
              </div>
              <div className="flex gap-4">
                {proj.demo ? (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white"
                  >
                    <ExternalLink size={16}/> Demo
                  </a>
                ) : (
                  <button className="flex items-center gap-2 text-sm font-bold text-white" disabled>
                    <ExternalLink size={16}/> Demo
                  </button>
                )}

                {proj.code ? (
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-500"
                  >
                    <FileText size={16}/> Code
                  </a>
                ) : (
                  <button className="flex items-center gap-2 text-sm font-bold text-gray-500" disabled>
                    <FileText size={16}/> Code
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}