import { Github, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-background/95 backdrop-blur-sm border-t border-glass-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-primary text-lg font-semibold text-foreground mb-2">
              Full Stack Developer
            </h3>
            <p className="font-secondary text-muted-foreground text-sm">
              Crafting modern web solutions near Frankfurt
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/h9rms" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              
            </a>
            
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-glass-border text-center">
          <p className="font-secondary text-sm text-muted-foreground">
            © {new Date().getFullYear()}. All rights reserved. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;