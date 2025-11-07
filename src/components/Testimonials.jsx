import React from 'react';
import { Star } from 'lucide-react';

const data = [
  {
    quote:
      "JR's method shifted me from tinkering to shipping real AI automations. I doubled my client output in 60 days.",
    name: 'Alif — Automation Consultant',
  },
  {
    quote:
      'I went from prompt-dabbling to building an internal AI assistant that saved our team 20+ hours/week.',
    name: 'Nadia — Product Manager',
  },
  {
    quote:
      'Level 3 gave me founder-level thinking. I launched my first AI micro-SaaS with paying users.',
    name: 'Rizky — Indie Hacker',
  },
  {
    quote:
      'The curriculum is brutally practical. You will build, not just watch.',
    name: 'Dion — Engineer',
  },
];

const TestimonialCard = ({ quote, name }) => (
  <div className="relative h-full rounded-xl border border-[#D4AF37]/30 bg-[#0f0f0f] p-6 text-[#F5F5F5]">
    <div className="mb-3 flex items-center gap-1 text-[#D4AF37]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
      ))}
    </div>
    <p className="mb-4 text-sm text-[#F5F5F5]/90">“{quote}”</p>
    <div className="text-xs text-[#F5F5F5]/70">{name}</div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-[#101010] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-center text-3xl font-semibold text-[#F5F5F5] md:text-4xl">
          What They Say About JR's Method.
        </h2>

        {/* Simple carousel using CSS scroll-snap */}
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
          {data.map((t, idx) => (
            <div key={idx} className="min-w-[85%] snap-start md:min-w-0">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
