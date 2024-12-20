import React from 'react';
import { Users, MessageSquare, BarChart3, TrendingUp } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    { title: 'Seamless Onboarding', icon: Users },
    { title: 'Client Engagementent', icon: MessageSquare },
    { title: 'Generate Report', icon: BarChart3 },
    { title: 'Revenue Growth', icon: TrendingUp },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}