import React from 'react';

interface DeviceMockupProps {
  imageSrc: string;
  altText: string;
}

const DeviceMockup: React.FC<DeviceMockupProps> = ({ imageSrc, altText }) => {
  return (
    <div className="w-full h-auto mb-6 overflow-hidden rounded-xl bg-slate-50 shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-500">
      {/* Adicionei 'bg-slate-100' aqui no container interno. 
          Se a imagem não preencher tudo, o fund será cinza claro em vez de branco.
      */}
      <div className="overflow-hidden aspect-video relative bg-slate-100 flex items-center justify-center">
        <img 
          src={imageSrc}
          alt={altText} 
          // MUDANÇA AQUI: De 'object-cover' para 'object-contain'
          // Adicionei 'p-2' para dar um respiro se a imagem for muito colada na borda
          className="w-full h-full object-contain object-center transform scale-[1.25] group-hover:scale-[1.20] transition-transform duration-700 ease-out"
          loading="lazy"
        />
        
        {/* Brilho suave no hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export default DeviceMockup;