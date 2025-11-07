import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', className: 'nav-link home' },
    { name: 'About', href: '#about', className: 'nav-link about' },
    { name: 'Skills', href: '#skills', className: 'nav-link skills' },
    { name: 'Projects', href: '#projects', className: 'nav-link projects' },
    { name: 'Contact', href: '#contact', className: 'nav-link contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <nav
      id="nav-menu"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl font-bold gradient-text">
            &lt;AG /&gt;
          </a>

          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${link.className} text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors relative group`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <ThemeToggle />
            <Button
              onClick={handleResumeClick}
              className="nav-link resume gradient-primary hover:opacity-90 transition-opacity"
              id="resume-button-1"
            >
              Resume
            </Button>
          </div>

          

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${link.className} text-base text-muted-foreground hover:text-foreground transition-colors px-2 py-1`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={handleResumeClick}
                className="nav-link resume gradient-primary hover:opacity-90 transition-opacity w-full"
                id="resume-button-1"
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
