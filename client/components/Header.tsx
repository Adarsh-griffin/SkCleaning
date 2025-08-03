import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                SK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">SK Cleaning Services</span>
              <span className="text-sm text-muted-foreground">Your Partner for Pristine & Hygienic Spaces</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link to="/why-choose-us" className="text-foreground hover:text-primary transition-colors font-medium">
              Why Choose Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact Us
            </Link>
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              <span>92094 47145</span>
            </div>
            <Button className="hidden lg:inline-flex">
              Get Free Quote
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-accent"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-4">
              <Link
                to="/"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/why-choose-us"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Why Choose Us
              </Link>
              <Link
                to="/contact"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-primary font-semibold mb-4">
                  <Phone className="w-4 h-4" />
                  <span>92094 47145</span>
                </div>
                <Button className="w-full">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
