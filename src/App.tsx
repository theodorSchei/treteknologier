import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { CodeBlock } from './components/CodeBlock';
import { Footer } from './components/Footer';
import { Wireframe } from './components/Wireframe';

function App() {
  return (
    <div className="flex flex-col items-center bg-neutral-900">
      <div className="h-[50vh] w-screen">
        <Wireframe />
      </div>

      <div className="flex w-full max-w-3xl flex-col items-center p-2">
        <h1 className="overflow-visible bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text p-1 text-2xl font-extrabold text-transparent md:text-5xl lg:text-7xl">
          Tre nye teknologier
        </h1>
        <h1 className="overflow-visible bg-gradient-to-r from-leftBlendColor to-rightBlendColor bg-clip-text p-1 text-2xl font-extrabold text-transparent md:text-5xl lg:text-7xl">
          Tre nye teknologier
        </h1>
        <h1 className="overflow-visible bg-gradient-to-r from-leftColor to-rightColor bg-clip-text p-1 text-2xl font-extrabold text-transparent md:text-5xl lg:text-7xl">
          Tre nye teknologier
        </h1>

        <p className=" m-2 w-full pt-8 text-slate-50 lg:text-xl">
          Jeg lagde denne siden for å teste ut tre teknologier som er nye for meg.{' '}
          <a className="underline decoration-purple-400" href="https://openscad.org/">
            OpenSCAD
          </a>{' '}
          for å modellere i 3D,{' '}
          <a className="underline decoration-rightBlendColor" href="https://threejs.org/">
            Three.js
          </a>{' '}
          for rendre 3D-grafikk i browseren, og{' '}
          <a className="underline decoration-rightColor" href="https://tailwindcss.com/">
            Tailwind
          </a>{' '}
          for styling.
        </p>

        <p className="m-2 w-full text-slate-50 lg:text-xl">Her koden for å generere 3D-modellen i OpenSCAD:</p>

        <div className="w-full overflow-scroll pt-4">
          <CodeBlock />
        </div>
        <script src="https://gist.github.com/theodorSchei/799d0fdf3c1ca6d97801c2621798090a.js"></script>
      </div>
      <Footer />
    </div>
  );
}

export default App;
