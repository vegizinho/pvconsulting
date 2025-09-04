import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../data/mock';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // All navigation items for the new layout
  const allNavigationItems = navigationItems;

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center lg:items-start h-14 sm:h-16 lg:h-32">
          {/* Logo - Compact Layout */}
          <Link to="/" className="flex items-center space-x-3 lg:pt-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #44687a 0%, #215354 100%)' }}>
              <span className="text-white font-bold text-lg sm:text-xl">PV</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-lg leading-tight">
                PV Consulting d.o.o.
              </div>
              <div className="text-xs leading-none" style={{ color: '#44687a' }}>
                građevinski inženjering
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Clean 3-row layout */}
          <div className="hidden lg:block lg:py-1">
            <div className="flex flex-col space-y-1">
              {/* First row - Home + First 3 services */}
              <div className="flex items-center justify-center space-x-2">
                {allNavigationItems.slice(0, 4).map((item, index) => (
                  <Link key={item.href} to={item.href}>
                    <Button
                      variant={location.pathname === item.href ? "default" : "ghost"}
                      size="sm"
                      className={`text-xs font-medium px-3 py-1 h-8 whitespace-nowrap transition-all ${
                        location.pathname === item.href 
                          ? "text-white shadow-md" 
                          : "hover:shadow-sm"
                      }`}
                      style={location.pathname === item.href 
                        ? { backgroundColor: '#44687a' }
                        : { color: '#44687a' }
                      }
                      onMouseEnter={(e) => {
                        if (location.pathname !== item.href) {
                          e.target.style.backgroundColor = '#8093a0';
                          e.target.style.color = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (location.pathname !== item.href) {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#44687a';
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
              
              {/* Second row - Next 4 services */}
              <div className="flex items-center justify-center space-x-2">
                {allNavigationItems.slice(4, 8).map((item, index) => (
                  <Link key={item.href} to={item.href}>
                    <Button
                      variant={location.pathname === item.href ? "default" : "ghost"}
                      size="sm"
                      className={`text-xs font-medium px-3 py-1 h-8 whitespace-nowrap transition-all ${
                        location.pathname === item.href 
                          ? "text-white shadow-md" 
                          : "hover:shadow-sm"
                      }`}
                      style={location.pathname === item.href 
                        ? { backgroundColor: '#215354' }
                        : { color: '#215354' }
                      }
                      onMouseEnter={(e) => {
                        if (location.pathname !== item.href) {
                          e.target.style.backgroundColor = '#293042';
                          e.target.style.color = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (location.pathname !== item.href) {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#215354';
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
              
              {/* Third row - Last 3 items */}
              <div className="flex items-center justify-center space-x-2">
                {allNavigationItems.slice(8).map((item, index) => (
                  <Link key={item.href} to={item.href}>
                    <Button
                      variant={location.pathname === item.href ? "default" : "ghost"}
                      size="sm"
                      className={`text-xs font-medium px-3 py-1 h-8 whitespace-nowrap transition-all ${
                        location.pathname === item.href 
                          ? "text-white shadow-md" 
                          : "hover:shadow-sm"
                      }`}
                      style={location.pathname === item.href 
                        ? { backgroundColor: '#202c52' }
                        : { color: '#202c52' }
                      }
                      onMouseEnter={(e) => {
                        if (location.pathname !== item.href) {
                          e.target.style.backgroundColor = '#8093a0';
                          e.target.style.color = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (location.pathname !== item.href) {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#202c52';
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4 lg:pt-2">
            <div className="hidden 2xl:flex items-center space-x-3 text-xs">
              <div className="flex items-center space-x-1" style={{ color: '#4c555c' }}>
                <Phone className="w-3 h-3" />
                <span>+385 98 9417 413</span>
              </div>
              <div className="flex items-center space-x-1" style={{ color: '#4c555c' }}>
                <Mail className="w-3 h-3" />
                <span>info@pvconsulting.hr</span>
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" style={{ color: '#44687a' }} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80">
                <div className="flex flex-col space-y-1 mt-6">
                  {allNavigationItems.map((item, index) => (
                    <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={location.pathname === item.href ? "default" : "ghost"}
                        className={`w-full justify-start text-left font-medium ${
                          location.pathname === item.href 
                            ? "text-white" 
                            : ""
                        }`}
                        style={location.pathname === item.href 
                          ? { backgroundColor: index < 5 ? '#44687a' : '#215354' }
                          : { color: index < 5 ? '#44687a' : '#215354' }
                        }
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t">
                    <div className="space-y-2 text-sm" style={{ color: '#4c555c' }}>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+385 98 9417 413</span>
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