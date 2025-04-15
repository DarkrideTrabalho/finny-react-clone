
import React from 'react';
import BottomNavigation from './BottomNavigation';
import { useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  title?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  showBackButton = false,
  title
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="revolut-container relative pb-16">
      {!isHomePage && (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 p-4 flex items-center">
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)}
              className="mr-3"
            >
              <ArrowLeft size={20} className="text-revolut-darkGray" />
            </button>
          )}
          {title && <h1 className="text-lg font-semibold text-revolut-darkGray">{title}</h1>}
        </header>
      )}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default AppLayout;
