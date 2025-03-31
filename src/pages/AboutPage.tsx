
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, Globe, Award, Landmark } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h1>
                <p className="text-xl text-gray-600 mb-6">
                  At KindAid, we believe in the power of generosity to transform lives. 
                  Our mission is to connect compassionate donors with meaningful causes 
                  that create lasting positive impact in communities around the world.
                </p>
                <Button className="bg-teal-400 hover:bg-teal-500" asChild>
                  <Link to="/causes">Support Our Causes</Link>
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-white p-8 rounded-full shadow-xl">
                  <Heart className="h-32 w-32 text-teal-400" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide our work and inspire our commitment to making a difference.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-gray-600">
                  We approach every cause and individual with empathy and understanding.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">
                  We foster connections between donors and recipients to build stronger communities.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                <p className="text-gray-600">
                  We recognize the interconnectedness of our world and support causes globally.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We operate with transparency and accountability in all our actions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  KindAid was founded in 2018 by a group of philanthropists who saw an opportunity to revolutionize 
                  charitable giving. They recognized that donors wanted more transparency in how their contributions 
                  were being used and more direct connections to the causes they supported.
                </p>
                <p>
                  What began as a small platform supporting local initiatives has grown into a global network 
                  connecting thousands of donors with hundreds of vetted causes. Today, KindAid facilitates millions 
                  in donations annually, with 95% of contributions going directly to the intended causes.
                </p>
                <p>
                  Our team has expanded from a handful of dedicated volunteers to a diverse group of professionals 
                  united by the belief that generosity has the power to change lives. We remain committed to our 
                  founding vision: making giving simple, transparent, and impactful.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated individuals guiding our mission.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member Cards would go here */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <div className="w-full h-48 bg-gray-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-teal-500 mb-3">Founder & CEO</p>
                  <p className="text-gray-600">
                    Sarah brings 15 years of nonprofit experience and a passion for community development.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <div className="w-full h-48 bg-gray-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                  <p className="text-teal-500 mb-3">Chief Operations Officer</p>
                  <p className="text-gray-600">
                    Michael oversees our operations and ensures every donation reaches its intended cause.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <div className="w-full h-48 bg-gray-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Amara Washington</h3>
                  <p className="text-teal-500 mb-3">Director of Partnerships</p>
                  <p className="text-gray-600">
                    Amara builds relationships with organizations and ensures our causes meet strict vetting criteria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-teal-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Whether you're looking to donate, volunteer, or partner with us, there are many ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-teal-500 hover:bg-gray-100" asChild>
                <Link to="/causes">Donate Now</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-teal-600" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
