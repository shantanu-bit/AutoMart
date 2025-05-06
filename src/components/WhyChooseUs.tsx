import React from 'react';
import { Shield, ThumbsUp, Clock, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'All payments are processed through secure gateways with encryption'
  },
  {
    icon: ThumbsUp,
    title: 'Quality Assured',
    description: 'Every car undergoes a rigorous quality check before listing'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our customer support team is available round the clock'
  },
  {
    icon: BadgeCheck,
    title: 'Verified Sellers',
    description: 'All our sellers are verified and trusted partners'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">We provide the best car buying experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;