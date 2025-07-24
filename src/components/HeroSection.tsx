import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
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
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }} />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
      
      {/* Floating particles */}
      <div className="particles-container z-20">
        {[...Array(30)].map((_, i) => <div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${8 + Math.random() * 4}s`
      }} />)}
      </div>

      {/* Main content */}
      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-primary font-bold mb-6">
            <span className="block text-foreground mb-2">Hi,I'm</span>
            <span className="gradient-text text-6xl md:text-8xl">Hermann</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground h-8 font-primary">
            <span className="border-r-2 border-primary pr-1">
              {displayText}
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-secondary">
          Crafting exceptional digital experiences with modern technologies. 
          Specialized in React, Node.js, and cutting-edge web development.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button onClick={() => document.querySelector('#projects')?.scrollIntoView({
          behavior: 'smooth'
        })} className="glass-card glass-card-hover px-8 py-4 rounded-lg text-primary border-primary/30 hover:border-primary/60 transition-all duration-300 font-primary">
            View My Work
          </button>
          <button onClick={() => document.querySelector('#contact')?.scrollIntoView({
          behavior: 'smooth'
        })} className="gradient-primary px-8 py-4 rounded-lg text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 neon-glow font-primary">
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>

      {/* Code snippets floating */}
      <div className="absolute top-20 left-10 glass-card p-4 rounded-lg text-sm font-primary text-primary opacity-70 floating-animation hidden lg:block">
        <div>const developer = &#123;</div>
        <div className="ml-2">name: "Full Stack Dev",</div>
        <div className="ml-2">location: "Frankfurt"</div>
        <div>&#125;;</div>
      </div>

      <div className="absolute bottom-32 right-10 glass-card p-4 rounded-lg text-sm font-primary text-secondary opacity-70 floating-animation hidden lg:block" style={{
      animationDelay: '2s'
    }}>
        <div>npm run build</div>
        <div className="text-green-400">✓ Build successful</div>
      </div>
    </section>;
};
export default HeroSection;