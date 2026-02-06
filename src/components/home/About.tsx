import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Schema.org JSON-LD for Person
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Melody",
  "jobTitle": "Communication Coach",
  "description": "Professional communication coach helping executives and entrepreneurs enhance their communication skills.",
  "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  "url": window.location.href,
  "sameAs": [
    "https://www.linkedin.com/in/melody-chipo-njanji-makuwaza-65b1782a",
    "https://www.facebook.com/DialoguesWithMel",
    "https://www.instagram.com/dialogueswithmel/"
  ]
};

const About = () => {
  // Add JSON-LD to document head
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(personSchema);
    document.head.appendChild(script);
  }

  return (
    <section
      className="py-24 bg-[url('/after-hero.png')] md:bg-secondary"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative mt-[90px]" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <div className="rounded-lg overflow-hidden h-full">
              <img
                src="/melody.png"
                alt="Melody, professional communication coach, helping professionals enhance their speaking skills"
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="1000"
                itemProp="contentUrl"
              />
            </div>
            {/* Accent Block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="text-center md:text-left mt-[77px] md:mt-0">
            <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">OUR APPROACH</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight break-words">
              Addressing the Gap in <span className="text-primary">Leadership Communication</span>
            </h1>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Many capable leaders don't struggle because they lack competence. They struggle because their message doesn't land, their presence is underestimated or confidence wavers when it matters most.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We address that gap. We are a leadership consultancy specialising in human skills development solutions. Our work strengthens how leaders communicate, show up and influence, particularly where clarity, confidence and credibility are critical.
              </p>
              <div className="text-lg text-muted-foreground leading-relaxed mb-8">
                Leadership communication<br />
                Executive presence<br />
                Public speaking for leaders<br />
                Leadership visibility<br />
                Confidence under pressure
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-border text-foreground hover:bg-secondary hover:text-foreground font-semibold text-lg px-8 py-6"
            >
              <Link to="/services">
                Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
