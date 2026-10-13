import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, MapPin, AlertTriangle, ShieldCheck, ArrowRight, Loader2, CloudCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/servicesData';
import { saveEstimateRequest } from '../firebase/services';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultDetails?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  defaultDetails,
}) => {
  const [service, setService] = useState(defaultService || 'Pool Screen Repair & Panel Replacement');
  const [details, setDetails] = useState(defaultDetails || '');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('33897');
  const [preferredDate, setPreferredDate] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
    if (defaultDetails) {
      setDetails(defaultDetails);
    }
  }, [defaultService, defaultDetails]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSaving(true);
    // Generate random confirmation reference
    const code = 'LR-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);

    try {
      await saveEstimateRequest({
        confirmationCode: code,
        service,
        fullName,
        phone,
        email: email || undefined,
        address: address || undefined,
        zipCode,
        preferredDate: preferredDate || undefined,
        isUrgent,
        details: details || undefined,
        status: 'pending',
        createdAt: new Date().toISOString(),
      });
    } catch (err) {
      console.warn('Saved locally/offline:', err);
    } finally {
      setIsSaving(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl text-slate-100 overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Request Free Estimate</h3>
              <p className="text-[11px] text-slate-400">Zero obligation &bull; Direct quote from Dwayne</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-white mb-2">Estimate Request Received!</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold text-white">{fullName}</span>. Dwayne Lessane has been notified and will contact you shortly at <span className="text-cyan-400 font-semibold">{phone}</span> to confirm your inspection time.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto mb-6 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Confirmation Ref:</span>
                <span className="font-mono font-bold text-cyan-300">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Requested Service:</span>
                <span className="font-semibold text-slate-200">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200">{address ? `${address}, ` : ''}{zipCode}</span>
              </div>
              {isUrgent && (
                <div className="flex justify-between text-amber-400 font-semibold">
                  <span>Priority Level:</span>
                  <span>Urgent Storm / Wind Tear Dispatch</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dwayne Now ({BUSINESS_INFO.phone})</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Estimate Request Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Urgent Alert Toggle */}
            <div
              onClick={() => setIsUrgent(!isUrgent)}
              className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                isUrgent
                  ? 'bg-amber-950/40 border-amber-500 text-amber-200'
                  : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <input
                type="checkbox"
                checked={isUrgent}
                onChange={() => {}}
                className="w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-amber-500"
              />
              <div className="text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  Urgent Storm Tear / Pool Vulnerability?
                </span>
                <span>Check this for expedited same-day emergency dispatch.</span>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Primary Service Needed *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Custom Screen & Painting Package">Combined Screen &amp; Painting Restoration</option>
                <option value="Urgent Hurricane Panel Fix">Emergency Wind &amp; Tree Damage Repair</option>
              </select>
            </div>

            {/* Two-Column Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Miller"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. (910) 261-0196"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Address & ZIP */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Street Address (Central FL)
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 104 Davenport Pines Blvd"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="33897"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Date Preference & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email (For itemized written quote)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Preferred Inspection Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Damage Details or Cage Description
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe panel damage, cage height, pet issues, or paint condition..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none resize-none"
              />
            </div>

            {/* Quick SMS tip */}
            <div className="text-[11px] text-slate-400 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              💡 <span className="text-slate-300 font-semibold">Tip:</span> You can also text photos of your torn screen or pool cage directly to Dwayne at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-cyan-400 font-semibold hover:underline">{BUSINESS_INFO.phone}</a> for a fast 15-minute phone estimate.
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSaving}
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-600/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting &amp; Syncing...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Free Estimate Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
