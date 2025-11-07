import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      id: 'contact-github',
      icon: Github,
      label: 'GitHub',
      value: 'abhigupta3985',
      link: 'https://github.com/abhigupta3985',
      color: 'text-primary',
    },
    {
      id: 'contact-linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'abhishek-d-gupta',
      link: 'https://linkedin.com/in/abhishek-d-gupta',
      color: 'text-secondary',
    },
    {
      id: 'contact-email',
      icon: Mail,
      label: 'Email',
      value: 'abhigupta3985@gmail.com',
      link: 'mailto:abhigupta3985@gmail.com',
      color: 'text-accent',
    },
    {
      id: 'contact-phone',
      icon: Phone,
      label: 'Phone',
      value: '+91 9158029868',
      link: 'tel:+919158029868',
      color: 'text-primary',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly chat
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.id}
                id={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-6 rounded-xl border border-border card-shadow hover:border-primary hover:scale-105 transition-all duration-300 flex flex-col items-center gap-4 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-4 rounded-full bg-primary/10 ${contact.color} group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-1">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground break-words">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border card-shadow max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions.
            </p>
            <a
              href="mailto:abhigupta3985@gmail.com"
              className="inline-block px-8 py-3 gradient-primary hover:opacity-90 transition-opacity rounded-lg font-semibold glow"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
