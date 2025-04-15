
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Search, Users, Globe, QrCode, Repeat } from 'lucide-react';

const PaymentsPage = () => {
  return (
    <AppLayout title="Payments" showBackButton>
      <div className="p-4">
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-revolut-mediumGray" />
          </div>
          <input
            type="text"
            placeholder="Search by name or phone number"
            className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-xl focus:outline-none focus:border-revolut-blue"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { icon: <Users size={20} />, label: 'Send to Contact' },
            { icon: <QrCode size={20} />, label: 'Scan QR Code' },
            { icon: <Globe size={20} />, label: 'International' },
            { icon: <Repeat size={20} />, label: 'Recurring Payment' }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center h-28">
              <div className="w-10 h-10 rounded-full bg-revolut-lightBlue flex items-center justify-center text-revolut-blue mb-2">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-center">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Recent Contacts</h2>
          <div className="flex overflow-x-auto space-x-4 py-2 no-scrollbar">
            {['John', 'Sarah', 'Mike', 'Emily', 'David', 'Anna'].map((name, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-revolut-lightBlue rounded-full flex items-center justify-center text-revolut-blue font-medium mb-1">
                  {name[0]}
                </div>
                <span className="text-xs">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Scheduled Payments</h2>
          {[
            { name: 'Netflix Subscription', date: 'On 25 Apr', amount: '$12.99' },
            { name: 'Rent Payment', date: 'On 01 May', amount: '$850.00' },
          ].map((payment, index) => (
            <div key={index} className="flex justify-between items-center p-3 border-b border-gray-100">
              <div>
                <p className="font-medium">{payment.name}</p>
                <p className="text-xs text-revolut-mediumGray">{payment.date}</p>
              </div>
              <p className="font-semibold">{payment.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default PaymentsPage;
