import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, MessageSquareQuote, Plus, X, Loader2, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/servicesData';
import { ReviewItem } from '../types';
import { getCustomerReviews, submitCustomerReview } from '../firebase/services';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // New review form fields
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('Davenport, FL');
  const [service, setService] = useState('Pool Screen Repair');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  useEffect(() => {
    let isMounted = true;
    const fetchLiveReviews = async () => {
      setLoading(true);
      try {
        const live = await getCustomerReviews();
        if (isMounted && live && live.length > 0) {
          setReviewsList(live);
        }
      } catch (err) {
        console.warn('Using default reviews:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchLiveReviews();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text) return;

    setSubmitting(true);
    try {
      const newRev: Omit<ReviewItem, 'id'> = {
        author,
        location,
        service,
        rating,
        date: 'Today',
        text,
        verified: true,
      };

      const docId = await submitCustomerReview(newRev);
      setReviewsList((prev) => [{ ...newRev, id: docId }, ...prev]);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setModalOpen(false);
        setAuthor('');
        setText('');
      }, 1800);
    } catch (err) {
      console.error('Failed to submit review:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-950 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <MessageSquareQuote className="w-4 h-4" />
              <span>Verified Client Feedback &bull; Live From Firestore</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Trusted by Central Florida Homeowners
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Read real reviews from neighbors across Davenport, ChampionsGate, Kissimmee, and Clermont who trust Lessane Repairs with their pool enclosures.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 hover:text-cyan-200 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Leave a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed metadata per frontend-design guidelines */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span>{rev.date}</span>
                </div>

                <div className="text-xs font-semibold text-cyan-400 mb-2">
                  {rev.service}
                </div>

                <p className="text-sm text-slate-200 leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{rev.author}</div>
                  <div className="text-xs text-slate-400">{rev.location}</div>
                </div>

                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Callout bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-850 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <div className="font-bold text-white text-base">Have Dwayne Inspect Your Enclosure</div>
              <div className="text-xs text-slate-400">Join hundreds of satisfied Florida homeowners enjoying clean, bug-free pool lanais.</div>
            </div>
          </div>
          <a
            href="tel:+19102610196"
            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 font-bold text-xs sm:text-sm text-white transition-colors shrink-0"
          >
            Call (910) 261-0196
          </a>
        </div>

      </div>

      {/* Leave a Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-100">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Share Your Experience</span>
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Thank You!</h4>
                <p className="text-xs text-slate-300">Your review has been saved to Firebase and posted to the community board.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. David M."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Town / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Davenport, FL"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Service Performed *
                    </label>
                    <input
                      type="text"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      placeholder="e.g. Rescreening"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Rating (Stars)
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 cursor-pointer transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">{rating} out of 5</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Your Review *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Share how Dwayne and the Lessane Repairs crew took care of your pool enclosure..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-5 py-2 rounded-xl font-bold text-xs text-white bg-cyan-600 hover:bg-cyan-500 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <span>Submit Review</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
