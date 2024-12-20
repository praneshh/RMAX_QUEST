import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Hero() {
  return (
    <div className="text-center max-w-4xl mx-auto mt-10">
       <SearchBar />
      <h1 className="text-5xl font-bold mb-6 mt-9">
        Maximize Your Impact
        <br />
        <span className="text-red-500">Business with</span>{' '}
        <span className="text-gray-900">RMax</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Enhance your business with Rmax's all-in-one platform—streamlining client
        engagement, automating workflows, and fueling growth.
      </p>
      <div className="mb-12">
       
      </div>
      <div className="flex justify-center gap-4">
        <button className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
        <button className="px-6 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          Book A Demo
        </button>
      </div>
    </div>
  );
}