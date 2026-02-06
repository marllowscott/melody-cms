import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import React from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState('/roll-1.svg');

  useEffect(() => {
    const images = ['/roll-1.svg', '/roll-2.svg', '/roll-3.svg'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % 3;
      setCurrentImage(images[index]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const lines = [
    "Show up with confidence.",
    "Communicate with clarity.",
    "Lead with presence."
  ];
  const fullText = lines.join('\n');
  const [letterStates, setLetterStates] = useState<boolean[]>(() => new Array(fullText.length).fill(false));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setLetterStates(prev => {
          const newStates = [...prev];
          newStates[currentIndex] = true;
          return newStates;
        });
        setCurrentIndex(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (currentIndex === fullText.length) {
      const timer = setTimeout(() => {
        setLetterStates(new Array(fullText.length).fill(false));
        setCurrentIndex(0);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText.length]);

  return (
    <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl">
          <div className="max-w-4xl lg:mr-12 text-center md:text-left">
            {/* Main Headline */}
            <h1 className="hidden md:block text-4xl md:text-5xl lg:text-5xl font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up delay-100">
              <span className="text-foreground">Show up with confidence.</span>
              <br />
              <span className="text-primary">Communicate with clarity.</span>
              <br />
              <span className="text-foreground">Lead with presence.</span>
            </h1>

            <h1 className="block md:hidden text-3xl font-light leading-[0.95] mb-8 opacity-0 animate-fade-up delay-100">
              {lines.map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line.split('').map((char, charIndex) => {
                    const globalIndex = lines.slice(0, lineIndex).reduce((acc, l) => acc + l.length, 0) + charIndex;
                    return (
                      <span key={globalIndex} className={letterStates[globalIndex] ? 'text-primary font-bold' : 'text-foreground'}>
                        {char}
                      </span>
                    );
                  })}
                  {lineIndex < lines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-full md:max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-up delay-200">
              We support leaders, professionals and client-facing teams to communicate effectively in high-stakes environments — strengthening leadership communication, executive presence and professional visibility.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-center opacity-0 animate-fade-up delay-300 mb-[10px]">
              <Button
                asChild
                size="lg"
                className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-7 py-6 group"
              >
                <Link to="/contact">
                  Request a Conversation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg border-primary text-foreground hover:bg-secondary hover:text-foreground font-semibold text-lg px-8 py-6"
              >
                <Link to="/services">Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Desktop Inline Illustration */}
          <div className="hidden lg:flex relative w-[500px] h-auto mt-8 lg:mt-0 justify-center items-center">
            <img src={currentImage} className="w-full h-auto transition-subtle" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
