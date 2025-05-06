import React from 'react';
import { Car } from 'lucide-react';

function NewCars() {
  const newCars = [
    {
      id: 1,
      name: 'Tesla Model 3',
      price: '39,900',
      image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['Electric', 'Autopilot', '358mi Range']
    },
    {
      id: 2,
      name: 'BMW i4',
      price: '55,400',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['Electric', 'Premium Audio', '301mi Range']
    }
  ];

  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <Car className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">New Cars</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h2>
                <p className="text-3xl font-bold text-blue-600 mb-4">${car.price}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                  Schedule Test Drive
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewCars;