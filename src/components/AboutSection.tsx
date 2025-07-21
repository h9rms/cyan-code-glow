import { Calendar, Code, Zap, Target } from 'lucide-react';
const AboutSection = () => {
  const timeline = [{
    year: "2022",
    title: "Started Coding Journey",
    description: "Began learning web development with HTML, CSS, and JavaScript",
    icon: Code
  }, {
    year: "2023",
    title: "Frontend Mastery",
    description: "Mastered React, TypeScript, and modern frontend frameworks",
    icon: Zap
  }, {
    year: "2024",
    title: "Full Stack Development",
    description: "Expanded to backend with Node.js, databases, and cloud services",
    icon: Target
  }];
  const skills = [{
    name: "React/TypeScript",
    level: 95
  }, {
    name: "Node.js",
    level: 85
  }, {
    name: "JavaScript",
    level: 95
  }, {
    name: "Python",
    level: 80
  }, {
    name: "CSS/Tailwind",
    level: 95
  }, {
    name: "Git/GitHub",
    level: 90
  }];
  return <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">A passionate developer near Frankfurt, Germany, dedicated to creating exceptional digital experiences with cutting-edge technologies.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              My Journey
            </h3>
            
            {timeline.map((item, index) => <div key={index} className="glass-card glass-card-hover p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="glass-card p-3 rounded-lg border-primary/30">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <div className="h-px bg-gradient-primary flex-1"></div>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Code className="w-6 h-6 text-secondary" />
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => <div key={index} className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-semibold">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out" style={{
                  width: `${skill.level}%`,
                  animation: `slideIn 1.5s ease-out ${index * 0.2}s both`
                }} />
                  </div>
                </div>)}
            </div>

            <div className="glass-card p-6 rounded-xl mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Currently Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "GraphQL", "Next.js"].map(tech => <span key={tech} className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm">
                    {tech}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default AboutSection;