
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cog, Wrench, Zap, Shield } from 'lucide-react';

const Product = () => {
  const products = [
    {
      title: "Sand Casting",
      description: "Traditional sand casting for complex geometries and large components with excellent surface finish.",
      features: ["Custom patterns", "Various alloys", "Large components", "Complex shapes"],
      icon: <Cog className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Die Casting",
      description: "High-pressure die casting for precision components with tight tolerances and excellent repeatability.",
      features: ["High precision", "Fast production", "Smooth finish", "Dimensional accuracy"],
      icon: <Wrench className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Investment Casting",
      description: "Precision investment casting for intricate parts requiring superior surface finish and dimensional accuracy.",
      features: ["Complex geometries", "Superior finish", "Tight tolerances", "Minimal machining"],
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Custom Alloy Casting",
      description: "Specialized casting solutions using custom alloy compositions for unique application requirements.",
      features: ["Custom alloys", "Special properties", "Application specific", "Expert consultation"],
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop&crop=center"
    }
  ];

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
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Our Products & Services</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Comprehensive metal casting solutions designed to meet your specific requirements with precision and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">Casting Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {products.map((product, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#ED1C24] overflow-hidden hover-scale animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="text-[#ED1C24] mr-4">
                          {product.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-[#ED1C24] rounded-full mr-3"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
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

export default Product;
