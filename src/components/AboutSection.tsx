
import React from 'react';
import { Award, Users, Cog, Target, Shield, Clock, Star, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-down">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#ED1C24]">SHAPEL</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              For over two decades, SHAPEL has been at the forefront of metal casting innovation, delivering precision solutions that exceed industry standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 animate-fade-in-left">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to excellence, combined with cutting-edge technology and expert craftsmanship, has made us the trusted partner for companies requiring complex metal casting solutions across diverse industries.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  From automotive components to aerospace parts, from industrial machinery to architectural elements, we deliver precision casting solutions that meet the most demanding specifications and quality standards.
                </p>
                
                {/* Key Achievements */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm hover-lift animate-scale-in animate-delay-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Star className="w-6 h-6 text-[#ED1C24] mr-3" />
                    Our Legacy of Excellence
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center animate-slide-up animate-delay-400">
                      <Target className="w-5 h-5 text-[#ED1C24] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">ISO 9001:2015 Certified Manufacturing</span>
                    </div>
                    <div className="flex items-center animate-slide-up animate-delay-500">
                      <Shield className="w-5 h-5 text-[#ED1C24] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Zero Defect Quality Assurance</span>
                    </div>
                    <div className="flex items-center animate-slide-up animate-delay-600">
                      <Clock className="w-5 h-5 text-[#ED1C24] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Guaranteed On-Time Delivery</span>
                    </div>
                    <div className="flex items-center animate-slide-up animate-delay-700">
                      <Award className="w-5 h-5 text-[#ED1C24] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Industry Leadership Recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Logo Section */}
            <div className="flex justify-center animate-fade-in-right animate-delay-200">
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-2xl p-8 shadow-xl hover-scale border border-gray-200">
                <img 
                  src="/lovable-uploads/707d3b93-5b12-4fcc-a657-6acc8f8ecc84.png" 
                  alt="SHAPEL Logo" 
                  className="w-48 h-48 mx-auto opacity-90"
                />
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">SHAPEL</h3>
                  <p className="text-gray-600 text-lg mb-4">Shaping Metal, Building Future</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p className="flex items-center justify-center">
                      <Users className="w-4 h-4 mr-2 text-[#ED1C24]" />
                      Trusted by 500+ companies worldwide
                    </p>
                    <p className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2 text-[#ED1C24]" />
                      Delivering excellence since 2000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100 animate-bounce-in animate-delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ED1C24] to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Quality First</h4>
              <p className="text-gray-600 leading-relaxed">Rigorous quality control processes ensure every casting meets the highest standards.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100 animate-bounce-in animate-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ED1C24] to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Expert Team</h4>
              <p className="text-gray-600 leading-relaxed">Experienced professionals with deep knowledge in metal casting techniques.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100 animate-bounce-in animate-delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ED1C24] to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Advanced Tech</h4>
              <p className="text-gray-600 leading-relaxed">State-of-the-art equipment and innovative casting technologies.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100 animate-bounce-in animate-delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ED1C24] to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Fast Delivery</h4>
              <p className="text-gray-600 leading-relaxed">Quick turnaround times without compromising on quality or precision.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
