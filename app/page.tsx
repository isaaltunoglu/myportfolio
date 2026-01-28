"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code2, Database, Cpu, Brain, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import * as THREE from "three";

// --- DATA MOCKUP ---
const PORTFOLIO_DATA = {
  name: "İSA ALTUNOĞLU", 
  title: "Computer Engineering Student | Production-Focused Engineer",
  motto: "I don't just write code, I build solutions.", 
  about: "I am a 2nd-year Computer Engineering student who builds real-world AI systems, backend services, and embedded solutions. While most students focus solely on theory, I focus on production. I define myself as technology-agnostic; whether it is Go for backend automation, PyTorch for AI, or C++ for drone systems, I use the best tool for the problem.",
  location: "Karabük / Türkiye",
  projects: [
    {
      id: 1,
      title: "Hicaz Hyperloop Team",
      description: "Engineered critical communication protocols and developed real-time GUI systems for vehicle telemetry within the Avionics & Software team. Implemented sensor fusion algorithms to visualize 'Digital Twin' status and battery thermal limits",
      stack: ["Project Management", "Vehicle Telemetry", "GUI Systems"],
      featured: true,
      has3D: false,
      images: ["/images/hyperloop-1.jpg", "/images/hyperloop-2.jpg"]
    },
    {
      id: 2,
      title: "TÜBİTAK 2209 - Frost Risk Prediction System",
      description: "Hybrid Early Warning System funded by TÜBİTAK 2209-A. Calculates 'Wet Bulb Temperature' on embedded devices and uses LSTM to predict frost risk.",
      stack: ["IoT (ESP32)", "Python", "LSTM"],
      featured: true,
      images: ["/images/frost.png"] 
    },
    {
      id: 3,
      title: "Drone Control Station",
      description: "Customized QGroundControl for search-and-rescue drones. Developed C++ plugins for earthquake survivor detection missions.",
      stack: ["C++", "Qt Creator", "QGroundControl"],
      featured: false,
      images: ["/images/drone.jpg"]
    },
    {
      id: 4,
      title: "TÜBİTAK 2209 - Hydroponic Agriculture & AI System",
      description: "Automated nutrient control system integrated with an AI-powered disease detection module (EfficientNet-B0). Hybrid IoT and Deep Learning solution.",
      stack: ["Raspberry Pi", "PyTorch", "Deep Learning", "Arduino"],
      featured: false,
      images: ["/images/hydroponic-1.png", "/images/hydroponic-2.png", "/images/hydroponic-3.png", "/images/hydroponic-4.png", "/images/hydroponic-5.jpg", "/images/hydroponic-6.jpg", "/images/hydroponic-7.jpg"]
    },
    {
      id: 5,
      title: "KARDEMİR Backend Automation",
      description: "Architected and developed a backend automation system to track worker operations using high-performance REST APIs.",
      stack: ["Go (Golang)", "REST APIs", "Postman"],
      featured: false,
    },
    {
      id: 6,
      title: "2D Arcade Game",
      description: "Developed a fully functional game within 48 hours for a GameJam. Managed complex Git merge conflicts and core physics.",
      stack: ["Godot Engine", "Git", "Game Dev"],
      featured: false,
      images: ["/images/gamejam-1.jpg", "/images/gamejam-2.jpg"]
    },
  ],
  skills: {
    "AI & Data Science": ["PyTorch", "TensorFlow", "LSTM", "Pandas", "OpenCV"],
    "Backend & Web": ["Go (Golang)", "Next.js", "Firebase", "REST APIs"],
    "Embedded & IoT": ["C++", "ESP32", "Raspberry Pi", "Arduino", "QGroundControl"],
    "Languages": ["Python", "C", "C++", "Java", "JavaScript", "Dart"],
  },
  contact: {
    github: "https://github.com/isaaltunoglu",
    linkedin: "https://linkedin.com/in/isa-altunoglu",
    email: "52isaaltunoglu@gmail.com",
  },
};

