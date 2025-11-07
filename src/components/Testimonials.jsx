import React from 'react';

const quotes = [
  {
    name: 'Alya',
    text: 'The free Level 0 gave me clarity. Level 1 helped me launch my first AI micro-service in two weeks.',
  },
  {
    name: 'Rafi',
    text: 'Actionable and concise. Exactly what I needed to stop procrastinating and start building.',
  },
  {
    name: 'Nadia',
    text: 'Beautifully structured. The roadmap alone is worth it.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 text-white">
      <h2 className="mb-8 text-center text-3xl font-bold">What Students Say</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {quotes.map((q, idx) => (
          <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-white/80">“{q.text}”</p>
            <div className="mt-4 text-sm text-white/60">— {q.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
