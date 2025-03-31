
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CauseCard from '@/components/CauseCard';
import { getAllCauses, Cause } from '@/data/causes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const CausesPage: React.FC = () => {
  const allCauses = getAllCauses();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(allCauses.map(cause => cause.category)));
  
  // Filter causes based on search term and selected category
  const filteredCauses = allCauses.filter(cause => {
    const matchesSearch = cause.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cause.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? cause.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teal-400 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Our Causes</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover meaningful projects that need your support. Every donation makes a difference.
            </p>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    className="pl-10"
                    placeholder="Search causes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap justify-center">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  className={selectedCategory === null ? "bg-teal-400 hover:bg-teal-500" : ""}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-teal-400 hover:bg-teal-500" : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Causes Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredCauses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCauses.map((cause) => (
                  <CauseCard key={cause.id} cause={cause} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold mb-2">No causes found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any causes matching your search criteria.
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-purple-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Contact us to learn more about our projects or to suggest a new cause.
            </p>
            <Button className="bg-white text-purple-500 hover:bg-gray-100">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CausesPage;
