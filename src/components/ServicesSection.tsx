
import React from 'react';
import { Cog, Wrench, Zap, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const headerAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const services = [
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Sand Casting",
      description: "Traditional sand casting for complex geometries and large components with excellent surface finish and dimensional accuracy."
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Die Casting",
      description: "High-pressure die casting for precision components with tight tolerances and excellent repeatability for mass production."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Investment Casting",
      description: "Precision investment casting for intricate parts requiring superior surface finish and dimensional accuracy."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Custom Alloy Casting",
      description: "Specialized casting solutions using custom alloy compositions for unique application requirements and specifications."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              headerAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-[#ED1C24]">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive metal casting services designed to meet your specific requirements with precision, quality, and reliability.
            </p>
          </div>

          {/* Services Grid */}
          <div 
            ref={servicesAnimation.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-200 ${
              servicesAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#ED1C24] group ${
                  servicesAnimation.isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[#ED1C24] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div 
            ref={ctaAnimation.ref}
            className={`text-center mt-16 transition-all duration-1000 delay-600 ${
              ctaAnimation.isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="bg-[#ED1C24] text-white p-8 rounded-2xl shadow-xl hover-scale">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our expert team can develop tailored casting solutions for your unique requirements.
              </p>
              <button className="bg-white text-[#ED1C24] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
