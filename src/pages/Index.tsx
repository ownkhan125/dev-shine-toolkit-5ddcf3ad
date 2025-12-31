import { Helmet } from "react-helmet-async";
import { personalInfo } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | Frontend Developer</title>
        <meta
          name="description"
          content={`${personalInfo.name} - Frontend Developer specializing in React, Next.js, and TypeScript. ${personalInfo.bio}`}
        />
        <meta
          name="keywords"
          content="Frontend Developer, React Developer, Next.js, TypeScript, Web Developer, Abdul Rehman Khanzada"
        />
        <meta property="og:title" content={`${personalInfo.name} | Frontend Developer`} />
        <meta property="og:description" content={personalInfo.bio} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://abdulrehman.dev" />
      </Helmet>

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
