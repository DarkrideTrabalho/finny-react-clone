
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccountCardProps {
  currencyCode: string;
  balance: number;
  currencySymbol: string;
  className?: string;
}

const AccountCard: React.FC<AccountCardProps> = ({ 
  currencyCode,
  balance,
  currencySymbol,
  className
}) => {
  const formattedBalance = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(balance);

  return (
    <div className={cn(
      "bg-white rounded-xl border border-gray-200 p-4 mb-3 shadow-sm", 
      className
    )}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-revolut-lightBlue flex items-center justify-center text-revolut-blue font-semibold">
            {currencyCode}
          </div>
          <div className="ml-3">
            <p className="text-sm text-revolut-mediumGray">{currencyCode} Account</p>
            <p className="text-lg font-semibold">
              {currencySymbol}{formattedBalance}
            </p>
          </div>
        </div>
        <ChevronRight size={20} className="text-revolut-mediumGray" />
      </div>
    </div>
  );
};

export default AccountCard;
