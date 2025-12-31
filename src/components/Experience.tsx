import { experiences } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">
        <span className="numbered-heading">03.</span>
        Where I've Worked
      </h2>
      
      <div className="mt-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors duration-300">
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
              <Briefcase className="w-2.5 h-2.5 text-primary" />
            </div>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.title}{" "}
                  <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  {exp.duration} • {exp.location}
                </p>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5 text-xs">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
