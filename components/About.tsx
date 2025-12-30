
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0f1d] text-white">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Olá, eu sou <span className="text-blue-500 font-bold">Phelipe Gonçalves</span>, um desenvolvedor apaixonado por criar soluções que unem design impecável e código robusto. Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam sob o capô, e hoje transformo essa paixão em produtos escaláveis.
              </p>
              <p>
                Com vasta experiência em ecossistemas modernos como React e Node.js, foco em entregar performance sem comprometer a usabilidade. Acredito que o código é uma forma de arte funcional, onde cada linha deve ter um propósito claro.
              </p>
              <p>
                Ao longo dos anos, tenho ajudado startups e empresas consolidadas a tirarem suas ideias do papel, focando sempre em arquitetura limpa, segurança e escalabilidade. Quando não estou codando, provavelmente estou estudando novas tendências de UI/UX ou explorando o mundo da fotografia digital.
              </p>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 flex justify-center">
            {/* Polaroid Style Frame */}
            <div className="bg-white p-4 pb-12 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-sm">
              <div className="bg-slate-200 aspect-square overflow-hidden mb-4">
                <img 
                  src="../assets/phelipeFoto.jpeg"
                  alt="Phelipe Gonçalves Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="font-serif text-slate-800 text-xl text-center italic">
                Phelipe, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
