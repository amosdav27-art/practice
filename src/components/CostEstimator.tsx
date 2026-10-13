import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface CostEstimatorProps {
  onOpenEstimate: (serviceTitle?: string, estimateDetails?: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenEstimate }) => {
  const [projectType, setProjectType] = useState<'panels' | 'full-rescreen' | 'cage-paint' | 'lanai' | 'wash'>('panels');
  const [panelCount, setPanelCount] = useState<number>(3);
  const [enclosureSize, setEnclosureSize] = useState<'small' | 'medium' | 'large' | 'mansard'>('medium');
  const [meshType, setMeshType] = useState<'standard' | 'noseeum' | 'petscreen' | 'flglass'>('standard');
  const [replaceScrews, setReplaceScrews] = useState<boolean>(true);
  const [addSoftWash, setAddSoftWash] = useState<boolean>(false);
  const [addPetDoor, setAddPetDoor] = useState<boolean>(false);
  const [addKickplate, setAddKickplate] = useState<boolean>(false);

  // Calculation logic based on real Central Florida market standards
  const calculation = useMemo(() => {
    let min = 0;
    let max = 0;
    let timeEstimate = "Same Day (2–4 hours)";
    let description = "";

    if (projectType === 'panels') {
      const basePerPanel = 55;
      let meshMultiplier = 1;
      if (meshType === 'noseeum') meshMultiplier = 1.25;
      if (meshType === 'petscreen') meshMultiplier = 1.45;
      if (meshType === 'flglass') meshMultiplier = 1.35;

      const baseCost = panelCount * basePerPanel * meshMultiplier;
      min = Math.round(baseCost);
      max = Math.round(baseCost * 1.25);
      timeEstimate = panelCount <= 3 ? "1–2 hours" : "3–5 hours";
      description = `${panelCount} individual panel repairs with commercial spline and ${meshType.toUpperCase()} mesh.`;
    } else if (projectType === 'full-rescreen') {
      let baseMin = 1400;
      let baseMax = 1800;

      if (enclosureSize === 'small') {
        baseMin = 900;
        baseMax = 1300;
        timeEstimate = "1 full day";
      } else if (enclosureSize === 'medium') {
        baseMin = 1600;
        baseMax = 2200;
        timeEstimate = "1–2 days";
      } else if (enclosureSize === 'large') {
        baseMin = 2400;
        baseMax = 3200;
        timeEstimate = "2–3 days";
      } else if (enclosureSize === 'mansard') {
        baseMin = 3300;
        baseMax = 4400;
        timeEstimate = "3–4 days";
      }

      if (meshType === 'noseeum') {
        baseMin *= 1.2;
        baseMax *= 1.2;
      } else if (meshType === 'petscreen') {
        baseMin *= 1.4;
        baseMax *= 1.4;
      }

      min = Math.round(baseMin);
      max = Math.round(baseMax);
      description = `Complete removal of existing mesh, track pressure flush, new commercial spline, and door hardware tune-up.`;
    } else if (projectType === 'cage-paint') {
      let baseMin = 2200;
      let baseMax = 2900;

      if (enclosureSize === 'small') {
        baseMin = 1500;
        baseMax = 2100;
        timeEstimate = "2 days";
      } else if (enclosureSize === 'medium') {
        baseMin = 2400;
        baseMax = 3400;
        timeEstimate = "3 days";
      } else if (enclosureSize === 'large') {
        baseMin = 3600;
        baseMax = 4800;
        timeEstimate = "3–4 days";
      } else if (enclosureSize === 'mansard') {
        baseMin = 4800;
        baseMax = 6200;
        timeEstimate = "4–5 days";
      }

      min = Math.round(baseMin);
      max = Math.round(baseMax);
      description = `Oxidation sanding, chemical wash, corrosion primer & 2 coats marine polyurethane enamel.`;
    } else if (projectType === 'lanai') {
      min = 2800;
      max = 6500;
      timeEstimate = "3–5 days (post permit/prep)";
      description = `Custom aluminum framing, concrete tapcon anchoring, kickplates, screen door, and Phifer screening.`;
    } else if (projectType === 'wash') {
      min = 150;
      max = 350;
      timeEstimate = "2–4 hours";
      description = `High-pressure paver deck cleaning, organic mildew killer, and soft wash cage rinse.`;
    }

    // Addons
    if (replaceScrews && (projectType === 'full-rescreen' || projectType === 'cage-paint')) {
      min += 250;
      max += 450;
    }
    if (addSoftWash && projectType !== 'wash') {
      min += 140;
      max += 220;
    }
    if (addPetDoor) {
      min += 180;
      max += 260;
    }
    if (addKickplate) {
      min += 220;
      max += 380;
    }

    return { min, max, timeEstimate, description };
  }, [projectType, panelCount, enclosureSize, meshType, replaceScrews, addSoftWash, addPetDoor, addKickplate]);

  const handleBookEstimate = () => {
    const details = `Estimated range: $${calculation.min} - $${calculation.max} (${projectType.toUpperCase()}, ${calculation.timeEstimate}). ${calculation.description}`;
    onOpenEstimate(`Estimate: ${projectType.replace('-', ' ').toUpperCase()}`, details);
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-slate-950 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <Calculator className="w-4 h-4" />
            <span>Transparent Pricing &bull; No Hidden Surprises</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Instant Pool Screen &amp; Restoration Estimator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Get an honest, real-time ballpark estimate based on Central Florida material and labor rates. Dwayne verifies every estimate with an on-site tape measure walkthrough before starting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            {/* Step 1: Project Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-200 mb-3">
                1. Select Service Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'panels', label: 'Single Panel Repairs' },
                  { id: 'full-rescreen', label: 'Full Pool Cage Rescreen' },
                  { id: 'cage-paint', label: 'Pool Cage Painting' },
                  { id: 'lanai', label: 'Screen Room / Lanai' },
                  { id: 'wash', label: 'Pressure Washing' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as any)}
                    className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'bg-cyan-500/15 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-900/40 ring-1 ring-cyan-400/50'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope or Size */}
            {projectType === 'panels' && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-200">
                    2. Number of Damaged Panels: <span className="text-cyan-400 text-base">{panelCount}</span>
                  </label>
                  <span className="text-xs text-slate-400">$55 base per panel</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={panelCount}
                  onChange={(e) => setPanelCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Panel</span>
                  <span>4 Panels</span>
                  <span>8 Panels</span>
                  <span>12+ Panels</span>
                </div>
              </div>
            )}

            {(projectType === 'full-rescreen' || projectType === 'cage-paint') && (
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-200 mb-3">
                  2. Enclosure Size &amp; Style
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'small', title: 'Small 1-Story Lanai', sub: 'Up to 15x20 ft · ~20-30 panels' },
                    { id: 'medium', title: 'Standard Pool Enclosure', sub: '20x35 to 25x40 ft · ~40-60 panels' },
                    { id: 'large', title: 'Large / High Profile', sub: '30x50+ ft · Multi-level pool deck' },
                    { id: 'mansard', title: '2-Story Mansard Cage', sub: 'Double height roof & multi-room' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setEnclosureSize(s.id as any)}
                      className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                        enclosureSize === s.id
                          ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-md'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-xs sm:text-sm">{s.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{s.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Mesh Quality */}
            {projectType !== 'wash' && projectType !== 'cage-paint' && (
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-200 mb-3">
                  3. Screen Mesh Grade
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'standard', name: 'Standard 18x14 Charcoal', note: 'Standard insect shield & great airflow' },
                    { id: 'noseeum', name: '20x20 No-See-Um Micro Mesh', note: 'Essential for gnats & lakefront homes' },
                    { id: 'petscreen', name: 'Phifer PetScreen® (7x Stronger)', note: 'Tear-proof for dogs, cats & wildlife' },
                    { id: 'flglass', name: 'Florida Glass Privacy Screen', note: 'Solid vinyl barrier for dirt & privacy' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMeshType(m.id as any)}
                      className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                        meshType === m.id
                          ? 'bg-blue-600/20 border-cyan-400 text-white ring-1 ring-cyan-400/40'
                          : 'bg-slate-800/50 border-slate-700/70 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-xs sm:text-sm">{m.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{m.note}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Optional Add-ons */}
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-3">
                4. Recommended Florida Add-Ons
              </label>
              <div className="space-y-2.5">
                {(projectType === 'full-rescreen' || projectType === 'cage-paint') && (
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/70 cursor-pointer hover:bg-slate-800 transition-colors">
                    <input
                      type="checkbox"
                      checked={replaceScrews}
                      onChange={(e) => setReplaceScrews(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-600 focus:ring-cyan-500"
                    />
                    <div className="text-xs sm:text-sm">
                      <div className="font-semibold text-white">Nylo-Tec Ceramic Rust-Proof Screw Replacement (+$250–$450)</div>
                      <div className="text-slate-400 text-[11px]">Replaces corroding builder screws with marine-grade fasteners that will never rust or stain your patio.</div>
                    </div>
                  </label>
                )}

                {projectType !== 'wash' && (
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/70 cursor-pointer hover:bg-slate-800 transition-colors">
                    <input
                      type="checkbox"
                      checked={addSoftWash}
                      onChange={(e) => setAddSoftWash(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-600 focus:ring-cyan-500"
                    />
                    <div className="text-xs sm:text-sm">
                      <div className="font-semibold text-white">Soft-Wash Cage Mildew Eradication (+$140–$220)</div>
                      <div className="text-slate-400 text-[11px]">Eco-friendly detergent application to kill green mold and algae on frame beams before screen installation.</div>
                    </div>
                  </label>
                )}

                <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/70 cursor-pointer hover:bg-slate-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={addPetDoor}
                    onChange={(e) => setAddPetDoor(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-600 focus:ring-cyan-500"
                  />
                  <div className="text-xs sm:text-sm">
                    <div className="font-semibold text-white">Heavy-Duty Screen Pet Door Installation (+$180–$260)</div>
                    <div className="text-slate-400 text-[11px]">Framed magnetic-flap access door for dogs/cats installed seamlessly into screen wall.</div>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/70 cursor-pointer hover:bg-slate-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={addKickplate}
                    onChange={(e) => setAddKickplate(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-600 focus:ring-cyan-500"
                  />
                  <div className="text-xs sm:text-sm">
                    <div className="font-semibold text-white">Aluminum Splash Kickplate Addition (+$220–$380)</div>
                    <div className="text-slate-400 text-[11px]">16-inch aluminum barrier around base to block weed-whacker cuts, mud, and lawn clippings.</div>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Real-time Summary Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative sticky top-28">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <span className="px-3 py-1 bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full shadow">
                Instant Estimate
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Estimated Project Cost</h3>
            <p className="text-xs text-slate-400 mb-6">
              Includes commercial-grade Phifer® mesh, heavy-duty UV spline, labor, and clean-up.
            </p>

            {/* Big price display */}
            <div className="p-5 rounded-xl bg-slate-800/70 border border-slate-700/80 mb-6 text-center">
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
                Estimated Price Range
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                ${calculation.min.toLocaleString()} – ${calculation.max.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Best Price Guarantee &bull; Free In-Person Confirmation</span>
              </div>
            </div>

            {/* Details breakdown */}
            <div className="space-y-3 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Service:</span>
                <span className="font-medium text-slate-200 capitalize">{projectType.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Estimated Duration:</span>
                <span className="font-medium text-slate-200">{calculation.timeEstimate}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Mesh Material:</span>
                <span className="font-medium text-cyan-300 capitalize">{meshType}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Includes:</span>
                <span className="font-medium text-slate-300 text-right max-w-[200px]">Old mesh disposal, door alignment &amp; inspection</span>
              </div>
            </div>

            {/* Booking action button */}
            <button
              onClick={handleBookEstimate}
              className="w-full py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Lock In Quote &amp; Book Inspection</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-[11px] text-center text-slate-400 mt-3">
              Need immediate help? Call Dwayne directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-emerald-400 font-semibold hover:underline">{BUSINESS_INFO.phone}</a>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
