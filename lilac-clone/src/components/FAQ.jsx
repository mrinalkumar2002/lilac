import { useState } from "react"

const faqs = [
  {
    q: "Who do you work with?",
    a: "I work with adults dealing with anxiety, trauma, burnout, perfectionism, and chronic stress.",
  },
  {
    q: "Do you offer telehealth?",
    a: "Yes. I provide secure online therapy for clients located anywhere in California.",
  },
  {
    q: "What is your approach to trauma therapy?",
    a: "Trauma work is paced carefully, with an emphasis on safety, stabilization, and nervous system regulation.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#E0A08F] py-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[#5A3E36] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5A3E36]/90 text-lg">
            In-person sessions are available in Santa Monica,
            with telehealth offered throughout California.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-[#5A3E36]/40">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#5A3E36]/40 py-8"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-2xl text-[#5A3E36] font-light">
                    {openIndex === index ? "−" : "+"}
                  </span>
                  <p className="text-2xl text-[#5A3E36] font-medium">
                    {faq.q}
                  </p>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#5A3E36]/90 text-lg leading-relaxed pl-10">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


