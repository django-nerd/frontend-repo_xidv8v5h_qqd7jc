import React from 'react';
import { ShieldCheck, HeartHandshake } from 'lucide-react';

export default function FoundersPromise() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Founder’s Promise</h3>
          </div>
          <p className="max-w-2xl text-white/80">
            We obsess over outcomes. If you show up and do the work, you’ll build real AI products and skills you can use immediately. Our content is battle-tested and continuously updated.
          </p>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <HeartHandshake className="h-4 w-4 text-pink-400" />
            <span>Student-first, always.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
