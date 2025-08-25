import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../data/mock';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Split navigation items for better layout
  const mainServices = navigationItems.slice(1, 5); // First 4 services
  const secondaryServices = navigationItems.slice(5, 9); // Next 4 services
  const otherPages = navigationItems.slice(9); // Remaining pages

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo - Compact Layout */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg sm:text-xl">PV</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-lg leading-tight">
                PV Consulting d.o.o.
              </div>
              <div className="text-xs text-green-600 leading-none">
                građevinski inženjering
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Compact 2-row layout */}
          <div className="hidden xl:block">
            <div className="flex flex-col space-y-1">
              {/* First row - Main pages */}
              <div className="flex items-center space-x-1">
                <Link to="/">
                  <Button
                    variant={location.pathname === "/" ? "default" : "ghost"}
                    size="sm"
                    className={`text-xs font-medium px-2 py-1 h-7 ${
                      location.pathname === "/" 
                        ? "bg-green-600 hover:bg-green-700 text-white" 
                        : "hover:bg-green-50 hover:text-green-700"
                    }`}
                  >
                    Početna
                  </Button>
                </Link>
                {mainServices.map((item) => (
                  <Link key={item.href} to={item.href}>
                    <Button
                      variant={location.pathname === item.href ? "default" : "ghost"}
                      size="sm"
                      className={`text-xs font-medium px-2 py-1 h-7 ${
                        location.pathname === item.href 
                          ? "bg-green-600 hover:bg-green-700 text-white" 
                          : "hover:bg-green-50 hover:text-green-700"
                      }`}
                    >
                      {item.name.split(' ').slice(0, 2).join(' ')}
                    </Button>
                  </Link>
                ))}
              </div>
              
              {/* Second row - Secondary services and other pages */}
              <div className="flex items-center space-x-1">
                {secondaryServices.map((item) => (
                  <Link key={item.href} to={item.href}>
                    <Button
                      variant={location.pathname === item.href ? "default" : "ghost"}
                      size="sm"
                      className={`text-xs font-medium px-2 py-1 h-7 ${
                        location.pathname === item.href 
                          ? "bg-green-600 hover:bg-green-700 text-white" 
                          : "hover:bg-green-50 hover:text-green-700"
                      }`}
                    >
                      {item.name.split(' ').slice(0, 2).join(' ')}
                    </Button>
                  </Link>
                ))}
                {otherPages.map((item) => (
                  <Link key={item.href} to={item.href}>
                    <Button
                      variant={location.pathname === item.href ? "default" : "ghost"}
                      size="sm"
                      className={`text-xs font-medium px-2 py-1 h-7 ${
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
            </div>
          </div>

          {/* Large screens single row with abbreviated text */}
          <div className="hidden lg:flex xl:hidden items-center space-x-1">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                size="sm"
                className={`text-xs font-medium px-2 py-1 ${
                  location.pathname === "/" 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "hover:bg-green-50 hover:text-green-700"
                }`}
              >
                Početna
              </Button>
            </Link>
            {navigationItems.slice(1, 8).map((item) => (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={location.pathname === item.href ? "default" : "ghost"}
                  size="sm"
                  className={`text-xs font-medium px-1.5 py-1 ${
                    location.pathname === item.href 
                      ? "bg-green-600 hover:bg-green-700 text-white" 
                      : "hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {item.name.split(' ')[0]}
                </Button>
              </Link>
            ))}
            <Link to="/kontakt">
              <Button
                variant={location.pathname === "/kontakt" ? "default" : "ghost"}
                size="sm"
                className={`text-xs font-medium px-2 py-1 ${
                  location.pathname === "/kontakt" 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "hover:bg-green-50 hover:text-green-700"
                }`}
              >
                Kontakt
              </Button>
            </Link>
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden 2xl:flex items-center space-x-3 text-xs">
              <div className="flex items-center space-x-1 text-gray-600">
                <Phone className="w-3 h-3" />
                <span>+385 44 123 456</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Mail className="w-3 h-3" />
                <span>info@pvconsulting.hr</span>
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" />
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