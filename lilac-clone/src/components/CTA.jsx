export default function CTA() {
  return (
    <section className="bg-[#EDE7DF] py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Thin Top Divider */}
        <div className="border-t border-[#5A3E36]/30 mb-16"></div>

        <h2 className="font-heading text-4xl md:text-5xl text-[#5A3E36] tracking-tight leading-tight mb-10">
          Ready to take the next step?
        </h2>

        <button className="text-sm tracking-[3px] text-[#5A3E36] border-b border-[#5A3E36] pb-1 transition-all duration-300 hover:opacity-60">
          SCHEDULE A CONSULTATION →
        </button>

      </div>
    </section>
  );
}

