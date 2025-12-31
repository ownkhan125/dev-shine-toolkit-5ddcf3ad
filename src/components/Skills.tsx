import { skills } from "@/data/portfolio";
import { Code, Layout, Palette, Database, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  { title: "Frontend", items: skills.frontend, icon: Code },
  { title: "Frameworks", items: skills.frameworks, icon: Layout },
  { title: "UI Libraries", items: skills.uiLibraries, icon: Palette },
  { title: "CMS", items: skills.cms, icon: Database },
  { title: "Tools", items: skills.tools, icon: Wrench },
  { title: "Learning", items: skills.learning, icon: Sparkles },
];

const Skills = () => {
  return (
    <section className="section-container bg-card/30">
      <h2 className="section-title">
        <span className="numbered-heading">02.</span>
        Skills & Technologies
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-card border border-border card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
