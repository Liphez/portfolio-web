
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import About from './components/About';

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <About />
      
      <footer className="bg-[#0a0f1d] border-t border-white/5 py-12 text-center text-slate-500">
        <div className="container mx-auto px-8">
          <p>© {new Date().getFullYear()} Phelipe Gonçalves. Built with passion & TypeScript.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
