import React from 'react';
import { Calculator, DollarSign, PiggyBank } from 'lucide-react';

function Finance() {
  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Car Financing Options</h1>
          <p className="text-xl text-gray-600">Find the best financing solution for your dream car</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Competitive Rates</h2>
            <p className="text-gray-600">Starting from 3.99% APR for qualified buyers</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Calculator className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Easy Calculations</h2>
            <p className="text-gray-600">Use our calculator to estimate your monthly payments</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <PiggyBank className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Flexible Terms</h2>
            <p className="text-gray-600">Choose from 24 to 84 month financing terms</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Loan Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Car Price ($)</label>
              <input type="number" className="w-full p-3 border rounded-md" placeholder="30,000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment ($)</label>
              <input type="number" className="w-full p-3 border rounded-md" placeholder="5,000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (months)</label>
              <select className="w-full p-3 border rounded-md">
                <option>24 months</option>
                <option>36 months</option>
                <option>48 months</option>
                <option>60 months</option>
                <option>72 months</option>
                <option>84 months</option>
              </select>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Calculate Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Finance;