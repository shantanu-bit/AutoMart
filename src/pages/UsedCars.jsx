import React from 'react';
import { Car } from 'lucide-react';

function UsedCars() {
  const usedCars = [
    {
      id: 1,
      name: 'Toyota Camry 2020',
      price: '22,500',
      mileage: '35,000',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Honda Accord 2019',
      price: '20,900',
      mileage: '45,000',
      image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <Car className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Used Cars</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {usedCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h2>
                <div className="flex justify-between mb-4">
                  <p className="text-2xl font-bold text-blue-600">${car.price}</p>
                  <p className="text-gray-600">{car.mileage} miles</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsedCars;