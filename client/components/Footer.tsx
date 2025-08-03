import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-white p-2 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                  SK
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">SK Cleaning Services</h3>
                <p className="text-gray-300 text-sm">Your Partner for Pristine & Hygienic Spaces</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of professional deep cleaning and commercial cleaning services in Pune, PCMC, and surrounding IT Hubs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/why-choose-us" className="block text-gray-300 hover:text-white transition-colors">
                Why Choose Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2 text-gray-300">
              <div>Commercial Deep Cleaning</div>
              <div>Office Cleaning</div>
              <div>Industrial Cleaning</div>
              <div>Restaurant Cleaning</div>
              <div>IT Hub Cleaning</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">92094 47145</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">Pune, PCMC, IT Hubs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">24/7 Service Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 SK Cleaning Services. All rights reserved. Trusted by industry leaders including TATA.
          </p>
        </div>
      </div>
    </footer>
  );
}
