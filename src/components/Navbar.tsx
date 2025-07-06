import React from 'react';
import { Home, Search, User, MessageSquare, BarChart3, Calendar, Settings } from 'lucide-react';

interface NavbarProps {
  userType: 'creator' | 'company' | null;
  onViewChange: (view: 'landing' | 'creator' | 'company' | 'marketplace') => void;
  currentView: string;
}

const Navbar = ({ userType, onViewChange, currentView }: NavbarProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" />, view: userType },
    { id: 'marketplace', label: 'Marketplace', icon: <Search className="w-5 h-5" />, view: 'marketplace' },
    { id: 'messages', label: 'Messages', icon: <MessageSquare className="w-5 h-5" />, view: 'messages' },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" />, view: 'analytics' },
    { id: 'events', label: 'Events', icon: <Calendar className="w-5 h-5" />, view: 'events' },
  ];

  return (
    <nav className="bg-white shadow-md rounded-b-2xl sticky top-0 z-50 mx-2 mt-2">
      <div className="container mx-auto px-6">
        <div className="flex items-center
         justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onViewChange('landing')}
          >
            <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-extrabold text-blue-600 font-sans tracking-tight">Creatorkonnect</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.view as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 text-base font-sans ${
                  currentView === item.view
                    ? 'bg-blue-100 text-blue-600 shadow'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden md:inline text-sm font-semibold text-gray-800 font-sans">
                {userType === 'creator' ? 'Creator' : 'Company'} Profile
              </span>
            </div>
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;