import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, ArrowUp, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '../data/servicesData';

export const Footer: React.FC<{ onOpenEstimate: (serviceTitle?: string) => void }> = ({ onOpenEstimate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 text-sm">
      
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-cyan-900/40 via-blue-900/30 to-slate-950 border-b border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1 block">
              Central Florida's Screen &amp; Exterior Specialists
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to restore your pool enclosure?
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Get an accurate, free written quote or call Dwayne directly for urgent storm damage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenEstimate()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-cyan-600 hover:bg-cyan-500 shadow-xl shadow-cyan-600/25 transition-all cursor-pointer"
            >
              Get Free Estimate
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-emerald-300 bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">LESSANE</span>
                <span className="text-xs uppercase tracking-widest px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold ml-2">
                  Repairs
                </span>
                <div className="text-[11px] text-slate-400">Installations &bull; Rescreening &bull; Painting</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering Central Florida communities with flawless pool screen repairs, custom screen rooms, pool cage painting, and pressure washing. Dedicated to sustainable solutions and unmatched customer satisfaction.
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{BUSINESS_INFO.address} (Serving Central FL)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-emerald-300 font-semibold transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Repair Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenEstimate(s.title)}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Coverage Areas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICE_AREAS.slice(0, 7).map((a, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span>{a.city}, FL</span>
                  <span className="text-[10px] text-slate-500">{a.county}</span>
                </li>
              ))}
              <li className="text-[11px] text-cyan-400 pt-1 font-semibold">
                + Surrounding Central FL
              </li>
            </ul>
          </div>

          {/* Column 4: Quality Guarantee */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Promise
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Phifer® Made in USA screen mesh guaranteed against early UV rot.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Heavy duty commercial spline that stays locked in hurricane winds.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Licensed and fully insured specialty contractor.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Direct owner oversight by Dwayne Lessane on every job.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar with legal & back to top */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Lessane Installations and Repairs. All rights reserved. Davenport, FL 33897.
          </div>

          <div className="flex items-center gap-6">
            <span>Davenport &bull; Kissimmee &bull; Orlando</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
