export default function Services() {
  const services = [
    {
      title: "Anxiety & Overthinking",
      img: "/overthinking.jpg",
    },
    {
      title: "Trauma & EMDR Therapy",
      img: "/OIP.webp",
    },
    {
      title: "Burnout & High-Achieving Professionals",
      img: "/high Achievers-1.webp",
    },
  ]

  return (
    <section className="bg-[#E0A08F] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {services.map((service) => (
          <div
            key={service.title}
            className="border border-[#5A3E36]/40 p-12 flex flex-col justify-between bg-transparent"
          >
            <div>
              <h3 className="font-heading text-2xl text-[#5A3E36] mb-6">
                {service.title}
              </h3>

              <p className="text-[#5A3E36]/90 text-base leading-relaxed">
                Thoughtful, evidence-based therapy grounded in emotional and
                nervous-system awareness.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}





