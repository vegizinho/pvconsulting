import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, navigationItems } from '../data/mock';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">PV</span>
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg">{companyInfo.name}</div>
                <div className="text-xs sm:text-sm text-gray-400">{companyInfo.tagline}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Stručne usluge građevinskog inženjeringa, javne nabave i poslovnog savjetovanja u Sisku.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-4">Brze veze</h3>
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
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-4">Usluge</h3>
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
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {companyInfo.address}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {companyInfo.phone}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {companyInfo.email}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Pon - Pet: 08:00 - 17:00<br />
                  Sub: 09:00 - 13:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-400 text-center sm:text-left">
            © {currentYear} {companyInfo.name}. Sva prava pridržana.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-sm">
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