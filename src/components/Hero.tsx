import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, MapPin, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeroProps {
  onOpenEstimate: (serviceTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left copy column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed kicker per frontend-design rules */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-4">
              <span>Davenport &amp; Central Florida</span>
              <span aria-hidden="true" className="text-slate-600">&bull;</span>
              <span>Pool Enclosure Specialists</span>
              <span aria-hidden="true" className="text-slate-600">&bull;</span>
              <span>Owner-Operated</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Flawless Pool Screen Repairs &amp; Outdoor Restorations
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              Restore your pool cage with tight, hurricane-grade Phifer® screen mesh, precision aluminum painting, and spotless paver pressure washing. Led by Dwayne Lessane with honest local craftsmanship across Davenport, Orlando, Kissimmee, and Central Florida.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => onOpenEstimate()}
                className="px-6 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-600/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl font-bold text-base text-slate-100 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Call Dwayne: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Clean unboxed proof metadata (no pills!) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
              <div>
                <div className="flex items-center gap-1 text-amber-400 font-bold text-sm mb-0.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>5.0 Star Rating</span>
                </div>
                <span>Verified Central FL Clients</span>
              </div>

              <div>
                <div className="font-bold text-sm text-slate-200 mb-0.5">
                  24/7 Urgent Care
                </div>
                <span>Storm &amp; Wind Tear Relief</span>
              </div>

              <div>
                <div className="font-bold text-sm text-slate-200 mb-0.5">
                  Phifer® Mesh
                </div>
                <span>Heavy-Duty UV Spline</span>
              </div>

              <div>
                <div className="font-bold text-sm text-slate-200 mb-0.5">
                  Free Inspection
                </div>
                <span>Zero Obligation Quotes</span>
              </div>
            </div>

          </div>

          {/* Right visual showcase column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/60 group">
              <img
                src={BUSINESS_INFO.heroImage}
                alt="Flawless Central Florida Pool Enclosure and Screened Lanai Cage"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Informational overlay box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-slate-100">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                      Recent Project Showcase
                    </p>
                    <h3 className="text-base font-bold text-white">
                      Full Pool Cage Rescreen &amp; Bronze Paint
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      ChampionsGate, FL &bull; High-tensile Phifer 20x20 mesh + ceramic screws
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-800/95 border border-slate-700 rounded-xl p-3 shadow-xl backdrop-blur-sm items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Same-Day Dispatch</p>
                <p className="text-[11px] text-slate-400">Davenport &bull; Kissimmee &bull; Orlando</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
