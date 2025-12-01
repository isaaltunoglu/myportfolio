"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">lightning-fast</span>,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">production-focused</span> solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            2nd year Computer Engineering student who builds real-world AI systems, 
            backend services, and embedded solutions that actually work.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium border border-gray-200">
            🎓 Karabük University
          </span>
          <span className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium border border-gray-200">
            📊 GPA 3.53
          </span>
          <span className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium border border-gray-200">
            🚀 Production-Oriented
          </span>
        </div>

        <div className="flex gap-4 justify-center items-center flex-wrap mb-16">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg shadow-md border-2 border-gray-200 transition"
          >
            Learn More
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-lg border border-purple-100">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Backend Development</h3>
            <p className="text-gray-600 text-sm">Go, Python, REST APIs for industrial automation</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg border border-blue-100">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">AI & Computer Vision</h3>
            <p className="text-gray-600 text-sm">PyTorch, OpenCV, Agricultural AI systems</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg border border-green-100">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Embedded Systems</h3>
            <p className="text-gray-600 text-sm">Arduino, Drone control, C/C++</p>
          </div>
        </div>
      </div>
    </section>
  );
}
