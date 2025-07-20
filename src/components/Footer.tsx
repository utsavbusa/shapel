import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/707d3b93-5b12-4fcc-a657-6acc8f8ecc84.png"
                alt="SHAPEL Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold">SHAPEL</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Leading metal casting company delivering precision solutions for industries worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#ED1C24] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ED1C24] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ED1C24] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-400 hover:text-white transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/materials" className="text-gray-400 hover:text-white transition-colors">
                  Materials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ED1C24] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    123 Industrial Boulevard
                    <br />
                    Manufacturing District
                    <br />
                    Metalworks City, MC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ED1C24] flex-shrink-0" />
                <a href="mailto:info@shapel.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@shapel.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Phone Numbers</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ED1C24] flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Main: (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ED1C24] flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Sales: (555) 123-4568</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ED1C24] flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Support: (555) 123-4569</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SHAPEL. All rights reserved. | Designed with precision and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
