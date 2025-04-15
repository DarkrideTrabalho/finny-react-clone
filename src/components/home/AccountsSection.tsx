
import React from 'react';
import { PlusCircle } from 'lucide-react';
import AccountCard from '../ui/AccountCard';

const accounts = [
  { currencyCode: 'EUR', currencySymbol: '€', balance: 1250.75 },
  { currencyCode: 'USD', currencySymbol: '$', balance: 532.42 },
  { currencyCode: 'GBP', currencySymbol: '£', balance: 0.00 },
];

const AccountsSection = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-revolut-darkGray">Accounts</h2>
        <button className="text-revolut-blue flex items-center text-sm font-medium">
          <PlusCircle size={16} className="mr-1" /> Add new
        </button>
      </div>
      
      <div className="space-y-3">
        {accounts.map((account) => (
          <AccountCard
            key={account.currencyCode}
            currencyCode={account.currencyCode}
            currencySymbol={account.currencySymbol}
            balance={account.balance}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountsSection;
