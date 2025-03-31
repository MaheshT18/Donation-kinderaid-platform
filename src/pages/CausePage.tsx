
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import FeaturedCauses from '@/components/FeaturedCauses';
import { getCauseById } from '@/data/causes';

const CausePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const cause = getCauseById(id || '');

  if (!cause) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Cause Not Found</h1>
            <p className="mb-6 text-gray-600">The cause you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/causes">View All Causes</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="h-80 md:h-96 relative overflow-hidden">
          <img 
            src={cause.imageUrl} 
            alt={cause.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              <span className="inline-block bg-teal-400 text-white px-3 py-1 text-sm rounded-full mb-4">
                {cause.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
                {cause.title}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About This Cause</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {cause.description}
                </p>
                
                <h3 className="text-xl font-bold mb-3 mt-8">How Your Donation Helps</h3>
                <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-700">
                  <li>Provides essential resources to communities in need</li>
                  <li>Supports sustainable solutions for long-term impact</li>
                  <li>Empowers individuals to build better futures</li>
                  <li>Ensures efficient use of funds with transparent reporting</li>
                </ul>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-3">Our Impact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4">
                      <div className="text-2xl font-bold text-teal-400 mb-1">5,000+</div>
                      <p className="text-gray-600">People Helped</p>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl font-bold text-teal-400 mb-1">15</div>
                      <p className="text-gray-600">Communities Reached</p>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl font-bold text-teal-400 mb-1">90%</div>
                      <p className="text-gray-600">Funds to Direct Services</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-6">
                  <h3 className="text-xl font-bold mb-4">Donation Progress</h3>
                  <ProgressBar 
                    current={cause.raisedAmount} 
                    goal={cause.goalAmount} 
                    className="mb-6"
                  />
                  <Button className="w-full bg-teal-400 hover:bg-teal-500 mb-3" asChild>
                    <Link to={`/donate/${cause.id}`}>Donate Now</Link>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      window.navigator.share({
                        title: cause.title,
                        text: cause.shortDescription,
                        url: window.location.href
                      }).catch(err => console.log('Share failed:', err));
                    }}>
                      Share This Cause
                    </a>
                  </Button>
                  
                  <Separator className="my-6" />
                  
                  <h4 className="font-semibold mb-3">Recent Donors</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-sm">John D.</p>
                        <p className="text-xs text-gray-500">$100 • 2 days ago</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-sm">Sarah M.</p>
                        <p className="text-xs text-gray-500">$50 • 3 days ago</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-sm">Anonymous</p>
                        <p className="text-xs text-gray-500">$250 • 5 days ago</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Causes */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Other Causes You May Like</h2>
            <FeaturedCauses />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CausePage;
