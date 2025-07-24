import { Calendar, Code, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const timeline = [
    {
      year: "2022",
      title: "Started Coding Journey",
      description: "Began learning web development with HTML, CSS, and JavaScript",
      icon: Code
    },
    {
      year: "2023", 
      title: "Frontend Mastery",
      description: "Mastered React, TypeScript, and modern frontend frameworks",
      icon: GraduationCap
    },
    {
      year: "2024",
      title: "Full Stack Development",
      description: "Expanded to backend with Node.js, databases, and cloud services",
      icon: Briefcase
    },
    {
      year: "2025",
      title: "AI-Powered Development",
      description: "Embracing AI tools and modern development workflows",
      icon: Calendar
    }
  ];

  const skills = [
    { name: "React/TypeScript", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 80 },
    { name: "CSS/Tailwind", level: 95 },
    { name: "Git/GitHub", level: 90 }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-primary mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-secondary leading-relaxed">
            Driven by curiosity and powered by code. Here's my journey in the world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold font-primary mb-8 text-foreground">My Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold font-primary text-foreground">{item.title}</h3>
                      <span className="text-sm text-muted-foreground font-secondary">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground font-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold font-primary mb-6 text-foreground">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium font-secondary text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground font-secondary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 transform origin-left"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 glass-morphism p-6 rounded-xl hover:shadow-elevated transition-all duration-300">
              <h4 className="text-xl font-semibold font-primary mb-4 text-foreground">
                Currently Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                {["AI Engineering", "Machine Learning", "Cloud Architecture"].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-secondary hover:bg-accent/30 hover:scale-105 transition-all duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;