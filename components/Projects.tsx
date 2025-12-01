import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Agricultural Disease Detection (TÜBİTAK Project)",
      description:
        "Developing an AI system to detect plant diseases using PyTorch and EfficientNet-B0 architecture. Curating and labeling a proprietary dataset from real-world agricultural fields to ensure high model accuracy.",
      tech: ["PyTorch", "EfficientNet-B0", "OpenCV", "Image Preprocessing", "Deep Learning"],
      role: "AI Researcher & Developer",
      details: "Applied advanced image preprocessing techniques with OpenCV to optimize training data quality",
      icon: "🌱",
      image: "/images/projects/agricultural.jpeg",
      date: "Oct. 2025 – Present",
      featured: true,
    },
    {
      title: "Full-Stack Web Projects",
      description:
        "Developing two distinct web applications within a 2-person software team using Agile methodologies. Utilizing Firebase for backend authentication and real-time database services.",
      tech: ["Next.js", "React", "Firebase", "Agile", "State Management"],
      role: "Full-Stack Developer",
      details: "Implemented responsive UI components with React/Next.js and managed state effectively",
      icon: "🌐",
      image: "/images/projects/nextjreactproje.png",
      date: "Oct. 2025 – Present",
      featured: true,
    },
    {
      title: "Drone Control Station Software",
      description:
        "Customized QGroundControl open-source software using Qt Creator for a specialized rescue drone. Developed custom plugins in C++ to adapt the interface for earthquake survivor detection missions.",
      tech: ["Qt Creator", "C++", "QGroundControl", "Embedded Systems", "Plugin Development"],
      role: "Embedded Software Engineer",
      details: "Customized drone control interface for specialized rescue operations",
      icon: "🛸",
      image: null,
      date: "June 2025 – Aug. 2025",
      featured: false,
    },
    {
      title: "2D Arcade Game (GameJam)",
      description: "Developed a fully functional 2D arcade game in a team of 4 within a 48-hour deadline. Resolved complex Git merge conflicts and managed version control workflows for the team.",
      tech: ["Godot Engine", "Git", "GDScript", "Game Physics"],
      role: "Game Mechanics Developer",
      details: "Engineered core game mechanics and physics logic using Godot Engine",
      icon: "🎮",
      image: "/images/projects/game3.png",
      date: "Oct. 2025",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Featured Projects
          </h2>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group border border-white/10 hover:border-red-600/50 bg-zinc-950 overflow-hidden transition-all duration-300 ${ 
                project.featured ? 'hover:shadow-2xl hover:shadow-red-600/10' : 'hover:shadow-xl hover:shadow-red-600/5'
              }`}
            >
              <div className={project.image ? "grid md:grid-cols-2 gap-0" : "grid grid-cols-1 gap-0"}>
                {/* Project Image - only show if image exists */}
                {project.image && (
                  <div className="relative h-64 md:h-auto bg-black overflow-hidden">
                    <Image 
                      src={project.image || ''} 
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="text-xs text-red-600 font-bold uppercase tracking-wider border border-red-600/50 px-3 py-1 bg-black/80 backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Project Details */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  {!project.image && project.featured && (
                    <div className="mb-4 inline-block w-fit">
                      <span className="text-xs text-red-600 font-bold uppercase tracking-wider border border-red-600/30 px-3 py-1 bg-red-600/10">
                        Featured
                      </span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-red-600 font-semibold mb-3">{project.date}</p>
                  <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-red-600/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Role</h4>
                      <p className="text-white font-semibold">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Contribution</h4>
                      <p className="text-gray-400">{project.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
