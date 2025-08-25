import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, navigationItems } from '../data/mock';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PV</span>
              </div>
              <div>
                <div className="font-bold text-lg">{companyInfo.name}</div>
                <div className="text-sm text-gray-400">{companyInfo.tagline}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Stručne usluge građevinskog inženjeringa, javne nabave i poslovnog savjetovanja u Sisku.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Brze veze</h3>
            <ul className="space-y-2">
              {navigationItems.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Usluge</h3>
            <ul className="space-y-2">
              {navigationItems.slice(6, 11).map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {companyInfo.address}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {companyInfo.phone}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {companyInfo.email}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Pon - Pet: 08:00 - 17:00<br />
                  Sub: 09:00 - 13:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 sm:mb-0">
            © {currentYear} {companyInfo.name}. Sva prava pridržana.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/politika-privatnosti" className="text-gray-400 hover:text-white transition-colors">
              Politika privatnosti
            </a>
            <a href="/uvjeti-koristenja" className="text-gray-400 hover:text-white transition-colors">
              Uvjeti korištenja
            </a>
            <a href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;