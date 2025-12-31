import { personalInfo, skills } from "@/data/portfolio";

const About = () => {
  const allSkills = [
    ...skills.frontend,
    ...skills.frameworks,
    ...skills.uiLibraries,
    ...skills.tools,
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        <span className="numbered-heading">01.</span>
        About Me
      </h2>
      
      <div className="grid md:grid-cols-3 gap-12 mt-8">
        <div className="md:col-span-2 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.bio}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Here are a few technologies I've been working with recently:
          </p>
          
          <ul className="grid grid-cols-2 gap-2 mt-4">
            {allSkills.slice(0, 8).map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-sm">
                <span className="text-primary">▹</span>
                <span className="font-mono text-muted-foreground">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative group">
          <div className="relative z-10">
            <div className="aspect-square rounded-md overflow-hidden bg-primary/20 border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-primary/40">
                ARK
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-md border-2 border-primary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default About;
