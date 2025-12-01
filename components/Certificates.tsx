export default function Certificates() {
  const certificates = [
    "Python Programming",
    "Go Backend Development",
    "Java Development",
    "C/C++ Programming",
    "OpenCV Computer Vision",
    "PyTorch Deep Learning",
    "TensorFlow ML",
    "React Framework",
    "Next.js Development",
    "JavaScript ES6+",
    "Firebase Backend",
    "Linux System Administration",
    "Git & GitHub",
    "Arduino Embedded Systems",
    "Qt Framework",
    "Godot Game Engine",
    "Blender 3D Modeling",
  ];

  return (
    <section id="certificates" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Verified skills across multiple domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-purple-400 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <span className="text-gray-800 font-medium">{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
