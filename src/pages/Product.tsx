
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

        {/* Our Products Gallery */}
        <section className="bg-gray-50 py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Products</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Precision-engineered metal casting products that meet the highest industry standards.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/d6befdc7-3ffa-4f74-8587-810acb851f13.png" 
                      alt="Metal Casting Component"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Components</h3>
                    <p className="text-gray-600">High-precision metal components for industrial applications.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/79b2b5ba-baa3-4d9b-82f3-94c298c0437f.png" 
                      alt="Metal Casting Flange"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Flanges</h3>
                    <p className="text-gray-600">Specialized flanges designed for specific engineering requirements.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/6c1a7e65-7e0f-4f86-a4da-86d400793507.png" 
                      alt="Metal Casting Ring"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bearing Components</h3>
                    <p className="text-gray-600">Durable bearing components with superior finish and accuracy.</p>
                  </div>
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
