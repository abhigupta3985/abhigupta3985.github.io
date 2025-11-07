import { Button } from '@/components/ui/button';
import { GraduationCap, Code2, Sparkles } from 'lucide-react';

const About = () => {
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
    <section id="about" className="about section py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Get to know more about my journey and skills
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://github.com/abhigupta3985.png"
                alt="Profile"
                className="relative rounded-2xl w-full max-w-md object-cover card-shadow border border-border"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card p-6 rounded-xl border border-border card-shadow hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    <strong>MSc in Mathematics</strong> - Successfully transitioned into
                    Full Stack Development through intensive training at Masai School
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border card-shadow hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Code2 className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    <strong>1200+ hours of coding</strong> experience at Masai School,
                    specializing in MERN stack development and modern web technologies
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border card-shadow hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Sparkles className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Passion</h3>
                  <p className="text-muted-foreground">
                    Dedicated to writing <strong>clean, maintainable code</strong> and
                    building scalable applications. Love solving complex problems and
                    creating intuitive user experiences with Firebase and React
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                id="resume-link-1"
                onClick={handleResumeClick}
                size="lg"
                className="gradient-primary hover:opacity-90 transition-opacity w-full md:w-auto"
              >
                View Full Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
