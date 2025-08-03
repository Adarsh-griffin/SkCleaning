import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 flex items-center justify-center font-display font-bold text-xl">
                SK
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                SK Cleaning Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              Contact Us
            </Link>
          </nav>

          {/* Action Icons and Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Phone Icon */}
            <button className="hidden sm:inline-flex p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
              <Phone className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Button size="sm" className="hidden lg:inline-flex bg-slate-900 hover:bg-slate-800 rounded-xl px-6">
              Get Quote
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
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
                className="block text-foreground hover:text-primary transition-colors font-medium text-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-foreground hover:text-primary transition-colors font-medium text-lg"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-foreground hover:text-primary transition-colors font-medium text-lg"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-3">
                  <button className="flex-1 flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Call
                  </button>
                  <Button className="flex-1 bg-slate-900 hover:bg-slate-800 rounded-xl">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
