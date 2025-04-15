
import React from 'react';
import { cn } from '@/lib/utils';

interface TransactionItemProps {
  name: string;
  date: string;
  amount: number;
  currency: string;
  icon: React.ReactNode;
  category?: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  name,
  date,
  amount,
  currency,
  icon,
  category
}) => {
  const isNegative = amount < 0;
  const formattedAmount = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(amount));

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-revolut-lightGray flex items-center justify-center">
          {icon}
        </div>
        <div className="ml-3">
          <p className="font-medium text-revolut-darkGray">{name}</p>
          <p className="text-xs text-revolut-mediumGray">
            {date} {category && `• ${category}`}
          </p>
        </div>
      </div>
      <p className={cn(
        "font-semibold",
        isNegative ? "text-revolut-darkGray" : "text-revolut-green"
      )}>
        {isNegative ? '-' : '+'}{currency}{formattedAmount}
      </p>
    </div>
  );
};

export default TransactionItem;
