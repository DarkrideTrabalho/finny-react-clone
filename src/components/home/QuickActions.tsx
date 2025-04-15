
import React from 'react';
import { Send, CreditCard, Phone, Gift, ArrowDownUp } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Send, label: 'Send' },
    { icon: CreditCard, label: 'Cards' },
    { icon: Phone, label: 'Mobile' },
    { icon: ArrowDownUp, label: 'Exchange' },
    { icon: Gift, label: 'Rewards' },
  ];

  return (
    <div className="py-5 border-b border-gray-100">
      <div className="flex justify-between items-center px-4 overflow-x-auto no-scrollbar">
        {actions.map((action) => (
          <div key={action.label} className="flex flex-col items-center px-4">
            <div className="w-12 h-12 rounded-full bg-revolut-lightBlue flex items-center justify-center text-revolut-blue mb-1">
              <action.icon size={20} />
            </div>
            <span className="text-xs font-medium text-revolut-darkGray">{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
