import { useState } from 'react';
import { Mail, MapPin, ExternalLink, Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const {
        error
      } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });
      if (error) {
        throw error;
      }
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!"
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "The message could not be sent. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-primary">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-secondary">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-primary">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 rounded-lg border-primary/30">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold font-primary">Location</p>
                    <p className="text-muted-foreground font-secondary">Frankfurt, Germany</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 rounded-lg border-secondary/30">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold font-primary">Email</p>
                    <p className="text-muted-foreground font-secondary">hermsdevelopment@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upwork Integration */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-4 font-primary">
                Hire Me on Upwork
              </h3>
              <p className="text-muted-foreground mb-6 font-secondary">
                Looking for professional freelance services? I'm available for projects on Upwork with verified expertise and excellent client reviews.
              </p>
              <a 
                href="https://www.upwork.com/freelancers/~012c057ae41dd3b8ae" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-primary px-6 py-3 rounded-lg text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 neon-glow font-primary"
              >
                <ExternalLink className="w-4 h-4" />
                View Upwork Profile
              </a>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold font-primary">Available for Projects</span>
              </div>
              <p className="text-muted-foreground text-sm font-secondary">
                Currently accepting new projects and collaborations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-primary">
              Send a Message
            </h3>
            
            {isSubmitted ? <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2 font-primary">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground font-secondary">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
              </div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2 font-primary">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-secondary" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2 font-primary">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-secondary" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2 font-primary">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none font-secondary" placeholder="Tell me about your project..." />
                </div>

                <button type="submit" disabled={isLoading} className="w-full gradient-secondary py-4 rounded-lg text-secondary-foreground font-semibold hover:scale-105 transition-transform duration-300 purple-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-primary">
                  <Send className="w-5 h-5" />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};
export default ContactSection;