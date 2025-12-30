
import React from 'react';

interface DeviceMockupProps {
  desktopImage: string;
  mobileImage: string;
}

const DeviceMockup: React.FC<DeviceMockupProps> = ({ desktopImage, mobileImage }) => {
  return (
    <div className="relative w-full aspect-video mb-6 flex justify-center items-end group-hover:scale-[1.02] transition-transform duration-500">
      {/* Desktop Laptop Frame */}
      <div className="relative w-[80%] z-0">
        <div className="bg-slate-800 rounded-t-lg p-1 shadow-xl border-x border-t border-slate-700">
          <div className="bg-black rounded-sm overflow-hidden aspect-[16/10] relative">
             <img 
               src={desktopImage} 
               alt="Desktop View" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
        <div className="bg-slate-700 h-2 w-full rounded-b-md relative shadow-lg">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-0.5 bg-slate-600 rounded-b"></div>
        </div>
      </div>

      {/* Mobile Phone Frame */}
      <div className="absolute -left-2 bottom-2 w-[16%] z-10 shadow-2xl">
         <div className="bg-slate-900 rounded-[1rem] p-0.5 border-2 border-slate-800 ring-1 ring-slate-700 overflow-hidden aspect-[9/19]">
            <div className="bg-black w-full h-full rounded-[0.8rem] overflow-hidden relative">
              <img 
                src={mobileImage} 
                alt="Mobile View" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-black rounded-b-md"></div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DeviceMockup;
