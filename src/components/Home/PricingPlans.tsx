import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    price: 17,
    features: [
      { name: 'Commercial License', included: true },
      { name: '100+ HTML UI Elements', included: true },
      { name: 'Unlimited Domain Support', included: true },
      { name: '6 Month Premium Support', included: false },
      { name: 'Life Time Updates', included: false },
    ],
  },
  {
    name: 'PREMIUM',
    price: 88,
    features: [
      { name: 'Commercial License', included: true },
      { name: '100+ HTML UI Elements', included: true },
      { name: 'Unlimited Domain Support', included: true },
      { name: '6 Month Premium Support', included: true },
      { name: 'Life Time Updates', included: true },
    ],
  },
];

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Choose Plan<br />That's Right For You</h2>
        <p className="text-gray-600 mb-4">Simple and transparent pricing. Start for free, upgrade when you love it.</p>
        <p className="text-red-500 mb-8">30 day free trial in a button</p>
        <div className="flex justify-center items-center gap-2 mb-8">
          <span>Running a</span>
          <span className="font-semibold">Growth Business</span>
          <span>or</span>
          <span className="font-semibold">Enterprise</span>
          <span>? Let's connect •</span>
          <button className="bg-red-500 text-white px-4 py-1 rounded">Talk to Sales</button>
        </div>
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={isYearly ? 'text-gray-500' : 'font-semibold'}>Monthly</span>
          <button
            className="w-12 h-6 bg-gray-200 rounded-full p-1"
            onClick={() => setIsYearly(!isYearly)}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isYearly ? 'translate-x-6' : ''}`} />
          </button>
          <span className={!isYearly ? 'text-gray-500' : 'font-semibold'}>Yearly</span>
          <span className="text-red-500 text-sm">SAVE 25%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-red-500 font-semibold mb-4">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-500">/ month</span>
            </div>
            <p className="text-gray-500 mb-6">billed monthly</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature.name} className="flex items-center gap-2">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                  <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">No credit card required</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-blue-600 hover:underline">
          Explore In-Depth Differences
        </a>
      </div>
    </section>
  );
}