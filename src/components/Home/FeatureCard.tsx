import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, icon: Icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-xl font-medium text-gray-900">{title}</h3>
    </div>
  );
}