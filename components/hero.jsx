import React from "react";
import Scene from "@/components/wobbleMesh";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-full px-4 pb-32">
            <div className="mx-auto max-w-3xl text-center">
              <div className="wow fadeInUp text-center" data-wow-delay=".3s">
                <div className="canvas-container">
                  <Canvas dpr={[1, 2]}>
                    <Scene />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      maxPolarAngle={Math.PI / 2}
                      minPolarAngle={Math.PI / 2}
                    />
                    <EffectComposer>
                      <Bloom
                        luminanceThreshold={0.5}
                        luminanceSmoothing={0.2}
                      />
                    </EffectComposer>
                  </Canvas>
                </div>
              </div>
              <h1 className="font-bold leading-snug bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl leading-[1.2] tracking-tighter text-transparent sm:leading-[4.75rem] text-center">
                Talk is cheap. Show me the code.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-[2.5rem] tracking-tight text-center text-slate-400">
                We are a group of motivated students who wish to create an
                environment for anyone who wishes to begin their coding journey.
              </p>
              <ul className="mt-10 flex flex-wrap items-center justify-center">
                <li>
                  <a
                    href="#"
                    className="rounded-full bg-sky-300 py-3 px-6 font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Join us now
                  </a>
                </li>
                <li>
                  <a
                    href="#get-refactoring-ui"
                    className="ml-6 rounded-full border border-white/10 bg-slate-700/40 py-3 px-6 font-semibold text-white hover:border-white/20 hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Star on Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
