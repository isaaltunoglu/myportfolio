export default function Projects() {
  const projects = [
    {
      title: "Industrial Automation Backend System",
      description:
        "Developed with a team at Karabük Iron and Steel Institute. High-performance automation system tracking factory workers' efficiency and processes in real-time.",
      tech: ["Go (Golang)", "REST API", "Database Management", "Real-time Processing"],
      role: "Backend Developer",
      details: "Writing high-performance data processing modules for industrial use",
      icon: "🏭",
      featured: true,
    },
    {
      title: "Post-Earthquake Search & Rescue Drone",
      description:
        "Autonomous drone system detecting survivors under or around debris by processing camera images in real-time with advanced computer vision algorithms.",
      tech: ["Embedded Systems", "OpenCV", "Drone Controller", "Real-time Detection", "Arduino"],
      role: "Embedded Software & CV Engineer",
      details: "Developing flight control and real-time image processing pipeline",
      icon: "🚁",
      featured: true,
    },
    {
      title: "Agricultural Disease Detection (TÜBİTAK)",
      description:
        "AI-powered system providing early diagnosis of plant diseases using advanced image processing and machine learning techniques.",
      tech: ["Python", "OpenCV", "Image Processing", "Machine Learning"],
      role: "Researcher & Developer",
      details: "Setting up complete image processing and ML pipeline",
      icon: "🌱",
      featured: false,
    },
    {
      title: "GameJam 2D Game Project",
      description: "Collaborative 2D game developed with a 4-person team under strict time constraints, showcasing rapid prototyping and teamwork skills.",
      tech: ["Godot Engine", "GDScript", "Game Design"],
      role: "Game Mechanics Developer",
      details: "Team coordination and core game loop implementation",
      icon: "🎮",
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
              className={`group border border-white/10 hover:border-red-600/50 bg-zinc-950 p-8 md:p-10 transition-all duration-300 ${ 
                project.featured ? 'hover:shadow-2xl hover:shadow-red-600/10' : 'hover:shadow-xl hover:shadow-red-600/5'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="text-6xl md:text-7xl">{project.icon}</div>
                  {project.featured && (
                    <div className="mt-4 inline-block">
                      <span className="text-xs text-red-600 font-bold uppercase tracking-wider border border-red-600/30 px-3 py-1 bg-red-600/10">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
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
