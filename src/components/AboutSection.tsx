import React from 'react';
import { ShieldCheck, Award, ThumbsUp, HeartHandshake, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const AboutSection: React.FC<{ onOpenEstimate: (serviceTitle?: string) => void }> = ({ onOpenEstimate }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo / visual showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src={BUSINESS_INFO.craftImage}
                alt="Dwayne Lessane craftsmanship and precision spline installation"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1">
                  Owner &amp; Lead Specialist
                </div>
                <div className="text-xl font-black text-white">Dwayne Lessane</div>
                <p className="text-xs text-slate-300 mt-1">
                  "Every panel we roll is tension-tested to endure Florida summer squalls and keep your pool sparkling clean."
                </p>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -top-4 -left-4 bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-xl hidden sm:block">
              <div className="text-2xl font-black text-cyan-400">100%</div>
              <div className="text-[11px] text-slate-300 font-medium">Owner-Operated Care</div>
            </div>
          </div>

          {/* Story & Values Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>The Lessane Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Craftsmanship Built To Endure Central Florida's Climate
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              At Lessane Installations and Repairs, we believe your backyard pool and lanai should be a relaxing sanctuary—not a haven for mosquitoes, green algae, or torn screens. Founded and led by Dwayne Lessane in Davenport, Florida, our company was founded on a simple promise: deliver honest contractor pricing, use only superior materials, and treat every homeowner's enclosure as if it were our own.
            </p>

            <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
              Unlike sub-contracted crews who rush through jobs with cheap imported spline that pops out after the first tropical storm, Dwayne inspects frame angles, clears out dirt-filled tracks, and tightly rolls high-grade Phifer® mesh. Whether repairing two torn roof panels or painting an entire oxidized two-story enclosure, we leave your patio cleaner than we found it.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                  <Award className="w-4 h-4" />
                  <span>Premium Materials Only</span>
                </div>
                <p className="text-xs text-slate-400">
                  Phifer® fiberglass and polyester mesh, heavy-gauge commercial spline, and marine-grade coatings.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Transparent Upfront Quotes</span>
                </div>
                <p className="text-xs text-slate-400">
                  No hidden fees, no bait-and-switch. What we quote on our free inspection is what you pay.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Clean Job Sites</span>
                </div>
                <p className="text-xs text-slate-400">
                  All old screens and debris disposed of. Screen doors adjusted and hinges oiled complimentary.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed &amp; Insured</span>
                </div>
                <p className="text-xs text-slate-400">
                  Comprehensive liability insurance protecting your property throughout the repair process.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenEstimate('Meeting with Dwayne')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule With Dwayne</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
