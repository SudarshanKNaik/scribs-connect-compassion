import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-card-foreground">Scribs</h3>
                <p className="text-muted-foreground">Connecting Hearts, Empowering Minds</p>
              </div>
            </div>
            <p className="text-card-foreground leading-relaxed max-w-md">
              We believe that education is a fundamental right that should be accessible to everyone, 
              regardless of visual ability. Through technology and human compassion, we're breaking 
              down barriers and building bridges to academic success.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-card-foreground">Quick Links</h4>
            <div className="space-y-3">
              <a 
                href="#mission" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Our Mission
              </a>
              <a 
                href="#stories" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Success Stories
              </a>
              <a 
                href="#volunteer" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Become a Volunteer
              </a>
              <a 
                href="#resources" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Resources
              </a>
              <a 
                href="#faq" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-card-foreground">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  123 Accessibility Avenue<br />
                  Inclusion City, IC 12345<br />
                  United Kingdom
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+441234567890" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +44 (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:hello@scribs.org" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@scribs.org
                </a>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h5 className="font-semibold text-card-foreground mb-2">Support Hours</h5>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Monday - Friday: 8AM - 8PM</div>
                <div>Saturday: 10AM - 6PM</div>
                <div>Sunday: 12PM - 4PM</div>
                <div className="text-accent-warm font-medium pt-1">Emergency support available 24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Scribs NGO. All rights reserved. Registered Charity No. 1234567
            </div>
            <div className="flex gap-6 text-sm">
              <a 
                href="#privacy" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#accessibility" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Accessibility Statement
              </a>
            </div>
          </div>
        </div>

        {/* Accessibility Notice */}
        <div className="mt-8 bg-gradient-soft rounded-xl p-6 border border-border/50">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent-warm/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-accent-warm" />
            </div>
            <div>
              <h5 className="font-semibold text-card-foreground mb-2">
                Accessibility Commitment
              </h5>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This website is designed with accessibility in mind and follows WCAG 2.1 AA guidelines. 
                We use high contrast colors, descriptive alt text, keyboard navigation support, and 
                screen reader compatibility. If you encounter any accessibility barriers, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;