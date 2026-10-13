import React, { useState } from 'react';
import { Layers, ShieldCheck, Wind, Eye, Award, CheckCircle2 } from 'lucide-react';
import { MESH_MATERIALS } from '../data/servicesData';
import { MaterialOption } from '../types';

export const MaterialGuide: React.FC<{ onOpenEstimate: (serviceTitle?: string) => void }> = ({ onOpenEstimate }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>(MESH_MATERIALS[0].id);

  const activeMat = MESH_MATERIALS.find((m) => m.id === selectedMaterial) || MESH_MATERIALS[0];

  return (
    <section id="materials" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <Layers className="w-4 h-4" />
            <span>Phifer® Made In USA Materials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Screen Mesh Selection Guide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Never settle for cheap brittle mesh that tears in 2 years. We exclusively install American-made Phifer® fiberglass and polyester screens with UV-stabilized core technology.
          </p>
        </div>

        {/* Material Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {MESH_MATERIALS.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterial(mat.id)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedMaterial === mat.id
                  ? 'bg-slate-800 border-cyan-400 shadow-xl shadow-cyan-950 ring-1 ring-cyan-400/40'
                  : 'bg-slate-950/60 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {mat.badge}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {mat.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {mat.bestFor}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-300">
                <span>View Specs</span>
                <span className="text-base">&rarr;</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Material Detail Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 text-xs font-semibold uppercase tracking-wider mb-3">
                {activeMat.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {activeMat.name}
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                <span className="text-white font-semibold">Recommended for: </span>
                {activeMat.bestFor}
              </p>

              {/* Feature list */}
              <div className="space-y-3 mb-6">
                {activeMat.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenEstimate(`Upgrade to ${activeMat.name}`)}
                className="py-3 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/25 transition-all cursor-pointer"
              >
                Request Free Quote With {activeMat.name.split(' ')[1] || 'This Mesh'}
              </button>
            </div>

            {/* Performance Ratings Box */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Performance Specifications</span>
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Durability &amp; Longevity</span>
                    <span className="font-semibold text-white">{activeMat.durability}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-500 h-full rounded-full" style={{ width: activeMat.id === 'petscreen' ? '100%' : activeMat.id === 'no-see-um-20-20' ? '80%' : '65%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Outward Daytime Visibility</span>
                    <span className="font-semibold text-white">{activeMat.visibility}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: activeMat.id === 'standard-18-14' ? '100%' : activeMat.id === 'no-see-um-20-20' ? '85%' : activeMat.id === 'petscreen' ? '65%' : '20%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Airflow &amp; Breeze Penetration</span>
                    <span className="font-semibold text-white">{activeMat.airflow}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: activeMat.id === 'standard-18-14' ? '100%' : activeMat.id === 'no-see-um-20-20' ? '75%' : activeMat.id === 'petscreen' ? '70%' : '0%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Pet Claw &amp; Wildlife Resistance</span>
                    <span className="font-semibold text-white">{activeMat.petResistance}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: activeMat.id === 'petscreen' ? '100%' : activeMat.id === 'florida-glass' ? '90%' : '40%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>All screens installed with heavy gauge 0.140 commercial spline.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
