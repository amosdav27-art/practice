import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X, Shield, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeaderProps {
  onOpenEstimate: (serviceTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Cost Calculator', href: '#calculator' },
    { label: 'Before & After', href: '#gallery' },
    { label: 'Screen Materials', href: '#materials' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About Dwayne', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 transition-all">
      {/* Top announcement & quick contact bar */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 py-2 px-4 text-xs font-normal">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-slate-300">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Central Florida Fast Dispatch
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Davenport, FL 33897 &bull; Orlando &bull; Kissimmee
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Mon-Sat 7am-7pm &bull; 24/7 Urgent Storm Damage
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/30 group-hover:scale-105 transition-transform">
              <div className="relative">
                {/* Custom screen mesh / shield graphic */}
                <Shield className="w-6 h-6 text-white" />
                <span className="absolute inset-0 flex items-center justify-center font-black text-[10px] text-cyan-950 font-mono tracking-tighter">
                  LR
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  LESSANE
                </span>
                <span className="text-xs uppercase tracking-widest px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">
                  Repairs
                </span>
              </div>
              <span className="text-[11px] text-slate-400 tracking-wide font-normal">
                Installations &bull; Rescreening &bull; Painting
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-white rounded-lg border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Dwayne</span>
            </a>
            <button
              onClick={() => onOpenEstimate()}
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-600/25 transition-all flex items-center gap-2 cursor-pointer hover:shadow-cyan-500/35 active:scale-98"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
              aria-label="Call Lessane Repairs"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Direct: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
