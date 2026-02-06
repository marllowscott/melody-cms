import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  console.log('CTA component rendering');
  return (
    <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center overflow-hidden bg-none md:bg-[url('/pre-footer.png')] bg-cover bg-center">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex items-center justify-center">
          <div className="max-w-4xl text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up delay-100">
              <span className="text-foreground">Ready to Elevate Your</span>
              <br />
              <span className="text-primary">Leadership Impact?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-full md:max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-up delay-200">
              Let's explore how we can support your leadership development and communication goals.
            </p>

            {/* CTAs */}
            <div className="flex justify-center opacity-0 animate-fade-up delay-300 mb-[10px]">
              <Button
                asChild
                size="lg"
                className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-7 py-6 group"
              >
                <Link to="/contact">
                  Request a Conversation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
