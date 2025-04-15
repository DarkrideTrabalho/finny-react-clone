
import React from 'react';
import TransactionItem from '../ui/TransactionItem';
import { ShoppingBag, Coffee, ArrowDownLeft, Utensils, Music } from 'lucide-react';

const transactions = [
  {
    id: 1,
    name: 'Amazon',
    date: 'Today',
    amount: -29.99,
    currency: '$',
    icon: <ShoppingBag size={16} />,
    category: 'Shopping'
  },
  {
    id: 2,
    name: 'Starbucks',
    date: 'Yesterday',
    amount: -4.75,
    currency: '$',
    icon: <Coffee size={16} />,
    category: 'Food & Drinks'
  },
  {
    id: 3,
    name: 'Salary',
    date: '15 Apr',
    amount: 2500.00,
    currency: '$',
    icon: <ArrowDownLeft size={16} />,
    category: 'Income'
  },
  {
    id: 4,
    name: 'Restaurant',
    date: '14 Apr',
    amount: -42.50,
    currency: '$',
    icon: <Utensils size={16} />,
    category: 'Food & Drinks'
  },
  {
    id: 5,
    name: 'Spotify',
    date: '12 Apr',
    amount: -9.99,
    currency: '$',
    icon: <Music size={16} />,
    category: 'Entertainment'
  }
];

const TransactionsSection = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center mb-3 mt-2">
        <h2 className="text-lg font-semibold text-revolut-darkGray">Transactions</h2>
        <button className="text-revolut-blue text-sm font-medium">
          See all
        </button>
      </div>
      
      <div>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            name={transaction.name}
            date={transaction.date}
            amount={transaction.amount}
            currency={transaction.currency}
            icon={transaction.icon}
            category={transaction.category}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionsSection;
