export default function Office() {
  return (
    <section className="bg-[#E2A796] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-24">
          <div className="w-20 h-[1px] bg-[#5A3E36]/40 mb-10"></div>

          <h2 className="font-heading text-4xl md:text-5xl text-[#5A3E36] mb-8 leading-tight">
            A Calm, Grounding Space in Santa Monica
          </h2>

          <p className="text-[#5A3E36]/90 text-lg leading-relaxed">
            My office is designed to feel quiet, private, and supportive —
            a space where clients can slow down and feel at ease.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Image 1 */}
          <div className="overflow-hidden rounded-[200px] border border-[#5A3E36]/30">
            <img
              src="/office1.jpeg"
              alt="Office view"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-[200px] border border-[#5A3E36]/30">
            <img
              src="/office2.jpeg"
              alt="Office decor"
              className="w-full h-[420px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}







