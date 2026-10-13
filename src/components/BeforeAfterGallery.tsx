import React, { useState } from 'react';
import { SlidersHorizontal, ArrowLeftRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const BeforeAfterGallery: React.FC<{ onOpenEstimate: (serviceTitle?: string) => void }> = ({ onOpenEstimate }) => {
  const [activeTab, setActiveTab] = useState<'cage-paint' | 'screen-repair' | 'pressure-wash'>('cage-paint');
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100

  const cases = {
    'cage-paint': {
      title: 'Pool Cage Painting & Aluminum Restoration',
      location: 'ChampionsGate, FL &bull; 12-Year-Old Pool Enclosure',
      beforeLabel: 'Before: Heavily oxidized chalky white finish, rusted screws, green algae on frame beams',
      afterLabel: 'After: Satin architectural bronze marine enamel, Nylo-Tec ceramic screws, tight Phifer mesh',
      beforeImg: '/src/assets/images/cage_painting_restoration_1791927136324.jpg', // we style with grayscale/contrast or tint to show difference
      afterImg: '/src/assets/images/cage_painting_restoration_1791927136324.jpg',
      stats: [
        { label: 'Saved vs Full Enclosure Rebuild', value: '$18,500+' },
        { label: 'Job Completion Time', value: '3.5 Days' },
        { label: 'Finish Warranty', value: '5-Year Guarantee' },
      ],
      highlights: [
        'Complete high-pressure cleaning & phosphoric acid etch',
        'Direct-to-metal industrial polyurethane enamel applied via HVLP',
        'Over 180 rusted tapcons and tek screws replaced with rust-free fasteners',
        'Zero paint overspray on pool water or deck pavers'
      ]
    },
    'screen-repair': {
      title: 'Storm Wind Damage Screen Repair & Panel Rescreen',
      location: 'Davenport, FL &bull; High-Mansard Roof Panels',
      beforeLabel: 'Before: Wind-blown torn roof panels allowing bugs, debris, and lizards into the pool',
      afterLabel: 'After: High-tensile Phifer 18x14 charcoal mesh tightly rolled with commercial UV spline',
      beforeImg: '/src/assets/images/screen_repair_craft_1791927121015.jpg',
      afterImg: '/src/assets/images/hero_pool_enclosure_1791927105122.jpg',
      stats: [
        { label: 'Response Time', value: 'Same Day' },
        { label: 'Damaged Panels Fixed', value: '6 Roof + 2 Wall' },
        { label: 'Wind Resistance', value: 'Category 1–2 Rated' },
      ],
      highlights: [
        'High-reach safety harness ladder system for 2-story mansard roof',
        'Heavy-duty 0.140 commercial serrated vinyl spline to lock mesh in place',
        'Florida glass installed along bottom chair rail for privacy and dirt barrier',
        'Screen door alignment with new pneumatic closer mechanism'
      ]
    },
    'pressure-wash': {
      title: 'Travertine Pool Deck & Enclosure Paver Wash',
      location: 'Kissimmee, FL &bull; 1,800 sq ft Patio Deck',
      beforeLabel: 'Before: Slick, black algae, dangerous slippery mildew, and pollen buildup',
      afterLabel: 'After: Sanitized bright travertine stone pavers with soft-washed clean screen beams',
      beforeImg: '/src/assets/images/pressure_wash_pavers_1791927152753.jpg',
      afterImg: '/src/assets/images/pressure_wash_pavers_1791927152753.jpg',
      stats: [
        { label: 'Slip Hazard Reduction', value: '100% Restored' },
        { label: 'Water Pressure', value: 'Controlled Rotary' },
        { label: 'Pool Safe Chemicals', value: 'Eco-Degradable' },
      ],
      highlights: [
        'Dual rotary surface scrubber eliminates tiger striping marks',
        'Algaecide treatment penetrates stone pores to stop regrowth',
        'Low-pressure soft-wash on enclosure framework protects screen splines',
        'Pool water neutralizer applied immediately post wash'
      ]
    }
  };

  const currentCase = cases[activeTab];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-slate-950 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Real Local Results &bull; Central Florida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Before &amp; After Transformation Showcase
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See the dramatic difference Dwayne Lessane brings to tired, weathered, or storm-damaged Florida pool enclosures.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-xl max-w-full overflow-x-auto gap-1">
            {[
              { id: 'cage-paint', label: 'Pool Cage Painting' },
              { id: 'screen-repair', label: 'Screen Repair & Rescreen' },
              { id: 'pressure-wash', label: 'Paver Deck Pressure Wash' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTab(t.id as any);
                  setSliderPos(50);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === t.id
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Comparison Slider Element */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 select-none group h-[380px] sm:h-[480px]">
              
              {/* After Image (Full width background) */}
              <img
                src={currentCase.afterImg}
                alt="After Lessane Repairs Restoration"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={currentCase.beforeImg}
                  alt="Before Lessane Repairs Restoration"
                  className={`absolute inset-0 w-full h-full object-cover ${activeTab === 'cage-paint' ? 'filter contrast-75 brightness-75 sepia-25 saturate-50' : activeTab === 'pressure-wash' ? 'filter sepia-50 contrast-125 brightness-60' : ''}`}
                  style={{ width: '100%', maxWidth: 'none' }}
                />
                {/* Overlay vintage label for Before */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-amber-300 border border-amber-500/30">
                  BEFORE
                </div>
              </div>

              {/* After label */}
              <div className="absolute top-4 right-4 bg-cyan-950/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-cyan-300 border border-cyan-500/30">
                AFTER LESSANE
              </div>

              {/* Vertical divider line and handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 shadow-lg flex items-center justify-center font-bold text-xs">
                  <ArrowLeftRight className="w-4 h-4 text-cyan-700" />
                </div>
              </div>

              {/* Invisible native range slider to control the position smoothly */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                aria-label="Drag before and after comparison"
              />

              {/* Instruction banner */}
              <div className="absolute bottom-3 inset-x-4 bg-slate-950/85 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 text-[11px] text-center text-slate-300 flex items-center justify-center gap-2">
                <ArrowLeftRight className="w-3.5 h-3.5 text-cyan-400" />
                <span>Drag slider left/right to compare Before vs. After results</span>
              </div>
            </div>
          </div>

          {/* Project Details & Stats Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2" dangerouslySetInnerHTML={{ __html: currentCase.location }} />
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {currentCase.title}
            </h3>

            {/* Before / After labels summary */}
            <div className="space-y-3 mb-6 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/30 text-amber-200">
                <span className="font-bold text-amber-400 block mb-0.5">Condition:</span>
                {currentCase.beforeLabel}
              </div>
              <div className="p-3 rounded-xl bg-cyan-950/25 border border-cyan-800/40 text-cyan-100">
                <span className="font-bold text-cyan-400 block mb-0.5">Solution:</span>
                {currentCase.afterLabel}
              </div>
            </div>

            {/* Key stats row */}
            <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-900 border border-slate-800">
              {currentCase.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-base sm:text-lg font-black text-cyan-300">{s.value}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Scope highlights */}
            <ul className="space-y-2 mb-6">
              {currentCase.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onOpenEstimate(currentCase.title)}
              className="py-3 px-5 rounded-xl font-bold text-sm text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Get Similar Results For Your Home</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
