
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  description,
  onClick,
  className,
}) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-revolut-lightGray flex items-center justify-center mr-3">
          {icon}
        </div>
        <div>
          <p className="font-medium text-revolut-darkGray">{title}</p>
          {description && <p className="text-xs text-revolut-mediumGray">{description}</p>}
        </div>
      </div>
      <ChevronRight size={18} className="text-revolut-mediumGray" />
    </div>
  );
};

export default SettingsItem;
