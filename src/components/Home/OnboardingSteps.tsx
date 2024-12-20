import React from 'react';
import { User, Download, Monitor } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Claim your preset profile',
    description: 'Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.',
    icon: User,
  },
  {
    number: 2,
    title: 'Add services',
    description: 'Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates.',
    icon: Download,
  },
  {
    number: 3,
    title: 'Built Website',
    description: 'Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient Client experience.',
    icon: Monitor,
  },
];

export function OnboardingSteps() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Onboard business in 3 simple steps</h2>
        <p className="text-gray-600">Quick assisted onboarding with 30day free trial. No credit card needed.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
        {steps.map((step, index) => (
          <div key={step.number} className="text-center">
            <div className="relative">
              <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-red-500" />
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px]">
                  <div className="w-full h-full bg-gray-200" />
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}