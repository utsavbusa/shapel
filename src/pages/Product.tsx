
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Product = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Our Products</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Precision-engineered metal casting products that meet the highest industry standards.
              </p>
            </div>
          </div>
        </section>

        {/* Product Images Gallery */}
        <section className="py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/d6befdc7-3ffa-4f74-8587-810acb851f13.png" 
                      alt="Metal Casting Product"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/79b2b5ba-baa3-4d9b-82f3-94c298c0437f.png" 
                      alt="Metal Casting Product"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/6c1a7e65-7e0f-4f86-a4da-86d400793507.png" 
                      alt="Metal Casting Product"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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
