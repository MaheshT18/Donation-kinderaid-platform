
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedCauses from '@/components/FeaturedCauses';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-teal-50 to-blue-50 hero-pattern">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Your Generosity Can <span className="text-teal-400">Change Lives</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join us in making a difference. Every donation, no matter the size, brings hope to those in need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-teal-400 hover:bg-teal-500 text-lg py-6 px-8" asChild>
                <Link to="/causes">Donate Now</Link>
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">$1.5M+</div>
                <p className="text-gray-600">Raised for Causes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">15,000+</div>
                <p className="text-gray-600">Generous Donors</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">120+</div>
                <p className="text-gray-600">Causes Supported</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Causes */}
        <FeaturedCauses />
        
        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Making a difference is simple with our easy donation process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-400">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Choose a Cause</h3>
                <p className="text-gray-600">
                  Browse through our curated list of causes and find one that resonates with your values.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-400">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Make a Donation</h3>
                <p className="text-gray-600">
                  Choose your donation amount and complete a secure payment through our platform.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-400">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Create Impact</h3>
                <p className="text-gray-600">
                  Your donation goes directly to the cause, making a real difference in people's lives.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-purple-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join thousands of donors who are changing lives through their generosity.
            </p>
            <Button 
              className="bg-white text-purple-500 hover:bg-gray-100 text-lg py-6 px-8"
              asChild
            >
              <Link to="/causes">Donate Today</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
