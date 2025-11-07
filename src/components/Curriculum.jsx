import React from 'react';

const levels = [
  {
    title: 'AI Toolkit (Level 1)',
    desc: 'Curated AI tools & practical workflows to master your productivity.',
    cta: 'Explore Level 1',
    variant: 'outline',
  },
  {
    title: 'AI Architect (Level 2)',
    desc: 'Build intelligent systems and advanced automation workflows.',
    cta: 'Explore Level 2',
    variant: 'outline',
  },
  {
    title: 'The AI Entrepreneur (Level 3)',
    desc: "The founder's circle. Build custom solutions and monetize your skills.",
    cta: 'Apply for Level 3',
    variant: 'solid',
  },
];

const Card = ({ title, desc, cta, variant }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-[#D4AF37]/40 bg-[#0e0e0e] p-6 shadow-[0_0_0_1px_rgba(212,175,55,0.1)_inset] transition-transform duration-300 hover:-translate-y-1">
      <div>
        <h3 className="mb-2 text-xl font-semibold text-[#F5F5F5]">{title}</h3>
        <p className="text-sm text-[#F5F5F5]/80">{desc}</p>
      </div>
      <div className="mt-6">
        {variant === 'solid' ? (
          <a href="#apply" className="inline-block rounded-md bg-[#D4AF37] px-4 py-2 text-sm font-medium text-[#101010] transition-colors hover:bg-[#c8a12f] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60">
            {cta}
          </a>
        ) : (
          <a href="#levels" className="inline-block rounded-md border border-[#D4AF37] px-4 py-2 text-sm font-medium text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60">
            {cta}
          </a>
        )}
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-20 bg-gradient-to-b from-transparent to-[#D4AF37]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

const Curriculum = () => {
  return (
    <section id="curriculum" className="relative w-full bg-[#101010] py-20 text-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">The Path to Mastery. Curated by JR.</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {levels.map((lvl) => (
            <Card key={lvl.title} {...lvl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
