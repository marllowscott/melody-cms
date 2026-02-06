import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Leadership Communication & Executive Presence",
      description: "Strengthen how leaders communicate and show up in high-stakes environments. Ideal for executives and senior leaders.",
    },
    {
      title: "Public Speaking for Leaders",
      description: "Master the art of delivering impactful presentations and speeches. Ideal for leaders who need to influence and inspire audiences.",
    },
    {
      title: "Confident Communication for Client-Facing Teams",
      description: "Build confidence and presence in client interactions. Ideal for professionals in sales, consulting, and customer service.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">OUR WORK</p>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-6">
            Practical, Application-Driven Programmes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our programmes are practical, application-driven and tailored to organisational context. Delivered through workshops, coaching and speaking, they are designed for immediate and sustained impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-8 border border-primary md:border-primary/20 md:border-2 hover:border-primary/80 transition-all duration-300 text-center animate-border-flash"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-6xl font-bold text-primary animate-number-flash">{index + 1}</div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-primary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 group"
          >
            <Link to="/services">
              Our Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
