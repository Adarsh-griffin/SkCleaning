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
              <div className=" text-white p-2 rounded-lg">
              <img 
                src="/skcleanlogo.png" 
                alt="SK Cleaning Services Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold">SK Cleaning Services</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your Partner for Pristine & Hygienic Spaces
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com/skcleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919209447145"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
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

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 SK Cleaning Services. All rights reserved. Trusted by TATA.
            </p>

            {/* Social Media Links - Footer */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com/skcleaningservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
                  title="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919209447145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
                  title="Chat with us on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
