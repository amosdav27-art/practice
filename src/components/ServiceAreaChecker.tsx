import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Phone, AlertCircle, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data/servicesData';

export const ServiceAreaChecker: React.FC<{ onOpenEstimate: (serviceTitle?: string) => void }> = ({ onOpenEstimate }) => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    area?: (typeof SERVICE_AREAS)[0];
    message?: string;
  } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = query.trim().toLowerCase();
    if (!clean) return;

    // Check if zip or city matches
    const matched = SERVICE_AREAS.find(
      (a) =>
        a.city.toLowerCase().includes(clean) ||
        a.zipCodes.some((z) => z.includes(clean)) ||
        a.county.toLowerCase().includes(clean)
    );

    if (matched) {
      setSearchResult({
        found: true,
        area: matched,
        message: `Great news! We service ${matched.city} (${matched.county}). Dispatch speed: ${matched.distanceTier}. Free on-site inspection available.`
      });
    } else {
      setSearchResult({
        found: false,
        message: `We often service locations just outside our standard radius! Call Dwayne at ${BUSINESS_INFO.phone} to confirm immediate availability.`
      });
    }
  };

  return (
    <section id="service-areas" className="py-16 lg:py-24 bg-slate-950 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive ZIP & City Lookup */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <MapPin className="w-4 h-4" />
              <span>Central Florida Coverage</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Service Area &amp; ZIP Code Lookup
            </h2>

            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              Based in Davenport, Florida 33897, Lessane Repairs provides rapid-response pool enclosure repairs, rescreens, and painting across Polk, Osceola, Orange, and Lake counties.
            </p>

            {/* Interactive Search Bar Form */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-lg focus-within:border-cyan-400 transition-colors">
                <div className="pl-3 text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter your Florida ZIP (e.g. 33897) or City..."
                  className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none px-2 py-2"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-cyan-600 hover:bg-cyan-500 transition-colors cursor-pointer shrink-0 shadow-md"
                >
                  Check Area
                </button>
              </div>
            </form>

            {/* Live Search Feedback Card */}
            {searchResult && (
              <div
                className={`p-4 rounded-2xl border text-sm mb-6 animate-in fade-in duration-200 ${
                  searchResult.found
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                    : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {searchResult.found ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold text-white">{searchResult.message}</p>
                    {searchResult.found && (
                      <button
                        onClick={() => onOpenEstimate(`Service Area Booking: ${searchResult.area?.city}`)}
                        className="mt-3 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Schedule Free On-Site Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <span className="font-semibold text-slate-200">Main Office:</span>
              <span>Davenport, FL 33897 &bull; +1 (910) 261-0196</span>
            </div>

          </div>

          {/* Right Column: Key Service Towns Grid */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              Primary Covered Communities
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Our service trucks are outfitted daily with rolls of 18x14, 20x20 No-See-Um, PetScreen, and aluminum spline tools for same-day dispatch.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SERVICE_AREAS.map((a, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="font-bold text-white text-xs sm:text-sm">{a.city}</div>
                  <div className="text-[11px] text-slate-400">{a.county}</div>
                  <div className="mt-1 text-[10px] text-cyan-400 font-medium">{a.distanceTier}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-white">Don't see your neighborhood?</div>
                <div className="text-[11px] text-slate-400">We travel within a 45-mile radius of Davenport.</div>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-3.5 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 font-semibold text-xs whitespace-nowrap transition-colors"
              >
                Call to Confirm
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
