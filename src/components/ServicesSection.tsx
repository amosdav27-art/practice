import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, Paintbrush, Droplets, Home } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenEstimate: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'screen' | 'paint' | 'wash' | 'construction'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'screen', label: 'Screen & Rescreening' },
    { id: 'paint', label: 'Cage & House Painting' },
    { id: 'wash', label: 'Pressure Washing' },
    { id: 'construction', label: 'Screen Rooms & Lanais' },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <Wrench className="w-4 h-4" />
              <span>Full-Scope Exterior Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Specialized Services &amp; Repairs
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              From high-wind screen tears over your pool to oxidized aluminum cage frame painting and spotless paver washing, we deliver lasting durability against the Florida elements.
            </p>
          </div>

          {/* Interactive filter tabs per frontend-design guidelines */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-950 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all flex flex-col group"
            >
              {/* Card visual banner */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold px-2 py-1 rounded bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-cyan-300">
                    {service.startingPrice}
                  </span>
                  <span className="text-slate-300 text-[11px] bg-slate-900/80 px-2 py-1 rounded backdrop-blur-md">
                    Central Florida
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed kicker per frontend-design */}
                  <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    {service.popularFor}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {service.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400">
                    Free on-site estimate
                  </div>
                  <button
                    onClick={() => onOpenEstimate(service.title)}
                    className="px-3.5 py-2 rounded-lg font-semibold text-xs text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-800/80 hover:border-cyan-600 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
