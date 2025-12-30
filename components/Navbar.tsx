
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent">
      <div className="flex items-center gap-4">
        <img 
          src="../assets/phelipeFoto.jpeg" 
          alt="Phelipe Gonçalves" 
          className="w-10 h-10 rounded-full border-2 border-white/20 shadow-lg"
        />
      </div>
      <div className="flex gap-8 text-white/80 font-medium">
        <a href="#projects" className="hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
