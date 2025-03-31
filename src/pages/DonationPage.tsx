
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DonationForm from '@/components/DonationForm';
import { getCauseById } from '@/data/causes';

const DonationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const cause = getCauseById(id || '');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              {cause ? `Donate to ${cause.title}` : 'Make a Donation'}
            </h1>
            <p className="text-gray-600 mt-2">
              {cause 
                ? `Your donation will help support ${cause.shortDescription.toLowerCase()}.` 
                : 'Choose a cause and make a difference today.'
              }
            </p>
          </div>
          
          {!cause && (
            <div className="mb-10 text-center">
              <Button asChild>
                <Link to="/causes">View All Causes</Link>
              </Button>
            </div>
          )}
          
          <div className="max-w-4xl mx-auto">
            {cause && (
              <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img 
                    src={cause.imageUrl} 
                    alt={cause.title} 
                    className="w-full md:w-40 h-40 rounded-lg object-cover"
                  />
                  <div>
                    <span className="inline-block bg-teal-100 text-teal-700 px-2 py-1 text-xs rounded-full mb-2">
                      {cause.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{cause.title}</h2>
                    <p className="text-gray-600 mb-4">{cause.shortDescription}</p>
                    <div className="flex items-center space-x-4">
                      <div>
                        <span className="text-sm text-gray-500">Raised:</span>
                        <span className="ml-1 font-semibold">${cause.raisedAmount.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Goal:</span>
                        <span className="ml-1 font-semibold">${cause.goalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <DonationForm cause={cause} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonationPage;
