import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  learnMoreUrl: string;
}

export function IndustryCard({ title, description, imageUrl, learnMoreUrl }: IndustryCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={learnMoreUrl}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
        >
          Know more <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}