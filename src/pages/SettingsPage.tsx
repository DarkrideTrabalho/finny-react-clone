
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import SettingsItem from '@/components/settings/SettingsItem';
import { User, Shield, Bell, Globe, Headphones, LogOut } from 'lucide-react';

const SettingsPage = () => {
  return (
    <AppLayout title="Settings" showBackButton>
      <div className="p-4">
        <div className="flex items-center p-4 mb-4 bg-revolut-lightGray rounded-xl">
          <div className="w-16 h-16 rounded-full bg-revolut-blue mr-4 flex items-center justify-center text-white text-xl font-semibold">
            JS
          </div>
          <div>
            <h2 className="text-lg font-semibold">João Silva</h2>
            <p className="text-revolut-mediumGray">+55 (11) 99999-9999</p>
            <p className="text-xs text-revolut-mediumGray">joao.silva@example.com</p>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
          <SettingsItem 
            icon={<User size={18} />}
            title="Personal Details"
            description="Name, email, phone, address"
          />
          <SettingsItem 
            icon={<Shield size={18} />}
            title="Security"
            description="PIN, biometrics, passwords"
          />
          <SettingsItem 
            icon={<Bell size={18} />}
            title="Notifications"
            description="Push, email, SMS settings"
          />
          <SettingsItem 
            icon={<Globe size={18} />}
            title="Language"
            description="English (US)"
          />
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
          <SettingsItem 
            icon={<Headphones size={18} />}
            title="Help Center"
            description="FAQs, contact support"
          />
        </div>
        
        <button className="w-full py-4 text-revolut-red font-medium flex items-center justify-center">
          <LogOut size={18} className="mr-2" />
          Sign Out
        </button>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
