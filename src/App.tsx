import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Wireframe } from './components/Wireframe';

function App() {
  return (
    <div className=" h-screen flex flex-col items-center bg-neutral-900">
      <Wireframe />
      <div className="flex flex-col items-center max-w-2xl">
        <h1 className="p-1 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 overflow-visible">
          Tre nye teknologier
        </h1>
        <h1 className="p-1 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-leftBlendColor to-rightBlendColor overflow-visible">
          Tre nye teknologier
        </h1>
        <h1 className="p-1 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-leftColor to-rightColor overflow-visible">
          Tre nye teknologier
        </h1>
        <p className="text-slate-50 m-2">
          Jeg lagde denne siden for å teste ut tre teknologier som er nye for meg. <a className='underline decoration-purple-400' href="https://openscad.org/">OpenSCAD</a> for å
          modellere i 3D, <a className='underline decoration-rightBlendColor' href="https://threejs.org/">Three.js</a> for rendre 3D-grafikk i browseren, og <a className='underline decoration-rightColor' href='https://tailwindcss.com/'>Tailwind</a> for
          styling.
        </p>
      </div>
    </div>
  );
}

export default App;
