import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const TypewriterText = ({ text, className = "", as: Component = "p" }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState(text);
  const hasTypedRef = useRef(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTypedRef.current) {
          hasTypedRef.current = true;
          setDisplayedText('');
          const letters = text.split('');
          letters.forEach((letter, index) => {
            setTimeout(() => {
              setDisplayedText(prev => prev + letter);
            }, index * 50);
          });
        }
      },
      { threshold: 0.1 }
    );
    // Delay observation to avoid triggering on initial load
    const timer = setTimeout(() => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }, 100);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [text]);

  return (
    <Component ref={ref} className={className}>
      {displayedText}
    </Component>
  );
};

export default TypewriterText;