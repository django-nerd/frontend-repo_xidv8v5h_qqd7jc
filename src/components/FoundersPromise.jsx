import React from 'react';

const FoundersPromise = () => {
  return (
    <section id="promise" className="relative w-full bg-[#EAEAEA] text-[#101010]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        {/* Founder image placeholder */}
        <div className="relative overflow-hidden rounded-xl border border-[#D4AF37]/40 bg-white shadow-sm">
          <div className="aspect-[4/5] w-full bg-gradient-to-br from-neutral-200 to-neutral-100" />
          <div className="absolute bottom-3 right-3 rounded-md bg-[#101010] px-3 py-1 text-xs text-[#F5F5F5]">Javier Regan</div>
        </div>

        {/* Message */}
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">A Message from Javier Regan.</h2>
          <p className="mb-6 text-base leading-relaxed text-neutral-800">
            Di JR AICADEMY, Anda tidak belajar dari logo. Anda belajar langsung dari saya dan tim yang saya kurasi. Visi saya sederhana: mengubah Anda dari pengamat pasif menjadi arsitek aktif di revolusi AI ini.
          </p>
          {/* Signature */}
          <div className="mt-8 inline-block">
            <div className="select-none font-serif text-2xl italic text-[#101010]">Javier Regan</div>
            <div className="h-[2px] w-full bg-gradient-to-r from-[#D4AF37] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersPromise;
