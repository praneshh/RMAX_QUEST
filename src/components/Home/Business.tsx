import React from 'react';
import { AppStoreButton } from './AppStoreButton';
import { GooglePlayButton } from './GooglePlayButton';
import { Smartphone, ArrowRight } from 'lucide-react';

function Business() {
  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Manage Your Business On the Go
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            With free Business Mobile App, you can manage your entire service business from anywhere. 
            Stay connected and stay in control, no matter where your day takes you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <AppStoreButton />
            <GooglePlayButton />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Business;