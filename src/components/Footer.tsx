import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        {/* Social Links - Mobile */}
        <div className="flex justify-center gap-6 mb-6 md:hidden">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/abdulrehman"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <p>Designed & Built by {personalInfo.name}</p>
          </a>
          <p className="font-mono text-xs text-muted-foreground/60 mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Social Links - Desktop Fixed */}
      <div className="hidden md:flex fixed bottom-0 left-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Email - Desktop Fixed */}
      <div className="hidden md:flex fixed bottom-0 right-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        <a
          href={`mailto:${personalInfo.email}`}
          className="font-mono text-xs link-hover [writing-mode:vertical-rl]"
        >
          {personalInfo.email}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
