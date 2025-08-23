import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Users, BookOpen, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Scribs</h1>
              <p className="text-xs text-muted-foreground">Connecting • Empowering • Inspiring</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a 
              href="#mission" 
              className="text-card-foreground hover:text-primary transition-colors font-medium"
              aria-label="Learn about our mission"
            >
              Our Mission
            </a>
            <a 
              href="#stories" 
              className="text-card-foreground hover:text-primary transition-colors font-medium"
              aria-label="Read success stories"
            >
              Success Stories
            </a>
            <a 
              href="#volunteer" 
              className="text-card-foreground hover:text-primary transition-colors font-medium"
              aria-label="Volunteer opportunities"
            >
              Volunteer
            </a>
            <a 
              href="#contact" 
              className="text-card-foreground hover:text-primary transition-colors font-medium"
              aria-label="Contact us"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Find a Writer
            </Button>
            <Button variant="warm" size="sm">
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border/50">
            <div className="flex flex-col gap-4 pt-6">
              <a 
                href="#mission" 
                className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-5 h-5" />
                Our Mission
              </a>
              <a 
                href="#stories" 
                className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-5 h-5" />
                Success Stories
              </a>
              <a 
                href="#volunteer" 
                className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-5 h-5" />
                Volunteer
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                Contact
              </a>
              
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Button variant="outline" className="justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Find a Writer
                </Button>
                <Button variant="warm" className="justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;