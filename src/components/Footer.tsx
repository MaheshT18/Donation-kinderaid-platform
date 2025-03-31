
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-teal-400" />
              <span className="text-xl font-bold text-white">KindAid</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering communities through generosity. Together, we can make a difference in the lives of those in need.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/causes" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Browse Causes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/causes?category=Education" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/causes?category=Health" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/causes?category=Environment" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Environment
                </Link>
              </li>
              <li>
                <Link to="/causes?category=Food" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Food & Hunger
                </Link>
              </li>
              <li>
                <Link to="/causes?category=Emergency" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Emergency Relief
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Charity Lane, Generous City, GC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-400">info@kindaid.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-500 text-center text-sm">
            © {new Date().getFullYear()} KindAid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
