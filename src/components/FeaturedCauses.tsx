
import React from 'react';
import { Link } from 'react-router-dom';
import CauseCard from './CauseCard';
import { Button } from '@/components/ui/button';
import { getFeaturedCauses } from '@/data/causes';

const FeaturedCauses: React.FC = () => {
  const featuredCauses = getFeaturedCauses();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Causes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These causes need your support right now. Your contribution can make a real difference in the lives of those in need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {featuredCauses.map((cause) => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-teal-400 hover:bg-teal-500">
            <Link to="/causes">View All Causes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCauses;
