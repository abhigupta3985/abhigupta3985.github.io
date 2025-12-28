import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImg from "@/assets/Abhishek_Gupta_Photo.jpeg";


const Hero = () => {
  const handleResumeClick = () => {
    // Open in new tab
    window.open('/Abhishek-Gupta-Resume.pdf', '_blank');
    
    // Trigger download
    const link = document.createElement('a');
    link.href = '/Abhishek-Gupta-Resume.pdf';
    link.download = 'Abhishek-Gupta-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Right: Profile Image - First on mobile */}
          <div className="flex justify-center animate-slide-in-right md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img src={profileImg} alt="Abhishek Gupta"
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover object-[center_20%] card-shadow border border-border"

              />
            </div>
          </div>

          {/* Left: Text Content - Second on mobile */}
          <div className="animate-slide-in-left md:order-1">
            <h2 className="text-lg md:text-xl text-muted-foreground mb-2">
              Hi, I'm
            </h2>
            <h1
              id="user-detail-name"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text animate-gradient"
            >
              Abhishek Gupta
            </h1>
            <p
              id="user-detail-intro"
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6"
            >
              Full Stack Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl">
              Passionate about building scalable web applications with the MERN stack.
              Transforming ideas into elegant, user-friendly solutions with clean code
              and modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                id="resume-button-2"
                onClick={handleResumeClick}
                size="lg"
                className="gradient-primary hover:opacity-90 transition-opacity glow"
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/abhigupta3985"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abhishek-d-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:abhigupta3985@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
