
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, PieChart, Settings, CreditCard, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: PieChart, label: 'Analytics', path: '/analytics' },
    { icon: Send, label: 'Payments', path: '/payments' },
    { icon: CreditCard, label: 'Cards', path: '/cards' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around px-2 z-10">
      {navItems.map((item) => {
        const isActive = currentPath === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "bottom-nav-item",
              isActive ? "active" : "inactive"
            )}
          >
            <item.icon size={20} className={isActive ? "text-revolut-blue" : "text-revolut-mediumGray"} />
            <span className="mt-1">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
