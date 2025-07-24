import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Zap, Star } from 'lucide-react';
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
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Holographic Background Animation */}
      <div className="absolute inset-0 holographic-bg opacity-30" />
      
      {/* Enhanced Particle System */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => <div key={i} className="absolute particle opacity-80" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 6}s`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`
      }} />)}
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary/20 rounded-lg rotate-45 neon-border opacity-30" />
        <div className="absolute bottom-32 right-20 w-48 h-48 border border-secondary/20 rounded-full neon-purple-glow opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-accent/30 rounded-lg rotate-12 opacity-40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 max-w-6xl mx-auto text-center px-4">
        
        {/* Floating Status Badge */}
        <div className="mb-8 inline-flex items-center gap-2 glass-morphism px-4 py-2 rounded-full border border-primary/30 neon-glow">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary font-primary">Available for freelance work</span>
        </div>

        {/* Main Title */}
        <div className="mb-8 space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-primary leading-none">
            <span className="block text-foreground/90">Hi, I'm</span>
            <span className="block holographic-text">Hermann</span>
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div className="mb-8">
          <div className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-secondary mb-4 min-h-[3rem] flex items-center justify-center">
            <span className="typing-animation">{displayText}</span>
            <span className="animate-pulse text-primary ml-1">|</span>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground font-secondary leading-relaxed mb-6">
            Crafting exceptional digital experiences with modern technologies.
            <br />
            Specialized in React, Node.js, and cutting-edge web development.
          </p>
          
          {/* Tech Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'AI Integration'].map(tech => <span key={tech} className="glass-morphism px-4 py-2 rounded-full text-sm font-medium text-primary border border-primary/20 hover:neon-glow transition-all duration-300 hover:scale-105">
                {tech}
              </span>)}
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth'
        })} className="group relative overflow-hidden bg-transparent border-2 border-primary text-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg neon-glow hover:neon-glow-intense transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })} className="group glass-morphism border-primary/30 text-foreground hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg hover:glass-intense transition-all duration-300">
            <span className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Get In Touch
            </span>
          </Button>
        </div>

        {/* Scroll Indicator */}
        
      </div>

      {/* Enhanced Floating Code Elements */}
      <div className="absolute top-20 left-10 glass-intense p-6 rounded-xl text-sm font-primary text-primary opacity-80 floating-animation hidden xl:block border border-primary/20 neon-glow">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-muted-foreground">Senior Developer</span>
        </div>
        <div className="font-mono">
          <div className="text-secondary">const</div>
          <div className="ml-2">developer = &#123;</div>
          <div className="ml-4 text-foreground">name: <span className="text-green-400">"Hermann"</span>,</div>
          <div className="ml-4 text-foreground">location: <span className="text-green-400">"Frankfurt"</span>,</div>
          <div className="ml-4 text-foreground">skills: <span className="text-yellow-400">["React", "Node.js"]</span></div>
          <div className="ml-2">&#125;;</div>
        </div>
      </div>

      <div className="absolute bottom-32 right-10 glass-intense p-6 rounded-xl text-sm font-primary text-secondary opacity-80 floating-animation hidden xl:block border border-secondary/20 neon-purple-glow" style={{
      animationDelay: '2s'
    }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-muted-foreground">Build Status</span>
        </div>
        <div className="font-mono">
          <div className="text-muted-foreground">$ npm run build</div>
          <div className="text-green-400 flex items-center gap-1 mt-1">
            ✓ Build successful
            <span className="text-xs text-muted-foreground">(2.3s)</span>
          </div>
          <div className="text-cyan-400 text-xs mt-2">Ready for deployment 🚀</div>
        </div>
      </div>

      {/* Additional Floating Element */}
      <div className="absolute top-1/3 right-20 glass-morphism p-4 rounded-lg text-xs font-primary text-accent opacity-60 floating-animation hidden lg:block border border-accent/20" style={{
      animationDelay: '4s'
    }}>
        <div className="font-mono">
          <div className="text-primary">// Innovation</div>
          <div className="text-foreground">creativity++;</div>
        </div>
      </div>
    </section>;
};
export default HeroSection;