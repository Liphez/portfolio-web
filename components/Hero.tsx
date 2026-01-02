
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 bg-[#0a0f1d] overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 tracking-tight">
          Phelipe Gonçalves
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-8">
          Engenheiro de Software Full-Stack
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          Transformando ideias complexas em experiências digitais elegantes, 
          performantes e escaláveis para o mercado global.
        </p>
        
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-900/40 transition-all active:scale-95">
          Get in Touch
        </button>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
