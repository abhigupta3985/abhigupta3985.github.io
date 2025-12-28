const Skills = () => {
  const techStack = [
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'Firebase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    },
    {
      name: 'Redux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
  ];

  const tools = [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
    {
      name: 'npm',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Skills & Tools
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Technologies I work with to build amazing web applications
        </p>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {techStack.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="skills-card bg-card p-6 rounded-xl border border-border card-shadow
                             transition-all duration-300 ease-out
                             hover:border-primary hover:bg-primary/5 hover:scale-105
                             flex flex-col items-center gap-3"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skills-card-img w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                  <p className="skills-card-name text-sm md:text-base font-medium text-center">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-secondary">
            Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="animate-fade-in"
                style={{ animationDelay: `${(techStack.length + index) * 0.1}s` }}
              >
                <div
                  className="
                    skills-card
                    bg-card
                    p-6
                    rounded-xl
                    border border-border
                    card-shadow
                    transition-all duration-300 ease-out
                    hover:border-secondary
                    hover:bg-secondary/5
                    hover:scale-105
                    flex flex-col
                    items-center
                    gap-3
                   "
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                  <p className="text-sm md:text-base font-medium text-center">
                    {tool.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