// --- 3D COMPONENTS ---

function HyperloopPod(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta * 0.5));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <capsuleGeometry args={[1, 4, 4, 16]} />
      <meshStandardMaterial
        color={hovered ? "#00f3ff" : "#2b2b2b"}
        emissive={hovered ? "#004444" : "#000000"}
        wireframe
      />
    </mesh>
  );
}

// --- UI COMPONENTS ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl md:text-3xl font-mono font-bold text-neon-blue mb-8 flex items-center gap-3"
  >
    <span className="text-neon-purple">{">"}</span> {children}
  </motion.h2>
);

const Badge = ({ text }: { text: string }) => (
  <span className="px-2 py-1 text-xs font-mono border border-gray-700 rounded bg-gray-900/50 text-gray-300">
    {text}
  </span>
);

function GalleryModal({ images, onClose }: { images: string[]; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: any) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: any) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, images.length]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:text-neon-blue z-50 p-2"
      >
        <X size={32} />
      </button>

      <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
         {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-black/50 md:bg-transparent rounded-full p-2"
              >
                <ChevronLeft size={48} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-black/50 md:bg-transparent rounded-full p-2"
              >
                <ChevronRight size={48} />
              </button>
            </>
         )}

         <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-h-[85vh] max-w-full object-contain rounded-md shadow-2xl shadow-neon-blue/10 border border-gray-800"
              alt={`Gallery image ${currentIndex + 1}`}
            />
         </AnimatePresence>

         <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-neon-blue w-4' : 'bg-gray-600 hover:bg-gray-400'}`}
              />
            ))}
         </div>
         <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded text-sm font-mono text-gray-300">
            {currentIndex + 1} / {images.length}
         </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const [selectedProjectImages, setSelectedProjectImages] = useState<string[] | null>(null);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-neon-blue selection:text-black">
      <AnimatePresence>
        {selectedProjectImages && (
          <GalleryModal images={selectedProjectImages} onClose={() => setSelectedProjectImages(null)} />
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative p-8">
        <div className="absolute inset-0 z-0 opacity-20">
             {/* Background Grid Mockup */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="z-10 text-center max-w-4xl space-y-6 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-neon-blue p-1 mb-4 relative overflow-hidden"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
               <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-normal text-white text-glow font-mono pb-2">
              {PORTFOLIO_DATA.name}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 font-light"
          >
            {PORTFOLIO_DATA.title}
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="inline-block px-4 py-2 border border-neon-blue/30 rounded-full bg-neon-blue/5 backdrop-blur-sm"
          >
            <span className="text-neon-blue font-mono code-font">
              {PORTFOLIO_DATA.motto}
            </span>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-neon-blue rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <SectionTitle>SYSTEM_IDENTITY</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="col-span-2 text-lg text-gray-300 leading-relaxed font-light border-l-2 border-neon-purple pl-6">
            {PORTFOLIO_DATA.about}
          </div>
          <div className="bg-gray-900/40 p-6 rounded-lg border border-gray-800 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 text-neon-green">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              STATUS: ONLINE
            </div>
            <div className="space-y-2 text-gray-400">
              <p><span className="text-gray-500">Location:</span> Turkey / İstanbul</p>
              <p><span className="text-gray-500">Type:</span> Computer Engineering Student</p>
              <p><span className="text-gray-500">Education:</span> Karabük University (3.27 GPA)</p>
              <p><span className="text-gray-500">Focus:</span> Production Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Bento Grid) */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <SectionTitle>DEPLOYED_MODULES</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {/* Hyperloop Feature Project */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="md:col-span-2 md:row-span-2 relative group overflow-hidden border border-gray-800 rounded-2xl bg-gray-900/20 cursor-pointer"
             onClick={() => PORTFOLIO_DATA.projects[0].images && setSelectedProjectImages(PORTFOLIO_DATA.projects[0].images)}
          >
             {/* Background Image for Hyperloop - First image is cover */}
              {PORTFOLIO_DATA.projects[0].images && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={PORTFOLIO_DATA.projects[0].images[0]} 
                    alt="Hyperloop" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" 
                  />
                </div>
              )}

             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />
             
             {/* View Gallery Indicator */}
             <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-2 rounded-full backdrop-blur-sm border border-white/10">
                <ImageIcon className="text-white w-6 h-6" />
             </div>

             <div className="absolute bottom-0 p-8 z-30 w-full pointer-events-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-mono text-white mb-2">{PORTFOLIO_DATA.projects[0].title}</h3>
                  <Terminal className="text-neon-blue w-6 h-6" />
                </div>
                <p className="text-gray-300 mb-4 max-w-md">{PORTFOLIO_DATA.projects[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.projects[0].stack.map(tech => <Badge key={tech} text={tech} />)}
                </div>
             </div>
          </motion.div>

          {/* Other Projects */}
          {PORTFOLIO_DATA.projects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden border border-gray-800 rounded-2xl bg-gray-900/40 hover:bg-gray-800/60 transition-colors flex flex-col justify-between group ${
                index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
              } ${project.images ? 'cursor-pointer' : ''}`}
              onClick={() => project.images && setSelectedProjectImages(project.images)}
            >
              {/* Background Image if available */}
              {project.images && project.images.length > 0 && (
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity z-0">
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                </div>
              )}
              
              {/* Gallery Icon Indicator */}
              {project.images && (
                 <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-2 rounded-full backdrop-blur-sm border border-white/10 pointer-events-none">
                    <ImageIcon className="text-white w-4 h-4" />
                 </div>
              )}

              <div className="relative z-10 p-6 h-full flex flex-col justify-between pointer-events-none">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    {/* Only show icon if no image to avoid clutter/clash */}
                    {!(project.images && project.images.length > 0) && <Code2 className="text-gray-500 w-5 h-5 group-hover:text-neon-purple transition-colors" />}
                    {/* Always keep the external link if needed, or hide it too if preferred. Keeping it for navigation. */}
                  </div>
                  <h3 className="text-xl font-bold font-mono text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 leading-snug">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.slice(0, 3).map(tech => <Badge key={tech} text={tech} />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto bg-gray-900/20 rounded-3xl my-20">
        <SectionTitle>CORE_CAPABILITIES</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(PORTFOLIO_DATA.skills).map(([category, items], i) => (
             <motion.div 
               key={category}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.1 }}
               className="border-l border-gray-700 pl-4"
             >
                <div className="flex items-center gap-2 mb-4 text-neon-blue">
                   {category.includes('AI') ? <Brain size={18} /> : 
                    category.includes('Backend') ? <Database size={18} /> :
                    category.includes('Embedded') ? <Cpu size={18} /> : <Code2 size={18} />}
                   <h4 className="font-mono font-bold">{category}</h4>
                </div>
                <ul className="space-y-2">
                  {items.map(skill => (
                    <li key={skill} className="text-gray-400 text-sm hover:text-white transition-colors cursor-default">
                      {skill}
                    </li>
                  ))}
                </ul>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Contact/Footer */}
      <footer className="border-t border-gray-900 bg-black py-12 px-8">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="font-mono text-2xl font-bold text-white mb-2">{PORTFOLIO_DATA.name}</div>
              <div className="text-gray-500 text-sm">© {new Date().getFullYear()} // ALL RIGHTS RESERVED</div>
            </div>

            <div className="flex gap-6">
               <a href={PORTFOLIO_DATA.contact.github} className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                  <Github size={24} />
               </a>
               <a href={PORTFOLIO_DATA.contact.linkedin} className="text-gray-400 hover:text-neon-blue hover:scale-110 transition-all">
                  <Linkedin size={24} />
               </a>
               <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-gray-400 hover:text-neon-purple hover:scale-110 transition-all">
                  <Mail size={24} />
               </a>
            </div>
         </div>
      </footer>
    </div>
  );
}
