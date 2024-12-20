import React from 'react';
import { Play } from 'lucide-react';

interface GooglePlayButtonProps {
  className?: string;
}

export function GooglePlayButton({ className = '' }: GooglePlayButtonProps) {
  return (
    <button className={`inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors ${className}`}>
      <Play className="w-8 h-8 mr-3 fill-current" />
      <div className="text-left">
        <div className="text-xs">Get it on</div>
        <div className="text-xl font-semibold">Google Play</div>
      </div>
    </button>
  );
}