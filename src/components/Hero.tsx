import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect Car
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Browse through thousands of verified cars and get the best deals on your dream vehicle
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="w-full p-3 border rounded-md">
                  <option>Select Brand</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>BMW</option>
                </select>
                <select className="w-full p-3 border rounded-md">
                  <option>Select Model</option>
                  <option>Camry</option>
                  <option>Civic</option>
                  <option>3 Series</option>
                </select>
                <button className="w-full bg-blue-600 text-white p-3 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700">
                  <span>Search Cars</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;