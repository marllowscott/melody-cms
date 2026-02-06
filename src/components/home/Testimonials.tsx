const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Melody transformed my career. I went from dreading presentations to actively seeking speaking opportunities.",
      name: "Sarah Chen",
      title: "VP of Marketing, TechCorp",
    },
    {
      quote: "Melody has a rare gift for identifying exactly what's holding you back and giving you the tools to break through.",
      name: "Marcus Johnson",
      title: "Startup Founder",
    },
    {
      quote: "After just three sessions, I secured my biggest contract ever. The confidence I gained was immediately visible to my clients.",
      name: "Elena Rodriguez",
      title: "Senior Consultant",
    },
  ];

  return (
    <section className="py-24 bg-secondary relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center hidden md:block" style={{ backgroundImage: 'url(/voices-of-transformation.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">CLIENT STORIES</p>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-6 text-center md:text-left">
            Voices of Transformation
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-8 border-2 border-primary/20 hover:border-primary/80 transition-all duration-300 relative text-center animate-border-flash"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-6xl font-bold text-primary animate-number-flash">{index + 1}</div>
              </div>
              <p className="text-lg text-primary leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
