import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  // Add your actual social media links here
  const socialLinks = {
    facebook: "https://facebook.com/erivinscompany", // Replace with your actual Facebook page
    instagram: "https://instagram.com/erivinscompany", // Replace with your actual Instagram
    twitter: "https://twitter.com/erivinscompany", // Replace with your actual Twitter/X
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
              & Erivins Company
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+254727937070" 
              className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span className="font-medium">(254) 727-9370</span>
            </a>
            <div className="flex items-center space-x-2">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Visit our Twitter profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-accent ${
                    isActive(link.path) ? "text-accent" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <a 
                  href="tel:+254727937070" 
                  className="flex items-center space-x-2 text-sm mb-3 hover:text-accent transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="font-medium">(254) 727-9370</span>
                </a>
                <div className="flex items-center space-x-3">
                  <a 
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Visit our Instagram profile"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Visit our Twitter profile"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;