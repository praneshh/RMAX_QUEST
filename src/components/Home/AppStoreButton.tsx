import React from 'react';
import { Apple } from 'lucide-react';

interface AppStoreButtonProps {
  className?: string;
}

export function AppStoreButton({ className = '' }: AppStoreButtonProps) {
  return (
    <button className={`inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors ${className}`}>
      <Apple className="w-8 h-8 mr-3" />
      <div className="text-left">
        <div className="text-xs">Download on the</div>
        <div className="text-xl font-semibold">App Store</div>
      </div>
    </button>
  );
}