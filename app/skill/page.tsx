import { Layout, Database, Terminal } from "lucide-react";

export default function SkillsPage() {
  const categories = [
    { title: "Frontend", icon: <Layout />, skills: ["HTML", "Tailwind CSS","JavaScript", "React.js", "Next.js", "TypeScript"] },
    { title: "Backend", icon: <Database />, skills: ["Supabase", "Firebase", "PostgreSQL", "REST API"] },
    { title: "Tools", icon: <Terminal />, skills: ["Git", "GitHub", "VS Code", "Jest" , "Postman"] }
  ];

  return (
    <section className="min-h-screen bg-[#050505] py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-16">Technical Skills</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/3 hover:border-cyan-500/30 transition-all">
            <div className="text-cyan-400 mb-4">{cat.icon}</div>
            <h3 className="text-xl font-bold text-white mb-6">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}