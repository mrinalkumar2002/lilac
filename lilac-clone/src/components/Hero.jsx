import "./Hero.css" 

export default function Hero() {
  return (
    <section className="sunset-hero min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center fade-in-image">
          <div className="sunset-circle">
            <img
              src="/Dr. Maya Reynolds.png"
              alt="Warm therapy space"
              className="sunset-img"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-lg">
          <h1 className="sunset-hero-heading fade-in fade-delay-1">
            Find calm
            <br />
            in the warmth
            <br />
            of understanding.
          </h1>

          <p className="sunset-hero-text fade-in fade-delay-2">
            Gentle, trauma-informed therapy for anxiety,
            burnout, and emotional overwhelm.
          </p>

          <button className="sunset-btn fade-in fade-delay-3">
            BOOK A CONSULT →
          </button>
        </div>

      </div>
    </section>
  );
}


