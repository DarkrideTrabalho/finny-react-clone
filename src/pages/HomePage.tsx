
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import AccountsSection from '@/components/home/AccountsSection';
import QuickActions from '@/components/home/QuickActions';
import TransactionsSection from '@/components/home/TransactionsSection';
import { Bell, Search } from 'lucide-react';

const HomePage = () => {
  return (
    <AppLayout>
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-revolut-darkGray">Olá, João</h1>
          <p className="text-revolut-mediumGray text-sm">Bem-vindo de volta</p>
        </div>
        <div className="flex">
          <button className="w-10 h-10 flex items-center justify-center text-revolut-darkGray rounded-full bg-revolut-lightGray mr-2">
            <Search size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-revolut-darkGray rounded-full bg-revolut-lightGray">
            <Bell size={20} />
          </button>
        </div>
      </div>

      <AccountsSection />
      <QuickActions />
      <TransactionsSection />
    </AppLayout>
  );
};

export default HomePage;
