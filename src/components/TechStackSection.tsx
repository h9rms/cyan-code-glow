import { ExternalLink, Star } from 'lucide-react';
const TechStackSection = () => {
  const modernTools = [{
    name: "Lovable",
    description: "AI-powered web development platform",
    category: "Development",
    color: "from-pink-500 to-violet-500",
    featured: true
  }, {
    name: "Supabase",
    description: "Open source Firebase alternative",
    category: "Backend",
    color: "from-green-500 to-emerald-500",
    featured: true
  }, {
    name: "Bolt",
    description: "Full-stack web development platform",
    category: "Development",
    color: "from-blue-500 to-cyan-500",
    featured: true
  }, {
    name: "Cursor",
    description: "AI-powered code editor",
    category: "Editor",
    color: "from-purple-500 to-pink-500",
    featured: false
  }, {
    name: "Windsurf",
    description: "Modern development environment",
    category: "Tools",
    color: "from-orange-500 to-red-500",
    featured: false
  }, {
    name: "React",
    description: "Frontend JavaScript library",
    category: "Frontend",
    color: "from-cyan-500 to-blue-500",
    featured: true
  }];
  const coreSkills = [{
    name: "React",
    icon: "⚛️"
  }, {
    name: "TypeScript",
    icon: "🔷"
  }, {
    name: "Node.js",
    icon: "🟢"
  }, {
    name: "Python",
    icon: "🐍"
  }, {
    name: "Tailwind CSS",
    icon: "🎨"
  }, {
    name: "JavaScript",
    icon: "📜"
  }, {
    name: "Git",
    icon: "📝"
  }, {
    name: "HTML5",
    icon: "🌐"
  }];


  return <section id="tech" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-primary">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-secondary">
            Modern tools and technologies I use to build exceptional digital experiences
          </p>
        </div>

        {/* Modern Tools Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-primary">
            Modern Development Tools
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => <div key={index} className="glass-card glass-card-hover p-6 rounded-xl group relative overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                {tool.featured && <div className="absolute top-4 right-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>}
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} p-3 mb-4 flex items-center justify-center`}>
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-foreground mb-2 font-primary">
                    {tool.name}
                  </h4>
                  
                  <span className="inline-block px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3 font-primary">
                    {tool.category}
                  </span>
                  
                  <p className="text-muted-foreground text-sm font-secondary">
                    {tool.description}
                  </p>
                </div>
                
                {/* Hover effect gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>)}
          </div>
        </div>

        {/* Core Skills */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-primary">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {coreSkills.map((skill, index) => <div key={index} className="glass-card glass-card-hover p-4 rounded-xl text-center group animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-foreground font-primary">
                  {skill.name}
                </span>
              </div>)}
          </div>
        </div>

        {/* Experience Stats */}
        
      </div>
    </section>;
};
export default TechStackSection;