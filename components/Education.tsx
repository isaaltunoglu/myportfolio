export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Academic Background</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Education
          </h2>
        </div>
        
        <div className="border border-white/10 bg-black p-10 md:p-12 hover:border-red-600/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="text-7xl">🎓</div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-4xl font-bold text-white mb-3">Karabük Üniversitesi</h3>
              <p className="text-2xl text-red-600 mb-6 font-semibold">Computer Engineering (100% English)</p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="border-l-4 border-red-600 pl-6">
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Current Year</p>
                  <p className="text-white text-2xl font-bold">2nd Year</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">GPA</p>
                  <p className="text-red-600 text-3xl font-bold">3.53</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Program</p>
                  <p className="text-white text-xl font-semibold">100% English</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6">
                <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">Key Achievements</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">▸</span>
                    <span>Combining high academic achievement (3.53 GPA) with practical field experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">▸</span>
                    <span>Production-focused approach beyond traditional academic learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">▸</span>
                    <span>Real-world project experience in industrial automation and AI systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">▸</span>
                    <span>Active contribution to TÜBİTAK research projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
