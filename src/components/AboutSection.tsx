
import React from 'react';
import { Award, Users, Cog } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-[#ED1C24]">SHAPEL</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                For over two decades, SHAPEL has been at the forefront of metal casting innovation, delivering precision solutions that exceed industry standards.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our commitment to excellence, combined with cutting-edge technology and expert craftsmanship, has made us the trusted partner for companies requiring complex metal casting solutions across diverse industries.
              </p>
              
              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality First</h4>
                  <p className="text-sm text-gray-600">Rigorous quality control processes ensure every casting meets the highest standards.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-sm text-gray-600">Experienced professionals with deep knowledge in metal casting techniques.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 bg-[#ED1C24] rounded-full flex items-center justify-center mb-4">
                    <Cog className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Tech</h4>
                  <p className="text-sm text-gray-600">State-of-the-art equipment and innovative casting technologies.</p>
                </div>
              </div>
            </div>
            
            {/* Image/Logo */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 shadow-xl">
                <img 
                  src="/lovable-uploads/707d3b93-5b12-4fcc-a657-6acc8f8ecc84.png" 
                  alt="SHAPEL Logo" 
                  className="w-64 h-64 mx-auto opacity-90"
                />
                <div className="text-center mt-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">SHAPEL</h3>
                  <p className="text-gray-600 text-lg">Shaping Metal, Building Future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
