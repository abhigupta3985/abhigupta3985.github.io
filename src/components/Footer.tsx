import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          {/* <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="text-primary fill-primary" size={16} />
            <span>by Abhishek Gupta</span>
          </div> */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
