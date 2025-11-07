import React, { useCallback } from 'react';
import { PlayCircle, ShieldAlert, ArrowRight } from 'lucide-react';

const trackPixel = (eventName, params = {}) => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, params);
    }
  } catch (e) {
    // fail silently
  }
};

export default function Courses() {
  const handleLead = useCallback((label) => {
    trackPixel('Lead', { content_name: label });
  }, []);

  const handleAddToCart = useCallback((label) => {
    trackPixel('AddToCart', { content_name: label });
  }, []);

  return (
    <section id="courses" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Choose Your Path</h2>
        <p className="mt-3 text-white/70">Start free with Level 0, then scale with our AI Launchpad System.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Level 0 - Free */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <div className="mb-4 inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">Level 0 • Free</div>
          <h3 className="text-xl font-semibold text-white">AI Starter Pack</h3>
          <p className="mt-2 text-sm text-white/70">6 free videos to kickstart your journey.</p>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <div className="flex items-center gap-2"><PlayCircle size={16} className="text-white/60" /> Introduction to AI Landscape</div>
            <div className="flex items-center gap-2"><PlayCircle size={16} className="text-white/60" /> Prompting Fundamentals</div>
            <div className="flex items-center gap-2"><PlayCircle size={16} className="text-white/60" /> Building with No-Code Tools</div>
            <div className="flex items-center gap-2"><PlayCircle size={16} className="text-white/60" /> AI Automation Basics</div>
            <div className="flex items-center gap-2"><PlayCircle size={16} className="text-white/60" /> Monetization 101</div>
            <div className="flex items-center gap-2"><PlayCircle size={16} className="text-white/60" /> Next Steps & Roadmap</div>
          </div>
          <button
            onClick={() => handleLead('AI Starter Pack Level 0')}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-black transition hover:bg-yellow-300"
          >
            View Free Videos
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Level 1 */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <div className="mb-4 inline-flex items-center rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">Level 1</div>
          <h3 className="text-xl font-semibold text-white">AI Launchpad System</h3>
          <p className="mt-2 text-sm text-white/70">Your step-by-step framework to launch with AI.</p>
          <a
            href="https://jrgroup.my.id/course-level-1"
            onClick={() => handleAddToCart('AI Launchpad System Level 1')}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black transition hover:bg-yellow-300"
          >
            Continue & Payment
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Level 2 */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">Level 2</div>
          <h3 className="text-xl font-semibold text-white">Scale & Systems</h3>
          <p className="mt-2 text-sm text-white/70">Advanced systems and automations.</p>
          <a
            href="#coming-soon"
            onClick={(e) => { e.preventDefault(); const modal = document.getElementById('coming-soon'); if (modal) modal.showModal?.(); }}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
          >
            Coming Soon
          </a>
        </div>

        {/* Level 3 */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <div className="mb-4 inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">Level 3</div>
          <h3 className="text-xl font-semibold text-white">Pro & Mastery</h3>
          <p className="mt-2 text-sm text-white/70">High-level playbooks and scaling.</p>
          <a
            href="#coming-soon"
            onClick={(e) => { e.preventDefault(); const modal = document.getElementById('coming-soon'); if (modal) modal.showModal?.(); }}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
          >
            Coming Soon
          </a>
        </div>
      </div>

      {/* Free Level 0 Modal */}
      <dialog id="free-videos" className="backdrop:bg-black/70 rounded-xl max-w-3xl w-[90vw]">
        <div className="rounded-xl bg-zinc-900 p-6 text-white">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-lg font-semibold">AI Starter Pack • 6 Free Videos</h4>
            <button onClick={() => document.getElementById('free-videos').close()} className="rounded-md bg-white/10 px-2 py-1 text-sm hover:bg-white/20">Close</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-lg border border-white/10 p-3">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <PlayCircle size={16} /> Video {i}
                </div>
                <div className="mt-2 aspect-video w-full overflow-hidden rounded-md bg-black/40">
                  <iframe
                    title={`Free Video ${i}`}
                    src={`https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </dialog>

      {/* Coming Soon Modal */}
      <dialog id="coming-soon" className="backdrop:bg-black/70 rounded-xl max-w-lg w-[90vw]">
        <div className="rounded-xl bg-zinc-900 p-6 text-white">
          <h4 className="text-xl font-semibold">Coming Soon</h4>
          <p className="mt-2 text-white/70">Level 2 and Level 3 are on the way. Stay tuned!</p>
          <div className="mt-4 text-right">
            <button onClick={() => document.getElementById('coming-soon').close()} className="rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Close</button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
