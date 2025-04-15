
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', expense: 4000 },
  { name: 'Feb', expense: 3000 },
  { name: 'Mar', expense: 2000 },
  { name: 'Apr', expense: 2780 },
  { name: 'May', expense: 1890 },
  { name: 'Jun', expense: 2390 },
];

const AnalyticsPage = () => {
  return (
    <AppLayout title="Analytics" showBackButton>
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Spending</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <p className="text-revolut-mediumGray mb-2">Total spent this month</p>
            <p className="text-2xl font-bold mb-4">$1,240.56</p>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="expense" fill="#0666EB" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Top Categories</h2>
          <div className="space-y-3">
            {[
              { category: 'Groceries', amount: 345.25, percentage: 25 },
              { category: 'Restaurants', amount: 289.50, percentage: 20 },
              { category: 'Shopping', amount: 245.80, percentage: 15 },
              { category: 'Transport', amount: 120.45, percentage: 10 },
            ].map((item) => (
              <div key={item.category} className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.category}</span>
                  <span className="font-semibold">${item.amount}</span>
                </div>
                <div className="w-full bg-revolut-lightGray rounded-full h-2">
                  <div 
                    className="bg-revolut-blue h-2 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs text-revolut-mediumGray mt-1">
                  {item.percentage}% of total
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AnalyticsPage;
