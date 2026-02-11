export default function Support() {
  return (
    <section className="bg-[#E0A08F] py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">

        {/* Left Column (Intentional Empty Space) */}
        <div></div>

        {/* Right Column */}
        <div className="max-w-md">

          {/* Divider */}
          <div className="w-16 h-[1px] bg-[#5A3E36]/40 mb-8"></div>

          <h2 className="font-heading text-4xl md:text-5xl text-[#5A3E36] mb-10 leading-tight">
            You don’t have to hold it all together alone
          </h2>

          <ul className="space-y-6 text-[#5A3E36]/90 text-lg leading-relaxed">
            <li className="flex gap-4">
              <span className="text-[#5A3E36]">—</span>
              Feeling constantly overwhelmed or on edge
            </li>

            <li className="flex gap-4">
              <span className="text-[#5A3E36]">—</span>
              Burnout from years of pushing through
            </li>

            <li className="flex gap-4">
              <span className="text-[#5A3E36]">—</span>
              Carrying the impact of past experiences
            </li>
          </ul>

        </div>
      </div>
    </section>
  )
}


