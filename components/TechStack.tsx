export default function TechStack() {
  const skills = [
    "Python", "Go", "Java", "C/C++", "JavaScript",
    "PyTorch", "OpenCV", "TensorFlow",
    "React", "Next.js", "Tailwind CSS",
    "Firebase", "REST APIs", "Linux",
    "Arduino", "Qt Framework", "Godot Engine",
    "Git", "GitHub", "Blender 3D"
  ];

  return (
    <section id="tech" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tech I work with
          </h2>
          <p className="text-xl text-gray-600">
            Technology-agnostic. I use what works best for the problem.
          </p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-5 py-3 bg-gradient-to-r from-purple-50 to-blue-50 text-gray-800 rounded-lg font-medium border border-purple-200 hover:border-purple-400 hover:shadow-md transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-lg">
              <strong className="text-purple-600">20+ certifications</strong> across Programming, AI/ML, Web Development, and Embedded Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
