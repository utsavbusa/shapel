
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-32 relative text-center">
        {/* Main Headline - Centered */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          Precision Metal Casting
          <span className="block text-[#ED1C24]">Excellence</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          SHAPEL delivers superior metal casting solutions with unmatched precision, quality, and reliability for industries worldwide.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-[#ED1C24] hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover-scale"
          >
            Get Quote Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 group hover-scale flex items-center"
          >
            <Play className="mr-2 w-5 h-5" />
            <span>Watch Our Process</span>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center hover-scale">
            <div className="text-3xl md:text-4xl font-bold text-[#ED1C24] mb-2">20+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center hover-scale">
            <div className="text-3xl md:text-4xl font-bold text-[#ED1C24] mb-2">500+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center hover-scale">
            <div className="text-3xl md:text-4xl font-bold text-[#ED1C24] mb-2">50+</div>
            <div className="text-sm text-gray-400">Industry Awards</div>
          </div>
          <div className="text-center hover-scale">
            <div className="text-3xl md:text-4xl font-bold text-[#ED1C24] mb-2">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
