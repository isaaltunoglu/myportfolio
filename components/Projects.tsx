import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Agricultural Disease Detection",
      description:
        "AI system detecting plant diseases using PyTorch and EfficientNet-B0. Building a proprietary dataset from real agricultural fields.",
      tech: ["PyTorch", "OpenCV", "Deep Learning"],
      image: "/images/projects/agricultural.jpeg",
      date: "Oct. 2025 – Present",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Full-Stack Web Projects",
      description:
        "Two web applications built with Next.js and Firebase. Working in an Agile team environment.",
      tech: ["Next.js", "React", "Firebase"],
      image: "/images/projects/nextjreactproje.png",
      date: "Oct. 2025 – Present",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Drone Control Station",
      description:
        "Customized QGroundControl for rescue drones. Built C++ plugins for earthquake survivor detection.",
      tech: ["Qt Creator", "C++", "Embedded Systems"],
      image: null,
      date: "June 2025 – Aug. 2025",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "2D Arcade Game (GameJam)",
      description: "Full game developed in 48 hours with a team of 4. Handled Git workflows and game mechanics.",
      tech: ["Godot Engine", "GDScript"],
      image: "/images/projects/game3.png",
      date: "Oct. 2025",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent projects
          </h2>
          <p className="text-xl text-gray-600">
            Real-world solutions that actually work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                </div>
              )}
              
              {!project.image && (
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-6xl">🚀</div>
                </div>
              )}
              
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
