export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Not just another student
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I&apos;m a production-focused engineer who builds things that actually work in the real world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who I Am</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              2nd year Computer Engineering student at Karabük University with a <strong className="text-purple-600">3.53 GPA</strong>, 
              but that&apos;s not the whole story.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While most students chase grades, I chase real-world impact. I&apos;ve worked on <strong>industrial automation</strong>, 
              <strong> agricultural AI</strong>, and <strong>autonomous drone systems</strong> — projects that solve actual problems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">✓</span>
                <span className="text-gray-700">Build high-performance <strong>Go backend services</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">✓</span>
                <span className="text-gray-700">Develop <strong>AI & Computer Vision</strong> systems with PyTorch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-gray-700">Create <strong>embedded solutions</strong> for drones and robotics</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">My Approach</h3>
          <p className="text-lg leading-relaxed">
            I&apos;m <strong>technology-agnostic</strong> — I don&apos;t fall in love with tools, I fall in love with solutions. 
            Whether it&apos;s Go, Python, C++, or something new, I pick what works best for the problem at hand.
          </p>
        </div>
      </div>
    </section>
  );
}
