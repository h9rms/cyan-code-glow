import { useState } from 'react';
import { Mail, MapPin, ExternalLink, Send, CheckCircle } from 'lucide-react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 rounded-lg border-primary/30">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Location</p>
                    <p className="text-muted-foreground">Frankfurt, Germany</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 rounded-lg border-secondary/30">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Email</p>
                    <p className="text-muted-foreground">developer@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upwork Integration */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Hire Me on Upwork
              </h3>
              <p className="text-muted-foreground mb-6">
                Looking for professional freelance services? I'm available for projects on Upwork with verified expertise and excellent client reviews.
              </p>
              <a href="#" className="inline-flex items-center gap-2 gradient-primary px-6 py-3 rounded-lg text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 neon-glow">
                <ExternalLink className="w-4 h-4" />
                View Upwork Profile
              </a>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for Projects</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently accepting new projects and collaborations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            
            {isSubmitted ? <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
              </div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none" placeholder="Tell me about your project..." />
                </div>

                <button type="submit" className="w-full gradient-secondary py-4 rounded-lg text-secondary-foreground font-semibold hover:scale-105 transition-transform duration-300 purple-glow flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
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