import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectsSection = () => {
  const featuredProject = {
    title: "Wanderlust Grid Blog",
    description: "A modern, responsive blog platform showcasing travel content with beautiful grid layouts and smooth animations. Built with React and modern web technologies.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    liveUrl: "https://wanderlust-grid-bloom.lovable.app/",
    githubUrl: "#",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lovable"],
    featured: true
  };

  const otherProjects = [
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and analytics with real-time data visualization.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      githubUrl: "#",
      status: "In Development"
    },
    {
      title: "Portfolio Website",
      description: "This very website! A modern, interactive portfolio with glassmorphism design and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/h9rms",
      status: "Live"
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      technologies: ["React", "Weather API", "CSS3", "Geolocation"],
      githubUrl: "#",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, featuring modern web applications built with cutting-edge technologies
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="glass-card glass-card-hover p-8 rounded-xl overflow-hidden relative">
            <div className="absolute top-6 right-6 z-10">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-400/30">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">Featured</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  {featuredProject.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 gradient-primary px-6 py-3 rounded-lg text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 neon-glow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={featuredProject.githubUrl}
                    className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg text-foreground border-primary/30 hover:border-primary/60 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              <div className="relative group">
                <div className="glass-card p-4 rounded-xl">
                  <img 
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="glass-card glass-card-hover p-6 rounded-xl group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                      : project.status === 'In Development'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.githubUrl}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <a 
              href="https://github.com/h9rms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-secondary px-8 py-4 rounded-lg text-secondary-foreground font-semibold hover:scale-105 transition-transform duration-300 purple-glow"
            >
              <Github className="w-5 h-5" />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
