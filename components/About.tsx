export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-red-600 font-bold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Production-Oriented Engineer
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I&apos;m a 2nd year Computer Engineering student at Karabük University (100% English program) 
              with a <span className="text-red-600 font-semibold">GPA of 3.53</span>.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Unlike typical students who focus solely on grades, I pursue a production-oriented career path. 
              I&apos;m a technology-agnostic engineer who chooses the best solution for each problem, 
              specializing in the intersection of Backend Development, AI, and Embedded Systems.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My experience ranges from industrial automation systems to autonomous drones, 
              always focusing on real-world applications and measurable impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="border-l-4 border-red-600 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
                  <p className="text-gray-400">High-performance Go services for industrial automation and API development</p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-red-600 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI & Computer Vision</h3>
                  <p className="text-gray-400">OpenCV, PyTorch, and machine learning for agricultural and rescue applications</p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-red-600 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚙️</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Embedded Systems</h3>
                  <p className="text-gray-400">Autonomous drones, Arduino, and robotics for real-world applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
