import React, { useCallback } from 'react';
import { Rocket, Play, Lock } from 'lucide-react';

const track = (name, params = {}) => {
  try {
    if (window.fbq) window.fbq('track', name, params);
  } catch (_) {}
};

const Card = ({ title, subtitle, action, onClick, variant = 'default' }) => {
  const base =
    'group relative flex flex-col justify-between rounded-xl border p-6 transition hover:shadow-xl min-h-[220px]';
  const styles = {
    default: `${base} border-white/10 bg-white/5 hover:bg-white/[0.08]`,
    highlight: `${base} border-yellow-500/40 bg-yellow-500/10 hover:bg-yellow-500/20`,
    disabled: `${base} border-white/10 bg-white/5 opacity-80`,
  };

  return (
    <div className={styles[variant]}>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{subtitle}</p>
      </div>
      <button
        onClick={onClick}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm transition group-hover:border-yellow-400 group-hover:bg-yellow-400/10"
      >
        {action.icon}
        <span>{action.label}</span>
      </button>
    </div>
  );
};

export default function Courses() {
  const openDialog = useCallback((id) => {
    const dialog = document.getElementById(id);
    if (dialog && dialog.showModal) dialog.showModal();
  }, []);

  const handleFreeVideos = () => {
    track('Lead', { content_name: 'AI Starter Pack Level 0' });
    openDialog('free-videos');
  };

  const handleLevel1 = () => {
    track('AddToCart', { content_name: 'AI Launchpad System Level 1' });
    window.open('https://jrgroup.my.id/course-level-1', '_blank');
  };

  return (
    <section id="courses" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Courses</h2>
          <p className="mt-2 text-white/70">Choose your path and start learning today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Level 0 · AI Starter Pack"
          subtitle="Free foundational videos to kickstart your journey."
          action={{ label: 'View Free Videos', icon: <Play className="h-4 w-4" /> }}
          onClick={handleFreeVideos}
          variant="highlight"
        />
        <Card
          title="Level 1 · AI Launchpad System"
          subtitle="Proven roadmap to ship your first AI product."
          action={{ label: 'Explore Level 1', icon: <Rocket className="h-4 w-4" /> }}
          onClick={handleLevel1}
        />
        <Card
          title="Level 2"
          subtitle="Advanced systems, distribution and scale."
          action={{ label: 'Coming Soon', icon: <Lock className="h-4 w-4" /> }}
          onClick={() => openDialog('coming-soon')}
        />
        <Card
          title="Level 3"
          subtitle="Mastery, team building, and enterprise-grade."
          action={{ label: 'Coming Soon', icon: <Lock className="h-4 w-4" /> }}
          onClick={() => openDialog('coming-soon')}
        />
      </div>

      {/* Free videos dialog */}
      <dialog id="free-videos" className="backdrop:bg-black/70 rounded-xl">
        <div className="max-h-[80vh] w-[90vw] max-w-5xl overflow-y-auto rounded-xl bg-zinc-950 p-6 text-white">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">AI Starter Pack · Free Videos</h3>
            <form method="dialog">
              <button className="rounded-md border border-white/20 px-3 py-1 text-sm hover:border-yellow-400">Close</button>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              'https://www.youtube.com/embed/dQw4w9WgXcQ',
              'https://www.youtube.com/embed/ysz5S6PUM-U',
              'https://www.youtube.com/embed/tgbNymZ7vqY',
              'https://www.youtube.com/embed/aqz-KE-bpKQ',
              'https://www.youtube.com/embed/oHg5SJYRHA0',
              'https://www.youtube.com/embed/jNQXAC9IVRw',
            ].map((src, i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-lg border border-white/10">
                <iframe
                  src={src}
                  title={`Free Video ${i + 1}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </dialog>

      {/* Coming soon dialog */}
      <dialog id="coming-soon" className="backdrop:bg-black/70 rounded-xl">
        <div className="w-[90vw] max-w-md rounded-xl bg-zinc-950 p-6 text-white">
          <h3 className="text-xl font-semibold">Coming Soon</h3>
          <p className="mt-2 text-white/70">
            We’re crafting the next levels to deliver the best experience. Stay tuned!
          </p>
          <div className="mt-4 text-right">
            <form method="dialog">
              <button className="rounded-md border border-white/20 px-3 py-1 text-sm hover:border-yellow-400">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}
