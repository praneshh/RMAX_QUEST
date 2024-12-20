import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IndustryCard } from './IndustryCard';

const industries = [
  {
    title: "Sports",
    description: "From fitness studios to sports academies, Rmax empowers sports businesses",
    imageUrl: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80",
    learnMoreUrl: "#sports"
  },
  {
    title: "Healthcare & Wellness",
    description: "Health and wellness service providers—from yoga instructors and gyms",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    learnMoreUrl: "#healthcare"
  },
  {
    title: "Learning Activites",
    description: "Tutors, educators, and learning centers—from music schools to art studios",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
    learnMoreUrl: "#learning"
  }
];

function Service() {
  const scrollLeft = () => {
    const container = document.getElementById('industries-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('industries-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Service<br />Providers Across Industries
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're in sports, education, wellness, household services, or niche markets, 
            our technology simplifies your business operations, making it easier for you to focus 
            on what you do best.
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <div 
            id="industries-container"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry, index) => (
              <div key={index} className="min-w-[350px] snap-center">
                <IndustryCard {...industry} />
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;