import React from 'react';
import { Calendar, Users2, Star, Globe2, Briefcase } from 'lucide-react';
// import image from '../image (1).png'import billingImage from '../image (1).png';
import billingImage from '../image (1).png';

const features = [
  {
    icon: Calendar,
    title: 'Scheduling',
    description: 'Manage appointments, classes, and events, workshops with...',
    link: '#',
  },
  {
    icon: Users2,
    title: 'Client Management & CRM',
    description: 'Keep track of customer data, preferences, and interactions to...',
    link: '#',
  },
  {
    icon: Star,
    title: 'AI Powered Insights',
    description: 'Know exactly what is happening in business and get actionable...',
    link: '#',
  },
  {
    icon: Globe2,
    title: 'Custom Branded Website',
    description: "Qest's Custom Branded Website Builder allows you to create a fully personalized...",
    link: '#',
  },
  {
    icon: Briefcase,
    title: 'Marketing & Engagement Tools',
    description: 'Boost client retention and grow your business with integrated...',
    link: '#',
  },
  {
    title: 'Billing and Payments',
    description: 'Streamline invoicing and payments with automated workflows, reducing...',
    link: '#',
    image: billingImage // Replace with the actual image URL
  },
];

export function WhyRmax() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Why Rmax?</h2>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Rmax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling and billing to client
        management, payments and growth, Rmax integrates everything in one easy-to-use platform connecting all the stakeholders.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
            {feature.icon ? (
              <feature.icon className="w-8 h-8 text-red-500 mb-4" />
            ) : feature.image ? (
              <img src={feature.image} alt={feature.title} className="w-30 h-25 mb-4 mx-auto" />
            ) : null}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a href={feature.link} className="text-blue-600 hover:underline inline-flex items-center gap-1">
              View details
              {/* <ArrowRight className="w-4 h-4" /> */}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
