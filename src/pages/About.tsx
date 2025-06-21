
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Factory, Users, Award, Clock, Shield, Cog, Zap } from 'lucide-react';

const About = () => {
  const materials = [
    "Aluminum Alloys",
    "Steel & Stainless Steel",
    "Cast Iron",
    "Copper Alloys",
    "Zinc Alloys",
    "Magnesium Alloys"
  ];

  const industries = [
    "Automotive",
    "Aerospace",
    "Marine",
    "Construction",
    "Industrial Equipment",
    "Energy & Power"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">About SHAPEL</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Leading the metal casting industry with precision, innovation, and unwavering quality since our founding.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    SHAPEL has been at the forefront of metal casting innovation for over two decades. What started as a small foundry has grown into a leading manufacturer serving industries across the globe.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our commitment to precision, quality, and customer satisfaction has made us the trusted partner for companies requiring complex metal casting solutions.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we combine traditional craftsmanship with cutting-edge technology to deliver exceptional results that exceed expectations.
                  </p>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <img src="/lovable-uploads/707d3b93-5b12-4fcc-a657-6acc8f8ecc84.png" alt="SHAPEL Logo" className="w-32 h-32 mx-auto mb-6" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">SHAPEL</h3>
                    <p className="text-gray-600">Shaping Metal, Building Future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#ED1C24] py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center text-white">
                <Factory className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div className="text-center text-white">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Satisfied Clients</div>
              </div>
              <div className="text-center text-white">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Industry Awards</div>
              </div>
              <div className="text-center text-white">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#ED1C24]">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver superior metal casting solutions that meet the highest standards of quality, precision, and reliability. We are committed to building long-term partnerships with our clients by consistently exceeding their expectations and contributing to their success.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#ED1C24]">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the global leader in innovative metal casting solutions, driving industry standards forward through continuous improvement, technological advancement, and sustainable practices that benefit our customers, employees, and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials & Industries */}
        <section className="bg-gray-50 py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Materials We Work With</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {materials.map((material, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 hover-scale"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-[#ED1C24] rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">{material}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Industries We Serve</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {industries.map((industry, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 hover-scale"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-[#ED1C24] rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">{industry}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Quality Assurance</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Every casting undergoes rigorous quality control processes to ensure it meets the highest standards of precision and durability.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center hover-scale">
                  <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Material Testing</h4>
                  <p className="text-gray-600">Comprehensive material analysis and testing protocols</p>
                </div>
                <div className="text-center hover-scale">
                  <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cog className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Precision Measurement</h4>
                  <p className="text-gray-600">Advanced measurement tools for dimensional accuracy</p>
                </div>
                <div className="text-center hover-scale">
                  <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Performance Testing</h4>
                  <p className="text-gray-600">Rigorous testing to ensure optimal performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
