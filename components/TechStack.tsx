export default function TechStack() {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Go (Golang)", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "C/C++", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        { name: "OpenCV", level: "Advanced" },
        { name: "PyTorch", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "Computer Vision", level: "Advanced" },
      ],
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: "Intermediate" },
        { name: "Next.js", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
      ],
    },
    {
      title: "Backend & Systems",
      icon: "⚡",
      skills: [
        { name: "Go Backend Services", level: "Advanced" },
        { name: "Linux (Ubuntu)", level: "Advanced" },
        { name: "Firebase", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
      ],
    },
    {
      title: "Embedded Systems",
      icon: "🛸",
      skills: [
        { name: "Arduino", level: "Advanced" },
        { name: "C/C++ Embedded", level: "Advanced" },
        { name: "Drone Technologies", level: "Advanced" },
        { name: "Sensor Integration", level: "Advanced" },
      ],
    },
    {
      title: "Desktop & Game Dev",
      icon: "🎮",
      skills: [
        { name: "Qt Framework", level: "Intermediate" },
        { name: "Godot Engine", level: "Intermediate" },
        { name: "Blender 3D", level: "Intermediate" },
        { name: "Game Mechanics", level: "Intermediate" },
      ],
    },
    {
      title: "Version Control & Tools",
      icon: "🔧",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Linux Terminal", level: "Advanced" },
        { name: "CI/CD", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section id="tech" className="py-24 px-4 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Technical Expertise</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Technology Stack
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-black border border-white/10 hover:border-red-600/50 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-xs text-red-600 font-semibold uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
