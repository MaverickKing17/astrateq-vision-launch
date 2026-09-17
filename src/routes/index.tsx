import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { ShieldCheck, Eye, Cpu, ArrowRight, Loader2 } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

export default function Index() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-neutral-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-neutral-900">
        <div className="text-xl font-bold tracking-tight text-white">
          Astrateq<span className="text-neutral-500">.ai</span>
        </div>
        <a
          href="#waitlist"
          className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition"
        >
          Get Beta Access
        </a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          On-Device Vision Intelligence for iOS
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Real-Time Driver Awareness.<br />
          <span className="text-neutral-500">Zero Cloud Processing.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Astrateq uses high-frame-rate computer vision directly on your iPhone to track eye closure, gaze deflection, and fatigue — alerting you before microsleep happens.
        </p>

        {/* Waitlist Form */}
        <div id="waitlist" className="max-w-md mx-auto mb-16">
          {submitted ? (
            <div className="p-4 rounded-xl bg-neutral-900 border border-emerald-500/30 text-emerald-400 text-sm">
              You&apos;re on the VIP iOS TestFlight waitlist. We&apos;ll notify you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-neutral-950 border border-neutral-800 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-neutral-600 transition disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-xl hover:bg-neutral-200 transition flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Join Beta <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              {errorMessage && (
                <p className="text-xs text-rose-500 text-left px-1 mt-1">{errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900">
            <Cpu className="w-8 h-8 text-white mb-4" />
            <h3 className="text-lg font-bold mb-2">100% Local Inference</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Powered by Apple Neural Engine and Google MediaPipe. Video processing stays strictly on your physical device.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900">
            <Eye className="w-8 h-8 text-white mb-4" />
            <h3 className="text-lg font-bold mb-2">Micro-Sleep Detection</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Real-time Eye Aspect Ratio (EAR) mapping identifies eyelid drooping and head movement indicators instantly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900">
            <ShieldCheck className="w-8 h-8 text-white mb-4" />
            <h3 className="text-lg font-bold mb-2">Private & Anonymized</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              No video feeds are ever stored or uploaded to servers. Only optional, anonymized trip safety counts sync to Supabase.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-8 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Astrateq. Built for iOS.
      </footer>
    </div>
  );
}