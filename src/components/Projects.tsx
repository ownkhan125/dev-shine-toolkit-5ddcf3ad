import { projects } from "@/data/portfolio";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        <span className="numbered-heading">04.</span>
        Things I've Built
      </h2>
      
      {/* Featured Projects */}
      <div className="mt-12 space-y-24">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className={`relative grid md:grid-cols-12 gap-4 items-center ${
              index % 2 === 1 ? "md:text-right" : ""
            }`}
          >
            {/* Project Image/Preview */}
            <div
              className={`md:col-span-7 ${
                index % 2 === 1 ? "md:col-start-6" : ""
              }`}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <div className="aspect-video rounded-lg bg-secondary border border-border overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300">
                    <Folder className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                </div>
              </a>
            </div>
            
            {/* Project Content */}
            <div
              className={`md:col-span-6 md:absolute ${
                index % 2 === 1
                  ? "md:left-0 md:text-left"
                  : "md:right-0 md:text-right"
              }`}
            >
              <p className="numbered-heading mb-1">Featured Project</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {project.title}
                </a>
              </h3>
              
              <div className="relative z-10 p-6 rounded-lg bg-card border border-border shadow-lg mb-4">
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              
              <ul
                className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${
                  index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              
              <div
                className={`flex gap-4 ${
                  index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="mt-24">
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Other Noteworthy Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="p-6 rounded-lg bg-card border border-border card-hover flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>
                
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
