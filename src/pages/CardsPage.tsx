
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Plus, Lock, Eye, EyeOff } from 'lucide-react';

const CardsPage = () => {
  const [showCardDetails, setShowCardDetails] = React.useState(false);

  return (
    <AppLayout title="Cards" showBackButton>
      <div className="p-4">
        <div className="mb-6 relative">
          {/* Virtual card display */}
          <div className="bg-gradient-to-r from-revolut-blue to-blue-700 rounded-xl p-5 text-white h-48 relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-16 bg-white/10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mb-10"></div>
            
            <div className="flex justify-between items-start">
              <span className="text-white/80 text-xs">Virtual Card</span>
              <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="2"/>
                <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="mt-8 mb-4">
              <p className="text-xl tracking-widest">
                {showCardDetails ? "4539 •••• •••• 1234" : "•••• •••• •••• 1234"}
              </p>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/80 text-xs mb-1">Cardholder</p>
                <p className="font-medium">JOÃO SILVA</p>
              </div>
              <div>
                <p className="text-white/80 text-xs mb-1">Expires</p>
                <p>{showCardDetails ? "05/28" : "••/••"}</p>
              </div>
            </div>
          </div>
          
          <button 
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            onClick={() => setShowCardDetails(!showCardDetails)}
          >
            {showCardDetails ? <EyeOff size={16} color="white" /> : <Eye size={16} color="white" />}
          </button>
        </div>
        
        <div className="flex justify-between mb-6">
          <button className="flex-1 mr-2 py-3 bg-revolut-lightGray rounded-xl flex flex-col items-center justify-center">
            <Lock size={18} className="mb-1" />
            <span className="text-sm font-medium">Block Card</span>
          </button>
          <button className="flex-1 ml-2 py-3 bg-revolut-lightGray rounded-xl flex flex-col items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 10h18" />
            </svg>
            <span className="text-sm font-medium">Card Details</span>
          </button>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Card Settings</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {[
              'Online Payments',
              'ATM Withdrawals',
              'Contactless Payments',
              'Gambling Transactions',
            ].map((setting, index) => (
              <div key={index} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0">
                <span>{setting}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={index !== 3} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-revolut-blue"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full py-3 bg-revolut-lightGray rounded-xl flex items-center justify-center">
          <Plus size={18} className="mr-2" />
          <span className="font-medium">Order Physical Card</span>
        </button>
      </div>
    </AppLayout>
  );
};

export default CardsPage;
