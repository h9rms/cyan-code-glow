import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer near Frankfurt";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full particle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-30 max-w-4xl mx-auto text-center px-4">
        <div className="mb-8">
          <span className="text-4xl md:text-6xl font-bold text-foreground font-primary">Hi, I'm</span>
          <br />
          <span className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent font-primary">Harmandeep</span>
        </div>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-secondary min-h-[2rem]">
          <span className="typing-animation">{displayText}</span>
          <span className="animate-pulse">|</span>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-secondary leading-relaxed">
          Crafting exceptional digital experiences with modern technologies.
          <br />
          Specialized in React, Node.js, and cutting-edge web development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-medium transform hover:scale-105 transition-transform"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium transform hover:scale-105 transition-transform"
          >
            Get In Touch
          </Button>
        </div>

        {/* Floating code snippets */}
        <div className="absolute top-20 left-10 glass-morphism p-4 rounded-lg text-sm font-primary text-primary opacity-70 floating-animation hidden lg:block">
          <div>const developer = &#123;</div>
          <div className="ml-2">name: "Harmandeep",</div>
          <div className="ml-2">location: "Frankfurt"</div>
          <div>&#125;;</div>
        </div>

        <div className="absolute bottom-32 right-10 glass-morphism p-4 rounded-lg text-sm font-primary text-secondary opacity-70 floating-animation hidden lg:block" style={{ animationDelay: '2s' }}>
          <div>npm run build</div>
          <div className="text-green-400">✓ Build successful</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;