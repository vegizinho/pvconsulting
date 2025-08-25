import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../data/mock';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">PV</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-base lg:text-lg">PV Consulting</div>
              <div className="text-xs text-gray-600">d.o.o.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={location.pathname === item.href ? "default" : "ghost"}
                  size="sm"
                  className={`text-xs font-medium transition-colors ${
                    location.pathname === item.href 
                      ? "bg-green-600 hover:bg-green-700 text-white" 
                      : "hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden lg:flex items-center space-x-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-1 text-gray-600">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xl:inline">+385 44 123 456</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xl:inline">info@pvconsulting.hr</span>
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80">
                <div className="flex flex-col space-y-1 mt-6">
                  {navigationItems.map((item) => (
                    <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={location.pathname === item.href ? "default" : "ghost"}
                        className={`w-full justify-start text-left font-medium ${
                          location.pathname === item.href 
                            ? "bg-green-600 hover:bg-green-700 text-white" 
                            : "hover:bg-green-50 hover:text-green-700"
                        }`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t">
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+385 44 123 456</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>info@pvconsulting.hr</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;