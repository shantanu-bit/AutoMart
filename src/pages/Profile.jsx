import React from 'react';
import { User, Settings, Heart, Clock, LogOut } from 'lucide-react';

function Profile() {
  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 bg-blue-600">
              <div className="flex items-center space-x-4">
                <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
                  <User className="h-12 w-12 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Shantanu Mamgain</h1>
                  <p className="text-blue-100">shantanumamgain12@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition">
                  <Settings className="h-6 w-6 text-gray-600" />
                  <span className="font-medium">Account Settings</span>
                </button>
                
                <button className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition">
                  <Heart className="h-6 w-6 text-gray-600" />
                  <span className="font-medium">Saved Cars</span>
                </button>
                
                <button className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition">
                  <Clock className="h-6 w-6 text-gray-600" />
                  <span className="font-medium">Purchase History</span>
                </button>
                
                <button className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-red-50 text-red-600 transition">
                  <LogOut className="h-6 w-6" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;