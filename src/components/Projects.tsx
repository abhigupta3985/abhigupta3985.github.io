import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'SmartInventory',
      description:
        'A comprehensive inventory management system built with React and Firebase. Features real-time data synchronization, user authentication, and intuitive dashboard for managing stock levels and orders.',
      techStack: ['React', 'Chakra UI', 'Firebase', 'JavaScript'],
      image: 'https://appinventiv.com/wp-content/uploads/2017/01/A-Smart-Decision-Making-with-the-Inventory-Management-App-for-Your-Business-1.png',
      github: 'https://github.com/abhigupta3985/Smart-Inventory',
      live: 'https://smart-inventory-2025.netlify.app/',
    },
    {
      title: 'Booking.Pro',
      description:
        'A hotel booking platform with seamless user experience. Implements Firebase authentication, real-time availability checking, and responsive design for mobile and desktop users.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
      image: '/Booking.pro.png',
      github: 'https://github.com/jasminekeshari/Booking-Pro',
      live: 'https://bookingpro.netlify.app/',
    },
    {
      title: 'Medicare – Online Pharmacy Platform',
      description:
        'A responsive+online pharmacy platform to search and order medicines, upload prescriptions, and manage cart workflows. Includes secure authentication, real-time search, and multi-step checkout.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Firebase'],
      image: '/Medicare.png',
      github: 'https://github.com/abhigupta3985/Medicare',
      live: 'https://medicare-onlinepharmacy.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card bg-card rounded-xl border border-border card-shadow hover:border-primary transition-all duration-300 overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
            
              {/* <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div> */}

              <div className="relative overflow-hidden h-56 rounded-t-xl">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
</div>




              {/* Project Content */}
              <div className="p-6">
                <h3 className="project-title text-xl md:text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="project-description text-muted-foreground mb-4 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="project-tech-stack flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs md:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="project-github-link flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="project-deployed-link flex-1 gradient-primary hover:opacity-90"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
