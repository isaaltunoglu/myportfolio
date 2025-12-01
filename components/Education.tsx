export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-4xl">
                🎓
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Karabük Üniversitesi</h3>
              <p className="text-xl text-purple-600 mb-6 font-semibold">Computer Engineering • 100% English</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Current Year</p>
                  <p className="text-gray-900 text-2xl font-bold">2nd Year</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">GPA</p>
                  <p className="text-purple-600 text-2xl font-bold">3.53</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Focus</p>
                  <p className="text-gray-900 text-lg font-semibold">Production</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Balancing academic excellence with real-world project experience in TÜBİTAK research, 
                industrial automation, and AI systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
