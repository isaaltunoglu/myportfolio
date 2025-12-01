export default function Certificates() {
  const certificates = [
    {
      category: "Programming Languages",
      icon: "💻",
      certs: [
        { name: "Python Programming", issuer: "Certified", color: "blue" },
        { name: "Go (Golang) Backend", issuer: "Certified", color: "cyan" },
        { name: "Java Development", issuer: "Certified", color: "orange" },
        { name: "C/C++ Programming", issuer: "Certified", color: "purple" },
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      certs: [
        { name: "OpenCV Computer Vision", issuer: "Certified", color: "green" },
        { name: "PyTorch Deep Learning", issuer: "Certified", color: "red" },
        { name: "TensorFlow ML", issuer: "Certified", color: "yellow" },
      ]
    },
    {
      category: "Web Development",
      icon: "🌐",
      certs: [
        { name: "React Framework", issuer: "Certified", color: "blue" },
        { name: "Next.js Development", issuer: "Certified", color: "black" },
        { name: "JavaScript ES6+", issuer: "Certified", color: "yellow" },
        { name: "Firebase Backend", issuer: "Certified", color: "orange" },
      ]
    },
    {
      category: "Systems & Tools",
      icon: "⚙️",
      certs: [
        { name: "Linux System Administration", issuer: "Certified", color: "gray" },
        { name: "Git & GitHub", issuer: "Certified", color: "black" },
        { name: "Arduino Embedded Systems", issuer: "Certified", color: "teal" },
      ]
    },
    {
      category: "Design & Game Dev",
      icon: "🎨",
      certs: [
        { name: "Qt Framework Desktop Apps", issuer: "Certified", color: "green" },
        { name: "Godot Game Engine", issuer: "Certified", color: "blue" },
        { name: "Blender 3D Modeling", issuer: "Certified", color: "orange" },
      ]
    },
  ];

  return (
    <section id="certificates" className="py-24 px-4 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Certifications</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Professional Certificates
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Verified skills and competencies across multiple technology domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((category, idx) => (
            <div
              key={idx}
              className="group bg-zinc-950 border border-white/10 hover:border-red-600/50 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-3">
                {category.certs.map((cert, cidx) => (
                  <div 
                    key={cidx}
                    className="border-l-4 border-red-600 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                  >
                    <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      <span className="text-gray-400 text-sm">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-zinc-950 border border-white/10 p-8 text-center">
          <p className="text-gray-300 text-lg">
            <span className="text-red-600 font-bold">20+ Certifications</span> across Programming, AI/ML, Web Development, and Embedded Systems
          </p>
        </div>
      </div>
    </section>
  );
}
