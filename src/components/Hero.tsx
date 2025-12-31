import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-container pt-24">
      <div className="space-y-6 max-w-3xl">
        <p className="numbered-heading animate-fade-up">Hi, my name is</p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground animate-fade-up-delay-1">
          {personalInfo.name}.
        </h1>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground animate-fade-up-delay-2">
          I build things for the web.
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed animate-fade-up-delay-3">
          {personalInfo.bio}
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4 animate-fade-up-delay-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
