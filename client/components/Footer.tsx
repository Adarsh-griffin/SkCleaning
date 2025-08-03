import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-white p-2 rounded-lg">
                <div className="w-6 h-6 flex items-center justify-center font-bold text-sm">
                  SK
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold">SK Cleaning Services</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your Partner for Pristine & Hygienic Spaces
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-right">
            <div className="flex items-center justify-end space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-gray-300 text-sm">92094 47145</span>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-gray-300 text-sm">Pune, PCMC & IT Hubs</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SK Cleaning Services. All rights reserved. Trusted by TATA.
          </p>
        </div>
      </div>
    </footer>
  );
}
