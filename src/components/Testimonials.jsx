import React from 'react';
import { Star } from 'lucide-react';

const Item = ({ name, role, quote }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <div className="mb-3 flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400" />
      ))}
    </div>
    <p className="text-white/90">“{quote}”</p>
    <div className="mt-4 text-sm text-white/60">— {name}, {role}</div>
  </div>
);

export default function Testimonials() {
  const data = [
    {
      name: 'Nadia',
      role: 'Product Designer',
      quote: 'The lessons are crisp and immediately actionable. Landed a freelance AI project in 3 weeks.',
    },
    {
      name: 'Rafi',
      role: 'Software Engineer',
      quote: 'Level 1 gave me the structure I was missing. Finally shipped my first AI micro-SaaS.',
    },
    {
      name: 'Dina',
      role: 'Entrepreneur',
      quote: 'Beautiful production quality and the community support is gold.',
    },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <h3 className="mb-8 text-2xl font-semibold">What Students Say</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.map((t, i) => (
          <Item key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
